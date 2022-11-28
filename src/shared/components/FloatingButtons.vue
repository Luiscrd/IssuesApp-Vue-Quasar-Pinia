<script setup lang="ts">import { Buttons } from 'src/shared/interfaces/button.interface';


interface Props {
    buttons: Buttons[]
}

const props = defineProps<Props>();

</script>

<template>
    <div class="fab">
        <div class="q-pa-md q-gutter-sm">
            <q-btn v-for="icon of props.buttons" :key="icon.icon" round :color="icon.color" :icon="icon.icon"
                :size="icon.size" @click="icon.acction" />
        </div>
    </div>
</template>

<style scoped>
.fab {
    position: fixed;
    bottom: 30px;
    right: 30px;
}
</style>