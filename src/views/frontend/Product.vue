<template>
  <div>
    <div v-if="this.productData" class="container">單一產品頁面
      <div class="row">
        <div class="col-12 col-md-5">
          <img :src=productData.imageUrl[0] :alt=productData.title class="img-fluid"/>
        </div>
        <div class="col-12 col-md-7">
          <h2>{{productData.title}}</h2>
          <p>{{productData.description}}</p>
          <p>{{productData.price | currency | dollarSign}}</p>
        </div>
      </div>
    </div>
    <h2 v-else>查無該商品</h2>

  </div>
</template>

<script>
export default {
  data() {
    return {
      productData: {}
    }
  },
  created() {
    this.$http
      .get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${this.$route.params.id}`)
      .then(res => {
        if (res.status == 200) {
          this.productData = res.data.data;
        } else {
          console.log(res);
        }
      })
      .catch(err => {
        console.log(err);
      })
  },
}
</script>
