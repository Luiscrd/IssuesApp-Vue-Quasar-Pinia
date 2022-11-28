<script setup lang="ts">
import { ref } from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

interface Props {
    show: boolean
}

const props = defineProps<Props>();

const modal = ref<boolean>(true);

const title = ref<string>('');

const body = ref<string>('');

const labels = ref<string[]>([]);

</script>

<template>
    <q-dialog v-model="modal" transition-show="rotate" transition-hide="rotate" persistent>
        <q-card>
            <q-card-section>
                <div class="text-h6">Nuevo Issue</div>
            </q-card-section>
            <q-form>
                <q-card-section class="q-pt-none">

                    <q-input filled v-model="title" label="Introduce Titulo" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Por favor introduce un titulo']" />
                    <q-select filled v-model="labels" multiple :options="['option 1', 'option 2', 'option 3']"
                        label="Multiple" :rules="[val => val && val.length > 0 || 'Por favor seleccione al 1']" />
                    <md-editor v-model="body" theme="dark" language="en-US" />
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn flat label="Cancelar" color="negative" v-close-popup />
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