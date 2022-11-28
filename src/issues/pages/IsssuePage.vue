<script setup lang="ts">
import { useRoute } from 'vue-router';
import LoaderSpiner from 'src/shared/components/LoaderSpiner.vue';
import IssueCard from '../components/issue-list/IssueCard.vue';
import useIssue from '../composables/useIssue';

const route = useRoute();

const { id } = route.params;

const { issueQuery, issueCommentQuery } = useIssue(+id);

const labelBreadcrumb = `Issue: ${id}`;

</script>

<template>
    <div v-if="issueQuery.isLoading.value" class="loading">
        <LoaderSpiner size="100px" text-size="3" />
    </div>
    <div v-else class="container">
        <q-breadcrumbs class="breadcrums">
            <q-breadcrumbs-el label="Issue List" icon="home" to="/" />
            <q-breadcrumbs-el :label="labelBreadcrumb" icon="widgets" />
        </q-breadcrumbs>
        <IssueCard v-if="issueQuery.data.value" :issue="issueQuery.data.value" />
        <div class="column">
            <span class="text-h5 q-mb-md">Comentarios ({{ issueQuery.data.value?.comments }})</span>
            <IssueCard v-for="coment of issueCommentQuery.data.value" :key="coment.id" :comments="coment" />
        </div>
    </div>
</template>

<style scoped>
.breadcrums {
    margin-bottom: 20px;
}

.q-router-link--active:hover {
    transition: 0.3s;
    opacity: 0.3;
}
</style>