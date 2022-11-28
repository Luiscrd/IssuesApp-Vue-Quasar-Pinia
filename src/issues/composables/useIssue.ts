import { useQuery, useQueryClient } from '@tanstack/vue-query';
import { gitHubApi } from 'src/api/gitHubApi';
import { Issue } from 'src/issues/interfaces/issues.interface';
import { Comment } from 'src/issues/interfaces/comments.interface';

const getIssue = async (issueNumber: number): Promise<Issue> => {

    const { data } = await gitHubApi.get<Issue>(`/issues/${issueNumber}`);

    return data;

}

const getComentIssue = async (issueNumber: number): Promise<Comment[]> => {

    const { data } = await gitHubApi.get<Comment[]>(`/issues/${issueNumber}/comments`);

    return data;

}

interface Options {
    autoload?: boolean;
}

const useIssue = (issueNumber: number, options?: Options) => {

    const { autoload = true } = options || {};

    const queryClient = useQueryClient();

    const issueQuery = useQuery(
        ['issue', issueNumber],
        () => getIssue(issueNumber),
        {
            staleTime: 1000 * 60,
            enabled: autoload
        }

    )

    const issueCommentQuery = useQuery(
        ['issue-coments', issueNumber],
        () => getComentIssue(issueNumber),
        {
            staleTime: 1000 * 15,
            enabled: autoload
        }

    )

    const prefechtIssue = (issueNumber: number) => {

        queryClient.prefetchQuery(
            ['issue', issueNumber],
            () => getIssue(issueNumber),
            {
                staleTime: 1000 * 60,
            }
        )

        queryClient.prefetchQuery(
            ['issue-coments', issueNumber],
            () => getComentIssue(issueNumber),
            {
                staleTime: 1000 * 15,
            }
        )

    }

    return {
        issueQuery,
        issueCommentQuery,
        prefechtIssue
    }

}

export default useIssue;