<template>
  <div class="container-fluid">
    <h1>後台介面</h1>
    <!-- 開始：Bootstrap alert -->
    <div class="container">
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div><!-- 結束：Bootstrap alert -->
    <!-- 登入 -->
    <div class="row d-flex justify-content-center align-items-center" v-if="token == ''">
      <div class="col-12 col-sm-8 col-md-7 text-center">
        <div class="card p-5 shadow-sm">
          <h3 class="font-weight-bold mb-4">請先登入</h3>
          <div v-if="!token" class=" mb-4">
            <input type="email" name="" id="Email" placeholder="Email address" class="form-control" v-model="user.email"> <br/>
            <input type="password" name="" id="password" placeholder="Password" class="form-control" v-model="user.password" @keyup.enter="siginIn">
          </div>          
          <button type="button" class="btn btn-primary btn-block btn-lg" ref="Btn_LogIn" @click="siginIn">登入</button>
        </div>        
      </div>
    </div>
    <!-- 後臺選單 -->
    <ul class="nav justify-content-center my-3" v-else>
      <li class="nav-item px-3 border-left border-right">
        <router-link to="/backend/products">產品列表</router-link>
      </li>
      <li class="nav-item px-3 border-left border-right">
        <router-link to="/backend/coupons">優惠券列表</router-link>
      </li>
      <li class="nav-item px-3 border-left border-right">
        <router-link to="/backend/orders">訂單列表</router-link>
      </li>
      <li class="nav-item px-3 border-left border-right">
        <router-link to="/backend/pic-storage">圖片儲存列表</router-link>
      </li>
      <li class="nav-item px-3 border-left border-right">
        <a href="#" @click.prevent="signOut">登出</a>
      </li>
    </ul>
    <!-- 子頁面 -->
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      token: '',
      uuid: '',
      btnLoading: false
    }
  },
  mounted() {
    console.log("mounted");
    // console.log(this.$(this.$refs.Btn_LogIn));
  },
  methods: {
    siginIn() {
      if(this.user.email == '' || this.user.password == ''){
        alert("請填寫帳號及密碼");
        return false;
      };
      // console.dir($(this.$refs.Btn_LogIn));
      this.$http
        .post(`${process.env.VUE_APP_APIPATH}/auth/login`, this.user)
        .then(res => {
          console.log(res);
          if( res.data.success ){
            // 將帳密的輸入框清空
            this.user.email = '';
            this.user.password = '';
            // Uuid,Token,期限 寫入 cookie
            document.cookie = `hexHWToken=${this.token}; expires=${new Date(res.data.expired * 1000)}`;
            document.cookie = `hexHWUuid=${this.uuid}; expires=${new Date(res.data.expired * 1000)}`;
            this.token = res.data.token;
            this.uuid = res.data.uuid;            
            alert(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
          // 將帳密的輸入框清空
          this.user.email = '';
          this.user.password = '';
          alert("該用戶不存在");
        })
        
    },
    signOut() {
      this.token = '';
      this.uuid = '';
      document.cookie = "hexHWToken=; expires=";
      document.cookie = "hexHWUuid=; expires=";
    },
  }
}
</script>
