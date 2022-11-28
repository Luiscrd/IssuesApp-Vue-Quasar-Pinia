import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { Issue } from 'src/issues/interfaces/issues.interface';
import { gitHubApi } from '../../api/gitHubApi';

interface Args {
    title: string;
    labels?: string[];
    body?: string;
}

const addIssue = async ({ title, labels = [], body = '' }: Args): Promise<Issue> => {

    const newIssueData = { title, labels, body };

    const { data } = await gitHubApi.post<Issue>('/issues', newIssueData);

    return data;

}

const useIssueMutation = () => {

    const qeryClient = useQueryClient();

    const issuMutation = useMutation(addIssue, {
        onSuccess: (issue) => {

            qeryClient.invalidateQueries({
                queryKey: ['issues'],
                exact: false
            });

            qeryClient.refetchQueries(
                ['issues'],
                { exact: false }
            );

            qeryClient.setQueriesData(
                ['issue', issue.number],
                issue
            );

        },
        onSettled: () => {
            console.log('adios');
        }
    })

    return {
        issuMutation
    }

}

export default useIssueMutation;