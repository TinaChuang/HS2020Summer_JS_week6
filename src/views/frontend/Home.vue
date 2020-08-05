<template>
  <div class="container">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    
    <b-button variant="primary" @click="showModal">Open Modal</b-button>
    <!-- Modal -->
    <b-modal ref="my-modal" title="Using Component Methods">
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
    </b-modal>
    <!-- Modal -->    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      modalShow: false,
    }
  },
  mounted(){
  },
  methods: {
    showModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].show();
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
  }

};
</script>
