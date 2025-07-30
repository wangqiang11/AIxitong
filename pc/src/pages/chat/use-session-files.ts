import type { FileRecord } from '~/components/the-chat-action/upload-button.vue'

import { ref } from "vue";

function useSessionFiles() {
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
        files,
        addFile,
        removeFile,
        clear,
    };
}

export { useSessionFiles };
