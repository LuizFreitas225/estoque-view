<template>
  <FilterList @searchTermFilter="filter" />
  <ListProducts :productList="products" />
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
  toRefs,
  ref,
  PropType,
} from "vue";
import FilterList from "./components/ListFilter.vue";
import ListProducts from "./components/ListProducts.vue";
import api from "@/service/api";
import Product from "./config/Product";
export default defineComponent({
  name: "App",
  components: {
    ListProducts,
    FilterList,
  },

  setup() {
    let api = [
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

    const products = ref(api);
    // onMounted(async () => {
    //   const response = await api.search("");
    //   data.products = response.data;
    //   console.log(data.products);
    // });
    function searchTermSelection(product: Product) {
      if (
        "name" in product &&
        "description" in product &&
        (product.name?.includes("Acer") ||
          product.description?.includes("Acer"))
      ) {
        return true;
      } else {
        return false;
      }
    }
    function filterProducts(searchTerm: string) {
      return api.filter(function (product) {
        return product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
        product.code.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
        product.description.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      })
    };
    function filter(searchTerm: string) {
      products.value = filterProducts(searchTerm);

    };
    return {
      products,
      filter,
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
}
</style>
