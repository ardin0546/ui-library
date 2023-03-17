import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import cssClasses from "./config/css-classes";
import safeList from "./tailwind/plugin/safeList";
import TextInput from './components/form/TextInput.vue';

createApp(App).mount('#app')

export {
  cssClasses,
  safeList,
  TextInput
}
