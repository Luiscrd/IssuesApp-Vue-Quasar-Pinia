import { useQuery } from '@tanstack/vue-query';
import { gitHubApi } from 'src/api/gitHubApi';
import { Label } from 'src/issues/interfaces/labesls.interface';
import { useIssuesStore } from 'src/stores/isssues';
import { computed } from 'vue';

const getLabels = async (): Promise<Label[]> => {

    const { data } = await gitHubApi<Label[]>('/labels?per_page=100');

    return data;

}

const useLabels = () => {

    const issuesStore = useIssuesStore();

    const labelsQuery = useQuery(
        ['labels'],
        getLabels,
        {
            staleTime: 1000 * 60 * 60,
        }
    )

    return {
        labelsQuery,
        selectedLabels: computed(() => issuesStore.labels),
        toogleLabel: issuesStore.tootglelabel
    }

}

export default useLabels;