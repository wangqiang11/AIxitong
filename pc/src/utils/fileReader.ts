import mammoth from 'mammoth'
import * as pdfjsLib from 'pdfjs-dist/build/pdf'

import workerSrc from 'pdfjs-dist/build/pdf.worker.js?url'
import Papa from 'papaparse'
import { read, utils } from 'xlsx'
import { html2md } from './htmlStr2Md'

pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc
export const readTxtContent = (file: File) => {
    return new Promise((resolve: (_: string) => void, reject) => {
        try {
            const reader = new FileReader()
            reader.onload = () => {
                resolve(reader.result as string)
            }
            reader.onerror = (err) => {
                console.log('error txt read:', err)
                reject('读取 txt 文件失败')
            }
            reader.readAsText(file)
        } catch (error) {
            reject('浏览器不支持文件内容读取')
        }
    })
}

type TokenType = {
    str: string
    dir: string
    width: number
    height: number
    transform: number[]
    fontName: string
    hasEOL: boolean
}
/**
 * 读取 pdf 内容
 */
export const readPdfContent = (file: File) =>
    new Promise<string>(async (resolve, reject) => {
        try {
            const readPDFPage = async (doc: any, pageNo: number) => {
                try {
                    const page = await doc.getPage(pageNo)
                    const tokenizedText = await page.getTextContent()

                    const viewport = page.getViewport({ scale: 1 })
                    const pageHeight = viewport.height
                    const headerThreshold = pageHeight * 0.95
                    const footerThreshold = pageHeight * 0.05

                    const pageTexts: TokenType[] = tokenizedText.items.filter(
                        (token: TokenType) => {
                            return (
                                !token.transform ||
                                (token.transform[5] < headerThreshold &&
                                    token.transform[5] > footerThreshold)
                            )
                        }
                    )

                    // concat empty string 'hasEOL'
                    for (let i = 0; i < pageTexts.length; i++) {
                        const item = pageTexts[i]
                        if (item.str === '' && pageTexts[i - 1]) {
                            pageTexts[i - 1].hasEOL = item.hasEOL
                            pageTexts.splice(i, 1)
                            i--
                        }
                    }

                    page.cleanup()

                    return pageTexts
                        .map((token) => {
                            const paragraphEnd =
                                token.hasEOL &&
                                /([。？！.?!\n\r]|(\r\n))$/.test(token.str)

                            return paragraphEnd ? `${token.str}\n` : token.str
                        })
                        .join('')
                } catch (error) {
                    console.log('pdf read error', error)
                    return ''
                }
            }

            const reader = new FileReader()
            reader.readAsArrayBuffer(file)
            reader.onload = async (event) => {
                if (!event?.target?.result) return reject('解析 PDF 失败')
                try {
                    const loadingTask = pdfjsLib.getDocument({
                        data: event.target.result,
                        cMapUrl:
                            'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.5.207/cmaps/',
                        cMapPacked: true
                    })
                    const doc = await loadingTask.promise

                    const pageTextPromises = []
                    for (let pageNo = 1; pageNo <= doc.numPages; pageNo++) {
                        pageTextPromises.push(readPDFPage(doc, pageNo))
                    }

                    const pageTexts = await Promise.all(pageTextPromises)

                    loadingTask.destroy()
                    resolve(pageTexts.join('\n'))
                } catch (err) {
                    console.log(err, 'pdfjs error')
                    reject('解析 PDF 失败')
                }
            }
            reader.onerror = (err) => {
                console.log(err, 'reader error')
                reject('解析 PDF 失败')
            }
        } catch (error) {
            console.log(error)
            reject('浏览器不支持文件内容读取')
        }
    })

/**
 * 读取doc
 */
export const readDocContent = (file: File) =>
    new Promise<string>((resolve, reject) => {
        try {
            if (file.name.toLowerCase().endsWith('.doc')) {
                reject('暂不支持 .doc 格式，请转换为 .docx 后再上传')
                return
            }
            const reader = new FileReader()
            reader.readAsArrayBuffer(file)
            reader.onload = async ({ target }) => {
                if (!target?.result) return reject('读取 doc 文件失败')
                try {
                    const { value: html } = await mammoth.convertToHtml({
                        arrayBuffer: target.result as ArrayBuffer
                    })
                    console.log(html)
                    const rawText = html2md(html)
                    console.log({ rawText })
                    resolve(rawText)
                } catch (error) {
                    console.log(error)
                    reject('读取 doc 文件失败, 请转换成 PDF')
                }
            }
            reader.onerror = (err) => {
                console.log('error doc read:', err)

                reject('读取 doc 文件失败')
            }
        } catch (error) {
            reject('浏览器不支持文件内容读取')
        }
    })

/**
 * 读取csv
 */
export const readCsvContent = async (file: File) => {
    try {
        const textArr = await readTxtContent(file)
        const json = Papa.parse(textArr).data as string[][]
        if (json.length === 0) {
            throw new Error('csv 解析失败')
        }
        const totolData: any = []
        const list = {
            header: json.shift()?.filter((item) => item) as string[],
            data: json.map((item) => item?.filter((item) => item))
        }
        list.data.map((item) => {
            const obj: any = {}
            obj[list.header[0]] = item[0]
            obj[list.header[1]] = item[1]
            if (item[0] != undefined) {
                totolData.push(obj)
            }
        })
        return totolData
    } catch (error) {
        return Promise.reject('解析 csv 文件失败')
    }
}

//读取xlsx文件
export const readXlsxContent = (file: File) => {
    return new Promise<any>((resolve, reject) => {
        try {
            const reader = new FileReader()
            reader.readAsBinaryString(file)
            reader.onload = (e: any) => {
                const data = e.target.result
                const workbook = read(data, { type: 'binary' })
                const jsonData: any = {}
                const totolData: any[] = []
                if (workbook.SheetNames && workbook.SheetNames.length > 0) {
                    for (let i = 0; i < workbook.SheetNames.length; i++) {
                        const sheetName = workbook.SheetNames[i],
                            // 将数据转为json对象，第一行会自动识别为列名
                            sheetJson = utils.sheet_to_json(
                                workbook.Sheets[sheetName]
                            )
                        jsonData[sheetName] = sheetJson
                    }
                }
                Object.keys(jsonData).map((itemKey) => {
                    jsonData[itemKey].forEach(
                        (itemData: { qusetion: any; answer: any }) => {
                            totolData.push(itemData)
                        }
                    )
                })
                resolve(totolData)
            }
            reader.onerror = (err) => {
                console.log('error doc read:', err)
                reject('读取 doc 文件失败')
            }
        } catch (error) {
            reject('读取文件失败！')
        }
    })
}

// 截取字符串，优先根据标点符号截取
export const splitText2Chunks = (text: string, maxLen = 3500) => {
    const overlapLen = Math.floor(maxLen * 0.25) // Overlap length

    const splitTexts = text.split(/(?<=[。！？；.!?;])/g)
    const chunks: string[] = []

    let preChunk = ''
    let chunk = ''
    for (let i = 0; i < splitTexts.length; i++) {
        const text = splitTexts[i]
        chunk += text
        if (chunk.length > maxLen - overlapLen) {
            preChunk += text
        }
        if (chunk.length >= maxLen) {
            chunks.push(chunk)
            chunk = preChunk
            preChunk = ''
        }
    }

    if (chunk) {
        chunks.push(chunk)
    }
    return chunks
}
