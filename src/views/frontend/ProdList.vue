<template>
  <div>
    <h1>前台產品列表</h1>
    <div class="container">
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch"
          v-for="item in prodData"
          :key="item.id"
        >
          <div class="card my-2">
            <img
              class="card-img-top"
              :src="item.imageUrl[0]"
              :alt="item.title"
            />
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.content }}</p>
              <button
                type="button"
                class="btn btn-primary"
                @click="goProdPage(item.id)"
              >
                詳細
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pagination
      data="this.pagination"
      :pagsData="paginationData"
      @uptade="getProducts"
    />
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
export default {
  components: {
    Pagination
  },
  data() {
    return {
      prodData: Object,
      paginationData: Object
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts(num = 1) {
      this.$http
        .get(
          `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products?page=${num}`
        )
        .then(res => {
          if (res.status == 200) {
            this.prodData = res.data.data;
            this.paginationData = res.data.meta.pagination;
          } else {
            console.log(res);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    goProdPage(id) {
      this.$router.push(`/product/${id}`);
    }
  }
};
</script>
