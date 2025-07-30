import type { FileRecord } from '~/components/the-chat-action/upload-button.vue'

import { ref } from "vue";
import { useAppStore } from "~/stores/app";

function useSessionFiles() {
    const { getChatConfig: chatConfig } = useAppStore();
    const isSupportFile = Boolean(chatConfig.support_file);
    const files = ref<FileRecord[]>([]);

    const addFile = (file: FileRecord) => {
        files.value = [...files.value, file];
    };

    const removeFile = (file: FileRecord) => {
        files.value = files.value.filter(record => record.id !== file.id);
    };

    const clear = () => {
        files.value = [];
    };

    return {
        isSupportFile,
        files,
        addFile,
        removeFile,
        clear,
    };
}

export { useSessionFiles };
