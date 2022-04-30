<template>
  <div class="listProductsUser">
    <table class="listProductsUser__table">
      <tr class="table__row --header">
        <th class="table__cell">Nome</th>
        <th class="table__cell">Descrição</th>
        <th class="table__cell">Preço</th>
        <th class="table__cell">Categoria</th>
      </tr>

      <tr v-for="product in productList" :key="product.id" class="table__row">
        <td class="table__cell">{{ product.name }}</td>
        <td class="table__cell">{{ product.description }}</td>
        <td class="table__cell">{{ product.price }}</td>
        <td class="table__cell">{{ product.productCategory }}</td>
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

.table__row {
  height: 2.125rem;
  display: flex;
}
.table__row.--header {
  height: 3.125rem;
}
.table__cell {
  border: 1px solid black;
  flex-grow: 1;
  flex-basis: 50px;
}
</style>
