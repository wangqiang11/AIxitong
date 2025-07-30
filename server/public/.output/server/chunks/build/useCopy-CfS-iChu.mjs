import { ao as ElMessage } from './server.mjs';
import { useClipboard } from '@vueuse/core';

function useCopy() {
  const copy = async (text, message = "\u590D\u5236\u6210\u529F") => {
    const { copy: copy2 } = useClipboard({ source: text });
    try {
      if ((void 0).clipboard) {
        setTimeout(async () => {
          await copy2(text);
        }, 0);
      } else {
        const textarea = (void 0).createElement("textarea");
        textarea.value = text;
        (void 0).body.appendChild(textarea);
        textarea.select();
        (void 0).execCommand("copy");
        (void 0).body.removeChild(textarea);
      }
      ElMessage.success({ message });
    } catch (error) {
      console.log(error);
      ElMessage.error({ message: "\u590D\u5236\u5931\u8D25" });
    }
  };
  return {
    copy
  };
}

export { useCopy as u };
//# sourceMappingURL=useCopy-CfS-iChu.mjs.map
