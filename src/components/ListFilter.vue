<template>
  <div class="listFilter">
    <div class="listFilter__searchTermFilter">
      <input
        v-model="searchTerm"
        type="text"
        class="formFilter__input"
        placeholder="Pesquisar"
      />
      <button
        value="Buscar"
        class="formFilter__button"
        @click="$emit('searchTermFilter', searchTerm)"
      >
        Buscar
      </button>
    </div>

    <div id="app">
      <h1>Vue Select</h1>
      <v-select :options="categories" label="title"> </v-select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref } from "vue";
import { computed, ref } from "vue";
import Product from "@/config/Product";
import ProductCategory from "@/config/ProductCategory";

export default defineComponent({
  name: "App",
  props: {
    productList: {
      type: Array as PropType<Array<Product>>,
      required: true,
    },
  },
  emits: ["searchTermFilter"],
  setup() {
    const searchTerm = ref("");
    const categories = ref(Array.of(ProductCategory));
    console.log(categories);
    return {
      searchTerm,
    };
  },
});
</script>

<style>
.listFilter {
  width: 100%;
  background-color: bisque;
  padding-top: 10px;
  display: flex;
  /* desabilita a quebra de linha */
  flex-wrap: nowrap;
  /* Alinhando os items no eixo secundario "colunmn" */
  align-items: center;
  padding: 10px;
}
.formFilter__button {
  transition-duration: 0.4s;
  background-color: #4caf50;
  border: 2px solid #4caf50;
  color: white;
}

.formFilter__button:hover {
  background-color: white;
  color: black;
}
</style>
