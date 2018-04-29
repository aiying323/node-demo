import messageBox from './message-box/index.vue'
import messageBoxTheme1 from './message-box/theme1/index.vue'
import messageBoxNormal from './message-box/normal/index.vue'
import UEditor from './ueditor/index.vue'
const components = [
  messageBox,
  messageBoxTheme1,
  messageBoxNormal,
  UEditor
];

export default {
  install: Vue => {
    components.map(component => {
      Vue.component(component.name, component);
    })
  }
}

