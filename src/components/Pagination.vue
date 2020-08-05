<template>
  <nav
    class="d-flex justify-content-center"
    v-if="pagsData.total_pages"
  >
    <ul class="pagination">
      <li
        class="page-item"
        :class="{ disabled: pagsData.current_page === 1 }"
      >
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="updatePage(pagsData.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        :class="{ active: pagsData.current_page === i }"
        v-for="i in pagsData.total_pages"
        :key="i"
      >
        <a
          class="page-link"
          href="#"
          @click.prevent="updatePage(i)"
        >
          {{ i }}
        </a>
      </li>
      <li
        class="page-item"
        :class="{ disabled: pagsData.current_page === pagsData.total_pages }"
      >
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="updatePage(pagsData.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pagsData"],
  methods: {
    updatePage(pagNum) {
      if (pagNum <= 0) {
        pagNum = 1;
      } else if (pagNum > this.pagsData.total_pages) {
        pagNum = this.pagsData.total_pages;
      }
      this.$emit("uptade", pagNum);
    }
  }
};
</script>
