<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <aside class="cart-container">
    <div class="cart">
      <h1 class="cart-title spread">
        <span>
          Cart
          <i class="icofont-cart-alt icofont-1x"></i>
        </span>
        <button @click="toggle" class="cart-close">&times;</button>
      </h1>

      <div class="cart-body">
        <table class="cart-table">
          <thead>
            <tr>
              <th><span class="sr-only">Product Image</span></th>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
              <th><span class="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody>
            <!-- https://youtu.be/FXpIoQ_rT_c?t=11905 -->
            <tr>
              <td><i class="icofont-carrot icofont-3x"></i></td>
              <td>Carrot</td>
              <td>$1.00</td>
              <td class="center">1</td>
              <td>$1.00</td>
              <td class="center">
                <button class="btn btn-light cart-remove">&times;</button>
              </td>
            </tr>
          </tbody>
        </table>

        <p class="center"><em>No items in cart</em></p>
        <div class="spread">
          <span><strong>Total:</strong> $1.00</span>
          <button class="btn btn-light">Checkout</button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  props: ['toggle', 'cart', 'inventory', 'remove'],
  methods: {
    getPrice (name) {
      const product = this.inventory.find((p) => {
        return p.name === name
      })
      return product.price.USD
    },
    calculateTotal () {
      const total = Object.entries(this.cart).reduce((acc, curr, index) => {
        return acc + (curr[1] * this.getPrice(curr[0]))
      }, 0)
      return total.toFixed(2)
    }
  }
}
</script>
