import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

import { createApp } from 'vue'
import { createHead } from "@vueuse/head"

import App from './App.vue'

const vueApp = createApp(App);
const head = createHead();

vueApp.use(head);
vueApp.mount('#app');
