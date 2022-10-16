import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
