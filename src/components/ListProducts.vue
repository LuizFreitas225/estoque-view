<template>
  <div class="listProducts">
    <h1 class="listProducts__tilte">{{ title }}</h1>
    <div class="listProducts__usertable" v-if="isUser">
      <ListProductsUser :productList="productList" />
    </div>
    <table class="listProducts__table" v-else>
      <tr class="table__row --header">
        <th class="table__column">Nome</th>
        <th class="table__column">Descrição</th>
        <th class="table__column">Preço</th>
        <th class="table__column">Categoria</th>
        <th class="table__column">Código</th>
        <th class="table__column">Estoque</th>
      </tr>

      <tr v-for="product in productList" :key="product.id" class="table__row">
        <td class="table__column">{{ product.name }}</td>
        <td class="table__column">{{ product.description }}</td>
        <td class="table__column">{{ product.price }}</td>
        <td class="table__column">{{ product.productCategory }}</td>
        <td class="table__column">{{ product.code }}</td>
        <td class="table__column">{{ product.productStockQuantity }}</td>
      </tr>
    </table>
    <div class="listProducts__filter">
      <button @click="trocarTable">Trocar Tabela</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref } from "vue";
import { computed, ref } from "vue";
import ListProductsUser from "@/components/ListProductsUser.vue";
import Product from "@/config/Product"

export default defineComponent({
  name: "App",
  props: {
    productList: {
      type: Array,
      required: true,
    },
  },
  components: {
    ListProductsUser,
  },
  setup(props) {
    const isUser = ref(false);
    const title = computed(() =>
      isUser.value ? "Tabela Para Usuários" : "Tabela Para Administradores"
    );

    function trocarTable() {
      isUser.value = !isUser.value;
    }
    
    // props.productList.map(function(prod){
    //   return Object.assign( Product.class, );
    // });

    // const list:Ref<Array<Product>> = ref(props.productList);

    //  let listId = list.map(function(prod) {
    //     return prod.id;
    //  });
    //  console.log(listId);

     return {
      isUser,
      trocarTable,
      title,
      //list
    };
  },
});
</script>

<style>
.listProducts__table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid black;
  box-shadow: 5px 5px 2px #00000035;
}

.table__row {
  height: 2.125rem;
  display: flex;
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
