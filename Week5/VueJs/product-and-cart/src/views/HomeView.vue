<!-- eslint-disable vue/no-unused-vars -->

<template>
  <div class="home">
    <div class="splash-container">
      <div class="splash">
        <h1>Splendid Food</h1>
      </div>
    </div>

    <main class="wrapper">
      <h2>Recommended</h2>
      <div class="recommended">
        <ProductCard v-for="(product, i) in inventory.slice(0, 3)" :key="product.id" :product="product" :index="i"
          :addToCart="addToCart" />
      </div>

    </main>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
// import Products from './Products.vue'
// eslint-disable-next-line no-unused-vars

export default {
  name: 'HomeView',
  props: ['inventory', 'addToCart'],

  components: { ProductCard }
}
</script>
