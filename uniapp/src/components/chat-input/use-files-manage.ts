import type { FileRecord } from './file-parser.vue'

import { ref } from 'vue'

function useFilesManage() {
    const files = ref<FileRecord[]>([])

    const addFile = (file: FileRecord) => {
        files.value = [...files.value, file]
    }

    const removeFile = (file: FileRecord) => {
        files.value = files.value.filter((record) => record.id !== file.id)
    }

    const clear = () => {
        files.value = []
    }

    return {
        files,
        addFile,
        removeFile,
        clear
    }
}

export { useFilesManage }
