<script setup lang="ts">
import { useQuasar } from 'quasar';
import { Issue, State } from 'src/issues/interfaces/issues.interface';
import { Comment } from 'src/issues/interfaces/comments.interface';
import { watch, ref, toRef } from 'vue';
import { timeSince } from 'src/shared/helpers/time-sience';
import VueMarkdown from 'vue-markdown-render';
import useIssue from '../../composables/useIssue';


interface Props {
    issue?: Issue;
    comments?: Comment,
    issueNumber: number,
}

const props = defineProps<Props>();

const issue = toRef(props, 'issue');

const comment = toRef(props, 'comments');

const $q = useQuasar()

let textColor = ref('text-white');

watch(() => $q.dark.isActive, val => {

    textColor.value = val ? 'text-white' : 'text-black';

})

const { setIssueChangeData } = useIssue(props.issueNumber, { autoload: false })

</script>


<template>
    <q-card v-if="issue" @mouseenter="setIssueChangeData(issue!)" class="col-12 q-mb-md" :class="textColor" flat
        bordered>
        <q-item>
            <q-item-section avatar>
                <q-avatar>
                    <img :src="issue.user.avatar_url" alt="User Avatar">
                </q-avatar>
            </q-item-section>
            <q-item-section>
                <q-item-label>
                    <router-link :to="`/issue/${issue.number}`">{{ issue.title }}</router-link>
                </q-item-label>
                <q-item-label caption>{{ timeSince(issue.created_at) }} ago.</q-item-label>
            </q-item-section>
            <q-item-section>
                <q-item-label class="row items-center justify-end">
                    <q-item-label class="q-mr-md">
                        <q-icon name="question_answer" />{{ issue.comments }}
                    </q-item-label>
                    <q-chip v-if="issue.state === State.Close" color="positive" text-color="white" icon="check"> Closed
                    </q-chip>
                    <q-chip v-else color="negative" text-color="white" icon="bug_report"> Open </q-chip>
                </q-item-label>
            </q-item-section>
        </q-item>
        <q-separator />
        <q-item-section class="q-pa-md markdown">
            <vue-markdown :source="issue.body" />
        </q-item-section>
        <q-separator />
        <q-item-section v-if="issue.labels.length > 0" class="q-pa-xs q-gutter-xs">
            <div>
                <q-chip v-for="label of issue.labels" :key="label.id" :style="{ color: `#${label.color}` }" outline>{{
                        label.name
                }}</q-chip>
            </div>
        </q-item-section>
    </q-card>
    <q-card v-if="comment" class="col-12 q-mb-md" :class="textColor" flat bordered>
        <q-item>
            <q-item-section avatar>
                <q-avatar>
                    <img :src="comment.user.avatar_url" alt="User Avatar">
                </q-avatar>
            </q-item-section>
            <q-item-section>
                <!-- <q-item-label>
                    <router-link :to="`/issue/${}`">{{ issue.title }}</router-link>
                </q-item-label> -->
                <a>{{ comment.author_association }}</a>
                <q-item-label caption>{{ timeSince(comment.created_at) }} ago.</q-item-label>
            </q-item-section>
            <q-item-section>
                <q-item-label class="row items-center justify-end">
                    <q-item-label class="q-mr-md">
                        <q-icon name="question_answer" />{{ comment.reactions.total_count }}
                    </q-item-label>
                    <!-- <q-chip v-if="issue.state === State.Close" color="positive" text-color="white" icon="check"> Closed
                    </q-chip>
                    <q-chip v-else color="negative" text-color="white" icon="bug_report"> Open </q-chip> -->
                </q-item-label>
            </q-item-section>
        </q-item>
        <q-separator />
        <q-item-section class="q-pa-md markdown">
            <vue-markdown :source="comment.body" />
        </q-item-section>
        <!-- <q-separator />
        <q-item-section v-if="issue.labels.length > 0" class="q-pa-xs q-gutter-xs">
            <div>
                <q-chip v-for="label of issue.labels" :key="label.id" :style="{ color: `#${label.color}` }" outline>{{
                        label.name
                }}</q-chip>
            </div>
        </q-item-section> -->
    </q-card>
</template>


<style scoped>
a {
    color: gray !important;
}
</style>