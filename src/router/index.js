import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/frontend/Home.vue";

Vue.use(VueRouter);

const routes = [
  { // 首頁
    path: "/",
    name: "Home",
    component: Home
  },
  { // 關於我們
    path: "/about",
    name: "About",
    component: () => import("../views/frontend/About.vue")
  },
  { // 商品列表
    path: "/prodList",
    name: "ProdList",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/frontend/ProdList.vue")
  },
  { // 單一商品頁
    path: "/product/:id",
    name: "Product",
    component: () => import("../views/frontend/Product.vue")
  },
  { // 購物車
    path: "/cart",
    name: "Cart",
    component: () => import("../views/frontend/Cart.vue")
  },  
  { // 結帳頁
    path: "/checkout",
    name: "Checkout",
    component: () => import("../views/frontend/Checkout.vue")
  },
  { // 結帳完成
    path: "/CComplete",
    name: "Checkout-complete",
    component: () => import("../views/frontend/Checkout-complete.vue")
  },
  { // 後台
    path: "/backend",
    name: "Backend",
    component: () => import("../views/backend/Dashboard.vue"),
    children: [
      {
        path: "products",
        component: () => import("../views/backend/ProductList.vue")
      },
      {
        path: "coupons",
        component: () => import("../views/backend/CouponList.vue")
      },
      {
        path: "orders",
        component: () => import("../views/backend/OrderList.vue")
      },
      {
        path: "pic-storage",
        component: () => import("../views/backend/PicStorage.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
