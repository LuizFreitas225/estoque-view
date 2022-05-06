<template>
  <div class="producsForm">
    <form action="" v-if="product">
      <input
        v-model="product.name"
        type="text"
        class="formFilter__input"
        placeholder="Pesquisar"
      />
      <button
        value="Buscar"
        type="submit"
        class="formFilter__button"
        @click="$emit('searchTermFilter', searchTerm)"
      />
    </form>
    <div v-else>
      {{ msgErro }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, onMounted, Ref } from "vue";
import Product from "@/config/Product";

export default defineComponent({
  name: "App",
  props: {
    id: {
      type: Number,
      required: true,
    },
    productList: {
      type: Array as PropType<Array<Product>>,
      required: true,
    },
  },

  setup(props) {
    const product: Ref<Product | undefined> = ref();
    const msgErro = ref("");

    function findById(idProd: number): Product | undefined {
      return props.productList.find(function (product: Product) {
        return product.id == idProd;
      });
    }

    onMounted(async () => {
      product.value = findById(10);
      if (!product.value) {
        msgErro.value = "Msg de erro";
      }
      console.log(product.value);
    });
    return {
      product,
      msgErro,
    };
  },
});
</script>
