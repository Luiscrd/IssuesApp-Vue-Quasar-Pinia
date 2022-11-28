<script setup lang='ts'>
import LoaderSpiner from 'src/shared/components/LoaderSpiner.vue';
import useLabels from 'src/issues/composables/useLabels';

const { labelsQuery, toogleLabel, selectedLabels } = useLabels();

const labels = labelsQuery.data;

</script>

<template>
    <div v-if="labelsQuery.isLoading.value" class="loding-left">
        <LoaderSpiner size="50px" :thickness="5" text-size="2" spacing-s="5" spacing-p="2.5" />
    </div>
    <q-chip v-else v-for="label of labels" :key="label.id" :style="{ color: `#${label.color}` }"
        :outline="!selectedLabels.includes(label.name)" clickable @click="toogleLabel(label.name)">{{
        label.name
        }}
    </q-chip>
</template>

<style scoped>
.loding-left {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.q-chip {
    margin-top: 7px;
}
</style>