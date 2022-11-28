import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useIssuesStore = defineStore('Issues', () => {

    const state = ref('');

    const labels = ref<string[]>([]);

    return {
        state,
        labels,
        tootglelabel(labelName: string) {
            throw new Error('Acción no implementada');
        }
    }

})