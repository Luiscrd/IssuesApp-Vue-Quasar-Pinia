import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useIssuesStore = defineStore('Issues', () => {

    const state = ref('');

    const labels = ref<string[]>([]);

    return {
        state,
        labels,
        tootglelabel(labelName: string) {

            if (labels.value.includes(labelName)) {

                labels.value = labels.value.filter(label => label !== labelName);
                return;
            }

            labels.value.push(labelName);
        }
    }

})