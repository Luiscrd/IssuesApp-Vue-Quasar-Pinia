import { useQuery } from '@tanstack/vue-query';
import { gitHubApi } from 'src/api/gitHubApi';
import { Issue } from 'src/issues/interfaces/issues.interface';
import { Comment } from 'src/issues/interfaces/comments.interface';
import { computed } from 'vue';

const getIssue = async (issueNumber: number): Promise<Issue> => {

    const { data } = await gitHubApi.get<Issue>(`/issues/${issueNumber}`);

    return data;

}

const getComentIssue = async (issueNumber: number): Promise<Comment[]> => {

    const { data } = await gitHubApi.get<Comment[]>(`/issues/${issueNumber}/comments`);

    return data;

}

const useIssue = (issueNumber: number) => {

    const issueQuery = useQuery(
        ['issue', issueNumber],
        () => getIssue(issueNumber),
        {
            staleTime: 1000 * 60,
        }

    )

    const issueCommentQuery = useQuery(
        ['issue-coments', issueNumber],
        () => getComentIssue(issueNumber),
        {
            staleTime: 1000 * 15,
            enabled: computed(() => !!issueQuery.data.value)
        }

    )

    return {
        issueQuery,
        issueCommentQuery
    }

}

export default useIssue;