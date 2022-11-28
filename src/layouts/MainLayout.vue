<script setup lang="ts">
import { ref, watch } from 'vue';
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';
import { useQuasar } from 'quasar';

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/Luiscrd',
    icon: 'code',
    link: 'https://github.com/Luiscrd'
  },
  {
    title: 'Twitter',
    caption: '@rua_carballo',
    icon: 'rss_feed',
    link: 'https://twitter.com/rua_carballo'
  },
  {
    title: 'Facebook',
    caption: '@lcdesign',
    icon: 'public',
    link: 'https://www.facebook.com/luis.lcdesign.5/'
  }
];

const value = ref(true);

const $q = useQuasar()

watch(value, () => {
  $q.dark.set(value.value)
})

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<template>
  <q-layout view="hHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>Issues App</q-toolbar-title>
        <q-toggle v-model="value" color="green" label="Dark Mode" left-label />
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header>
          Essential Links
        </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container class="q-pa-lg">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

