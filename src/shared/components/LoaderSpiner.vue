<script setup lang="ts">
import { toRef } from 'vue';


interface Props {
    color?: string;
    size?: string;
    thickness?: number;
    showText?: boolean,
    textSize?: '1' | '2' | '3' | '4',
    spacingS?: '5' | '10' | '15' | '20' | '25',
    spacingP?: '2.5' | '5' | '10' | '15' | '20' | '25' | '30',
}

const props = withDefaults(defineProps<Props>(), {
    color: 'primary',
    size: '3.5rem',
    thickness: 5,
    showText: true,
    textSize: '2',
    spacingS: '15',
    spacingP: '10'
});

const color = toRef(props, 'color');
const size = toRef(props, 'size');
const thickness = toRef(props, 'thickness');
const showText = toRef(props, 'showText');
const textSize = toRef(props, 'textSize');
const spacingS = toRef(props, 'spacingS');
const spacingP = toRef(props, 'spacingP');

const textSizeSpan = `font-size: ${textSize.value}em; margin-top: ${+spacingS.value}px;`;
const textSizeP = `font-size: 1.${textSize.value}em; margin-top: ${spacingP.value}px;`;

</script>

<template>
    <div class="column items-center">
        <q-spinner :color="color" :size="size" :thickness="thickness" />
        <template v-if="showText">
            <span class="q-mt-sm" :style="textSizeSpan">Loading...</span>
            <p :style="textSizeP">Espere por favor...</p>
        </template>
    </div>
</template>

<style scoped>

</style>