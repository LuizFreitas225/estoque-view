<template>
  <ListProducts :productList="products.content" />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import ListProducts from "./components/ListProducts.vue";
import api from "@/service/api";

export default defineComponent({
  name: "App",
  components: {
    ListProducts,
  },

  setup() {
    const data = reactive({
      products: {},
    });

    onMounted(async () => {
      const response = await api.search("");
      data.products = response.data;
      console.log(data.products);
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
