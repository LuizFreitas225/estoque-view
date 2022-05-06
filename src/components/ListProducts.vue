<template>
  <div class="listProducts">
    <h1 class="listProducts__tilte">{{ title }}</h1>
    <div class="listProducts__usertable" v-if="isUser">
      <ListProductsUser :productList="productsUserReturnList" />
    </div>
    <table class="listProducts-table" v-else>
      <tr class="listProducts-table__row --header">
        <th class="table__cell">Id</th>
        <th class="table__cell">Nome</th>
        <th class="table__cell --description">Descrição</th>
        <th class="table__cell">Preço</th>
        <th class="table__cell">Categoria</th>
        <th class="table__cell">Código</th>
        <th class="table__cell"></th>
      </tr>

      <tr v-for="product in productList" :key="product.id" class="listProducts-table__row">
        <td class="table__cell">{{ product.id }}</td>
        <td class="table__cell">{{ product.name }}</td>
        <td class="table__cell --description">{{ product.description }}</td>
        <td class="table__cell">{{ product.price }}</td>
        <td class="table__cell">{{ product.productCategory }}</td>
        <td class="table__cell">{{ product.code }}</td>
        <td class="table__cell --functionsCell">
          <div class="cell__functions">
            <button class="functions__button" @click="$emit('edit', key)">
              Editar
            </button>
          </div>
        </td>
      </tr>
    </table>
    <div class="listProducts__tableChange">
      <button class="tableChange__button" @click="trocarTable">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref } from "vue";
import { computed, ref } from "vue";
import ListProductsUser from "@/components/ListProductsUser.vue";
import ProductCategory from "@/config/ProductCategory";
import Product from "@/config/Product";
import ProductUser from "@/config/ProductUser";

export default defineComponent({
  name: "App",
  props: {
    productList: {
      type: Array as PropType<Product[]>,
      required: true,
    },
  },
  components: {
    ListProductsUser,
  },
  emits: ["edit"],
  setup(props) {
    const isUser = ref(false);
    const productsReturnList: Ref<Array<Product>> = ref(props.productList);
    const productsUserReturnList: Ref<Array<ProductUser>> = computed(() =>
      props.productList.map(function (product) {
        const productUser: ProductUser = product;
        return productUser;
      })
    );
    const title = computed(() =>
      isUser.value ? "Tabela Para Usuários" : "Tabela Para Administradores"
    );

    const buttonText = ref("Sou Usuário");
    function trocarTable() {
      isUser.value = !isUser.value;
      buttonText.value = isUser.value ? "Sou Admin" : "Sou Usuário";
    }
    return {
      isUser,
      trocarTable,
      title,
      buttonText,
      productsReturnList,
      productsUserReturnList,
    };
  },
});
</script>

<style>

.listProducts-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid black;
  box-shadow: 5px 5px 2px #00000035;
  margin-bottom: 50px;
}

.listProducts-table__row {
  height: 2.125rem;
  display: flex;
}
.listProducts-table__row.--header {
  height: 3.125rem;
}
.table__cell {
  border: 1px solid black;
  flex-grow: 1;
  flex-basis: 50px;
  padding-bottom: 5px;
}
.table__cell.--description {
  flex-grow: 2;
}
.tableChange__button,
.functions__button {
  transition-duration: 0.4s;
  background-color: #4caf50;
  border: 2px solid #4caf50;
  color: white;
  border-radius: 4px;
}

.tableChange__button:hover,
.functions__button:hover {
  border: 2px solid white;
}
</style>
