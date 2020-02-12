Vue.component('modal', {
  name:'modal-mask',
  props:['title'],
  methods: {
    closeModal(){
      this.$emit('close-modal');
    }
  },
  template: `
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h3>{{title}}</h3>
          <div><slot name="content_modal"></slot></div>
          <footer>
            <button v-on:click="closeModal()" >Cerrar</button>
          </footer>
        </div>
      </div>
    </div>`
})

new Vue({
  el: '#app',
  data() {
    return {
      showModal : false
    }
  },
  methods:{
    toggleModal(){
      this.showModal = !this.showModal;
    }
  }
})