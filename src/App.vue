<template>
  <FilterList @searchTermFilter="filter" />
  <ListProducts :productList="productsReturnList" />
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
    const data = reactive({
      products: [],
    });

    const productsReturnList = ref(data.products);

    onMounted(async () => {
      const response = await api.search("");
      data.products = response.data.content;
    });

    function filterProducts(searchTerm: string) {
      return data.products.filter(function (product: Product) {
        return (
          product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
          product.code.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
          product.description.toLowerCase().indexOf(searchTerm.toLowerCase()) >
            -1
        );
      });
    }

    function filter(searchTerm: string) {
      productsReturnList.value = filterProducts(searchTerm);
    }
    return {
      productsReturnList,
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
