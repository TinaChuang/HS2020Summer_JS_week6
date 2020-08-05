<template>
  <div id="app">
    <!-- Loading -->
    <loading :active.sync="isLoading"></loading>
    <!-- 選單 -->
    <!-- <ul class="nav justify-content-center my-3">
      <li class="nav-item px-3 border-left border-right">
        <router-link to="/">首頁</router-link>
      </li>
      <li class="nav-item px-3 border-right">
        <router-link to="/about">關於我們</router-link>
      </li>
      <li class="nav-item px-3 border-right">
        <router-link to="/prodList">產品列表</router-link>
      </li>
      <li class="nav-item px-3 border-right">
        <router-link to="/cart">購物車</router-link>
      </li>
      <li class="nav-item px-3 border-right">
        <router-link to="/backend">後台</router-link>
      </li>
    </ul> -->
    <div class="shadow-sm">
      <b-nav class="justify-content-center my-3">
        <b-nav-item class="px-3 border-left border-right">
          <router-link to="/">首頁</router-link>
        </b-nav-item>
        <b-nav-item class="px-3 border-right">
          <router-link to="/about">關於我們</router-link>
        </b-nav-item>
        <b-nav-item class="px-3 border-right">
          <router-link to="/prodList">產品列表</router-link>
        </b-nav-item>
        <b-nav-item class="px-3 border-right">
          <router-link to="/cart">購物車</router-link>
        </b-nav-item>
        <b-nav-item class="px-3 border-right">
          <router-link to="/backend">後台</router-link>
        </b-nav-item>
      </b-nav>
    </div>
    
    <!-- 子畫面 -->
    <router-view />
  </div>
</template>

<script>

export default {
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    // this.$http
    // .get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`)
    // .then(res => {
    //   this.isLoading = false;
    //   console.log(res);
    // })
    // .catch(err => {
    //   this.isLoading = false;
    //   console.log(err);
    // });
    this.isLoading = false;
  }
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
