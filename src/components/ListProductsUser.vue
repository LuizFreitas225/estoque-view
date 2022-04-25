<template>
  <div class="listProductsUser">
    <table class="listProductsUser__table">
      <tr class="table__row --header">
        <th class="table__column">Nome</th>
        <th class="table__column">Descrição</th>
        <th class="table__column">Preço</th>
        <th class="table__column">Categoria</th>
      </tr>

      <tr v-for="product in productList" :key="product.id" class="table__row">
        <td class="table__column">{{ product.name }}</td>
        <td class="table__column">{{ product.description }}</td>
        <td class="table__column">{{ product.price }}</td>
        <td class="table__column">{{ product.productCategory }}</td>
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
  border: 1px solid black;
}

.table__row {
  height: 2.125rem;
  display: flex;
  justify-content: space-between;
}
.table__row.--header {
  height: 3.125rem;
}
.table__column {
  border: 1px solid black;
  flex-grow: 1;
  flex-basis: 50px;
}
</style>
