import { useQuery } from '@tanstack/vue-query';
import { Issue } from 'src/issues/interfaces/issues.interface';
import { gitHubApi } from 'src/api/gitHubApi';
import { useIssuesStore } from 'src/stores/isssues';
import { storeToRefs } from 'pinia';
import { State } from 'src/issues/interfaces/issues.interface';

const getIssues = async (labels: string[], state: State): Promise<Issue[]> => {

    const params = new URLSearchParams();

    if (state) params.append('state', state);

    if (labels.length) {

        const labelsString = labels.join(',');

        params.append('labels', labelsString);

    }

    params.append('per_page', '10');

    const { data } = await gitHubApi.get<Issue[]>('/issues', {
        params
    });

    console.log(data);


    return data;

}

const useIssues = () => {

    const issuesStore = useIssuesStore();

    const { labels, state } = storeToRefs(issuesStore);

    const issuesQuery = useQuery(
        ['issues', { labels, state }],
        () => getIssues(labels.value, state.value),
        {
            staleTime: 1000 * 60 * 60,
        }

    )

    return {
        issuesQuery
    }

}

export default useIssues;