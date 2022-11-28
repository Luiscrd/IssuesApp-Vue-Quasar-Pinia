<script setup lang="ts">
import { ref, watch } from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

interface Props {
    show: boolean;
    labels: string[];
}

interface Emits {
    (e: 'onClose'): void;
}

const props = defineProps<Props>();

const emits = defineEmits<Emits>();

const modal = ref<boolean>(false);

const title = ref<string>('');

const body = ref<string>('');

const labels = ref<string[]>([]);

watch(props, () => {
    modal.value = true;
})

</script>

<template>
    <q-dialog v-model="modal" transition-show="rotate" transition-hide="rotate" persistent>
        <q-card>
            <q-card-section>
                <div class="text-h6">Nuevo Issue</div>
            </q-card-section>
            <q-form>
                <q-card-section class="q-pt-none">

                    <q-input dense filled v-model="title" label="Introduce Titulo" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Por favor introduce un titulo']" />
                    <q-select dense filled v-model="labels" multiple :options="['option 1', 'option 2', 'option 3']"
                        label="Multiple"
                        :rules="[val => val && val.length > 0 || 'Por favor seleccione almenos 1 elemto']" />
                    <md-editor v-model="body" theme="dark" language="en-US" />
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn @click="emits('onClose')" flat label="Cancelar" color="negative" v-close-popup />
                    <q-btn flat label="Acceptar" color="primary" v-close-popup />
                </q-card-actions>
            </q-form>
        </q-card>
    </q-dialog>
</template>

<style scoped>
.md-editor-dark {
    --md-bk-color: rgb(41, 41, 41) !important;
}
</style>