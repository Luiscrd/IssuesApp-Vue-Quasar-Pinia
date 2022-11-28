<script setup lang="ts">
import { ref, watch } from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import useIssueMutation from '../composables/useIssueMutation';

interface Props {
    show: boolean;
    labels: string[];
}

interface Emits {
    (e: 'onClose'): void;
}

const props = defineProps<Props>();

const emits = defineEmits<Emits>();

const { issuMutation } = useIssueMutation();

const show = ref<boolean>(false)

const title = ref<string>('');

const body = ref<string>('');

const labels = ref<string[]>([]);

watch(props, () => {
    show.value = props.show;
})

watch(() => issuMutation.isSuccess.value, (isSucess) => {
    if (isSucess) {
        title.value = '';
        body.value = '';
        labels.value = [];
        issuMutation.reset();
        emits('onClose');
    }
})

</script>

<template>
    <q-dialog v-model="show" transition-show="rotate" transition-hide="rotate" persistent>
        <q-card>
            <q-card-section>
                <div class="text-h6">Nuevo Issue</div>
            </q-card-section>
            <q-form @submit="issuMutation.mutate({ title, body, labels })">
                <q-card-section class="q-pt-none">

                    <q-input dense filled v-model="title" label="Introduce Titulo" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Por favor introduce un titulo']" />
                    <q-select v-if="props.labels" dense filled v-model="labels" multiple :options="props.labels"
                        label="Selecione Labels" use-chips />
                    <md-editor v-model="body" theme="dark" language="en-US" />
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn :disable="issuMutation.isLoading.value" @click="emits('onClose')" flat label="Cancelar"
                        color="negative" v-close-popup />
                    <q-btn :disable="issuMutation.isLoading.value" flat label="Acceptar" type="sumbit"
                        color="primary" />
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