<template>
  <FilterList @searchTermFilter="filter" />
  <ListProducts :productList="productsReturnList" @edit="startEdition" />
  <ProductsForm
    v-if="showForm"
    :key="keyEdit"
    :productList="productsReturnList"
  />
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
  toRefs,
  ref,
  PropType,
  Ref,
} from "vue";
import FilterList from "./components/ListFilter.vue";
import ListProducts from "./components/ListProducts.vue";
import ProductsForm from "./components/ProductsForm.vue";
import api from "@/service/api";
import Product from "./config/Product";

export default defineComponent({
  name: "App",
  components: {
    ListProducts,
    FilterList,
    ProductsForm,
  },

  setup() {
    
    const products = ref( [])
    const productsReturnList = ref([]);
    const keyEdit:Ref<number> = ref(0);
    const showForm = ref(false);

    onMounted(async () => {
      const response = await api.search("");
      products.value = response.data.content;
      console.log(products.value);
    });

    function filterProducts(searchTerm: string) {
      return products.value.filter(function (product: Product) {
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
    };
    function startEdition(key: number) {
      keyEdit.value = key;
      showForm.value = true;
      console.log("estive aqui!s");
    };

    return {
      productsReturnList,
      filter,
      startEdition,
      keyEdit,
      showForm,
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
