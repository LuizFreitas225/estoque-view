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

    <div>
      <select>
        <option v-for="category in categories" :key="category">
          {{ category }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, Ref } from "vue";
import { computed, ref, watchEffect } from "vue";
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
  setup(props, { emit }) {
    const searchTerm = ref("");
    let categories = ref([""]);
    watchEffect(() => emit('searchTermFilter', searchTerm.value));
    onMounted(() => {
      categories.value.pop();
      for (let category in ProductCategory) {
        if (
          ProductCategory.hasOwnProperty(category) &&
          isNaN(parseInt(category))
        ) {
          categories.value.push(category);
        }
      }
    });
    return {
      searchTerm,
      categories,
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
