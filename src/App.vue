<template>
  <ListProducts :productList="productsListTest" />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import ListProducts from "./components/ListProducts.vue";
import api from "@/service/api";
import Product from "./config/Product";

export default defineComponent({
  name: "App",
  components: {
    ListProducts,
  },

  setup() {
    const data = reactive({
      products: {},
    });
    const productsListTest = [
      {
        id: 1,
        name: "PC ",
        code: "HB-253585",
        description: "Fabricado com nano tecnologia.",
        price: 239.9,
        productCategory: "HOBBY",
      },
      {
        id: 2,
        name: "Tênis Nike",
        code: "HB-625903",
        description: "Fabricado com nano tecnologia.",
        price: 380.9,
        productCategory: "HOBBY",
      },
      {
        id: 3,
        name: "Acer Notebook",
        code: "DM-827100",
        description: "Fabricado com nano tecnologia.",
        price: 380.9,
        productCategory: "DOMESTIC",
      },
      {
        id: 4,
        name: "Acer Carregador",
        code: "SP-204547",
        description: "Fabricado com nano tecnologia.",
        price: 380.9,
        productCategory: "SPORT",
      },
    ];
    onMounted(async () => {
      const response = await api.search("");
      data.products = response.data;
      // console.log(data.products);
    });

    return {
      ...toRefs(data),
      productsListTest,
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
