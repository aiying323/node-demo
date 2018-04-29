const components = [
  
];

export default {
  install: Vue => {
    components.map(component => {
      Vue.component(component.name, component);
    })
  }
}

