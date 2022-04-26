<template>
  <div class="listProductsUser">
    <table class="listProductsUser__table">
      <tr class="table__row --header">
        <th class="listProductsUser__column">Nome</th>
        <th class="listProductsUser__column">Descrição</th>
        <th class="listProductsUser__column">Preço</th>
        <th class="listProductsUser__column">Categoria</th>
      </tr>

      <tr v-for="product in productList" :key="product.id" class="table__row">
        <td class="listProductsUser__column">{{ product.name }}</td>
        <td class="listProductsUser__column">{{ product.description }}</td>
        <td class="listProductsUser__column">{{ product.price }}</td>
        <td class="listProductsUser__column">{{ product.productCategory }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    productList: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style>
.listProductsUser__table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid black;
  box-shadow: 5px 5px 2px #00000035;
  margin-bottom: 50px;
}

.listProductsUser__row {
  height: 2.125rem;
  display: flex;
}
.listProductsUser__row.--header {
  height: 3.125rem;
}
.listProductsUser__column {
  border: 1px solid black;
  flex-grow: 1;
  flex-basis: 50px;
}
</style>
