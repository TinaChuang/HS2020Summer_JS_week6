<template>
  <div class="row d-flex justify-content-center align-items-center">
    <div class="col-12 col-sm-8 col-md-7 text-center">
      <div class="card p-5 shadow-sm">
          <h3 class="font-weight-bold mb-4" v-if="!!token">已登入</h3>
          <h3 class="font-weight-bold mb-4" v-else>請先登入</h3>
          <div v-if="!token" class=" mb-4">
            <input type="email" name="" id="Email" placeholder="Email address" class="form-control" v-model="user.email"> <br/>
            <input type="password" name="" id="password" placeholder="Password" class="form-control" v-model="user.password" @keyup.enter="siginIn">
          </div>          
          <button type="button" class="btn btn-primary btn-block btn-lg" @click="siginIn" v-if="!token">登入</button>
          <button type="button" class="btn btn-outline-danger btn-block btn-lg" @click="siginOut" v-else>登出</button>
      </div>        
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>