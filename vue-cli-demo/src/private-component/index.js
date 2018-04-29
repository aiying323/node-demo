import headerIndex from './header/index.vue'


const components = [
	headerIndex
];

export default {
  install: Vue => {
    components.map(component => {
      Vue.component(component.name, component);
    })
  }
}

