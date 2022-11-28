import { ref } from 'vue';
import { defineStore } from 'pinia';
import { State } from 'src/issues/interfaces/issues.interface';

export const useIssuesStore = defineStore('Issues', () => {

    const state = ref<State>(State.All);

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