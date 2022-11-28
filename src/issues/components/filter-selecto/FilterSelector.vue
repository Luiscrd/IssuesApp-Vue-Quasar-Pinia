<script setup lang='ts'>
import LabelSelecto from './LabelSelecto.vue';
import StateSelector from './StateSelector.vue';


</script>

<template>
    <div class="q-px-md left-box">
        <StateSelector />
        <div class="labels">
            <LabelSelecto />
        </div>
    </div>
</template>

<style scoped>
.left-box {
    position: relative;
}

.labels {
    text-align: center;
    margin-top: 20px;
}
</style>