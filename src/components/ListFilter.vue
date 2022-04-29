<template>
  <div class="listFilter">
    <div class="listFilter__filter">
      <form action="" @submit="searchTermSubmit()"></form>
      <input
        v-model="searchTerm"
        type="text"
        placeholder="Pesquisar"
      />
      <button value="Buscar" @click="$emit('searchTermFilter', searchTerm)">
        Buscar
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref } from "vue";
import { computed, ref } from "vue";
import ListProductsUser from "@/components/ListProductsUser.vue";
import Product from "@/config/Product";

export default defineComponent({
  name: "App",
  props: {
    productList: {
      type: Array as PropType<Array<Product>>,
      required: true,
    },
  },
  emits: ['searchTermFilter'],
  setup() {
    const searchTerm = ref("");
    return {
      searchTerm,
    };
  },
});
</script>

<style>
listFilter {
  width: 100%;
}
</style>
