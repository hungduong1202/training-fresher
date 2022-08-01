<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="wrapper">
    <h1>Products</h1>

    <div class="card-container">
      <ProductCard v-for="(item, i) in inventory" :key="item.id" :index="i" :addToCart="addToCart" :product="item" />

    </div>

  </main>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
  props: ['inventory', 'addToCart'],
  components: { ProductCard }
}
</script>
