import { storeToRefs } from 'pinia';
import { useIssuesStore } from 'src/stores/isssues';

const useStore = () => {

    const issuesStore = useIssuesStore();

    const { labels, state } = storeToRefs(issuesStore);

    return {
        labels,
        state
    }

}

export default useStore;