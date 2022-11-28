<script setup lang="ts">
import { useRoute } from 'vue-router';
import LoaderSpiner from 'src/shared/components/LoaderSpiner.vue';
import IssueCard from '../components/issue-list/IssueCard.vue';

const route = useRoute();

const { id } = route.params;

const labelBreadcrumb = `Issue: ${id}`;

</script>

<template>
    <div v-if="false" class="loading">
        <LoaderSpiner size="100px" text-size="3" />
    </div>
    <div class="container">
        <q-breadcrumbs class="breadcrums">
            <q-breadcrumbs-el label="Issue List" icon="home" to="/" />
            <q-breadcrumbs-el :label="labelBreadcrumb" icon="widgets" />
        </q-breadcrumbs>
        <IssueCard />
        <div class="column">
            <span class="text-h5 q-mb-md">Comentarios (5)</span>
            <IssueCard v-for="coment of 5" :key="coment" />
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