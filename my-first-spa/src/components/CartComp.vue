<template>
  <NavComp></NavComp>
  <div class="carrinho">
    <h2>Meu Carrinho</h2>
    <div v-if="cart.length > 0" class="cart-items">
      <div v-for="(item, index) in cart" :key="index" class="cart-item">
        <img :src="item.image" :alt="item.name" class="item-image" />
        <div class="item-details">
          <h3>{{ item.name }}</h3>
          <p>Preço: R$ {{ item.price.toFixed(2) }}</p>
          <p>Quantidade: 
            <button @click="updateQuantity(index, -1)">-</button>
            {{ item.quantity }}
            <button @click="updateQuantity(index, 1)">+</button>
          </p>
        </div>
        <button @click="removeItem(index)" class="remove-btn">Remover</button>
      </div>
      <div class="cart-summary">
        <h3>Total: R$ {{ totalPrice.toFixed(2) }}</h3>
        <button class="checkout-btn">Finalizar Compra</button>
      </div>
    </div>
    <div v-else class="empty-cart">
      <p>Seu carrinho está vazio.</p>
    </div>
  </div>
</template>

<script>
import NavComp from './NavComp.vue';
export default {
  name: "CartComp",
  components: {
    NavComp,
  },
  data() {
    return {
      cart: [],
    };
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  methods: {
    loadCart() {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        this.cart = JSON.parse(storedCart);
      }
    },
    updateCart() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    updateQuantity(index, amount) {
      this.cart[index].quantity += amount;
      if (this.cart[index].quantity <= 0) {
        this.removeItem(index);
      } else {
        this.updateCart();
      }
    },
    removeItem(index) {
      this.cart.splice(index, 1);
      this.updateCart();
    },
  },
  mounted() {
    this.loadCart();
  },
};
</script>

<style scoped>
.carrinho {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
}

.item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
}

.item-details {
  flex-grow: 1;
}

.item-details h3 {
  margin: 0;
  font-size: 18px;
}

.item-details p {
  margin: 5px 0;
}

.remove-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.remove-btn:hover {
  background-color: #c0392b;
}

.cart-summary {
  text-align: right;
  margin-top: 20px;
}

.checkout-btn {
  background-color: #20c997;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.checkout-btn:hover {
  background-color: #17a589;
}

.empty-cart {
  text-align: center;
  padding: 20px;
  font-size: 16px;
  color: #555;
}
</style>
