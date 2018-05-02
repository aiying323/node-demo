import headerIndex from './header/index.vue'
import homeHeaderIndex from './home-header/index.vue'

const components = [
	headerIndex,
	homeHeaderIndex
];

export default {
  install: Vue => {
    components.map(component => {
      Vue.component(component.name, component);
    })
  }
}

