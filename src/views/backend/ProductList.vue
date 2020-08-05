<template>
  <div>
    <h2>ProductList</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted: () => {
    console.log("ProductList mounted");
  },
  filters: {
    // 將時間戳記 轉成 年/月/日
    unix(timestamp) {
      const time = new Date(timestamp * 1000);
      return `${time.getFullYear()}/${time.getMonth()+1}/${time.getUTCDate()}`;
    }
  }
};
</script>
