<script setup lang="ts">
import LoaderSpiner from 'src/shared/components/LoaderSpiner.vue';
import FilterSelector from 'src/issues/components/filter-selecto/FilterSelector.vue';
import IssueList from 'src/issues/components/issue-list/IssueList.vue';
import useIssues from 'src/issues/composables/useIssues';
import FloatingButtons from 'src/shared/components/FloatingButtons.vue';
import { Buttons } from 'src/shared/interfaces/button.interface';
import NewIssueDEialog from '../components/NewIssueDEialog.vue';
import { ref } from 'vue';
import useLabels from '../composables/useLabels';

const { issuesQuery } = useIssues();

const { labelsQuery } = useLabels();

const show = ref<boolean>(false);

const newIssue = () => {
    show.value = true;
}

const listButtons: Buttons[] = [
    { color: 'primary', size: 'lg', icon: 'addchart', acction: newIssue }
]

</script>

<template>
    <div class="row q-mb-md q-mt-md">
        <div class="col-12">
            <span class="text-h4">GitHub Issues</span>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-md-4 relative">
            <FilterSelector />
        </div>
        <div class="col-xs-12 col-md-8 right-box">
            <div v-if="issuesQuery.isLoading.value" class="loading-rigth">
                <LoaderSpiner spacing-p="2.5" spacing-s="15" />
            </div>
            <IssueList :issues="issuesQuery.data.value || []" v-else />
        </div>
    </div>
    <FloatingButtons :buttons="listButtons" />
    <NewIssueDEialog v-if="labelsQuery.data" :labels="labelsQuery.data.value?.map(label => label.name) || []"
        :show="show" @on-close="show = false" />
</template>

<style scoped>
.right-box {
    position: relative;
}

.loading-rigth {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>