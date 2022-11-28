<script setup lang="ts">
import LoaderSpiner from 'src/shared/components/LoaderSpiner.vue';
import FilterSelector from 'src/issues/components/filter-selecto/FilterSelector.vue';
import IssueList from 'src/issues/components/issue-list/IssueList.vue';


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
            <div v-if="false" class="loading-rigth">
                <LoaderSpiner spacing-p="2.5" spacing-s="15" />
            </div>
            <IssueList />
        </div>
    </div>
</template>

<style scoped>
.right-box {
    position: relative;
}

.loading-rigth {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>