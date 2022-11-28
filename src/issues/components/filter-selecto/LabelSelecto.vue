<script setup lang='ts'>
import LoaderSpiner from 'src/shared/components/LoaderSpiner.vue';

</script>

<template>
    <div v-if="false" class="loding-left">
        <LoaderSpiner size="50px" :thickness="5" text-size="2" spacing-s="5" spacing-p="2.5" />
    </div>
    <q-chip v-for="label of 80" :key="label" color="primary" outline clickable>Hola</q-chip>
</template>

<style scoped>
.loding-left {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>