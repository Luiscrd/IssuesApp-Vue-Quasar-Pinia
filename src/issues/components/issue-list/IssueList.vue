<script setup lang='ts'>
import IssueCard from 'src/issues/components/issue-list/IssueCard.vue';
import { Issue } from 'src/issues/interfaces/issues.interface';

interface Props {
    issues: Issue[]
}

const props = defineProps<Props>();


</script>

<template>
    <div class="row">
        <IssueCard v-for="issue of props.issues" :key="issue.id" :issue="issue" :issue-number="issue.number" />
    </div>
    <q-card dark bordered class="my-card" v-if="props.issues.length === 0">
        <q-card-section>
            <div class="text-h6">No hay Resultados</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>No hay resultados para la busqueda actual, prueba a utilizar otro tipo de filtros.
        </q-card-section>
    </q-card>
</template>

<style scoped>

</style>