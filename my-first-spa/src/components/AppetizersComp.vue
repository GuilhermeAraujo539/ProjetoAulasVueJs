<template>
  <div class="produtos">
    <div class="card" @click="addToCart('Caponata')">
      <div class="content">
        <div class="back">
          <div class="back-content">
            <img class="cardImg"
              src="../assets/Caponata Recipe - Techniques for making the best Sicilian Caponata 1.png" alt="Caponata">
            <strong>Caponata</strong>
          </div>
        </div>
        <div class="front">
          <div class="img">
            <div class="circle"></div>
            <div class="circle" id="right"></div>
            <div class="circle" id="bottom"></div>
          </div>

          <div class="front-content">
            <small class="badge">Caponata</small>
            <div class="description">
              <div class="title">
                <p class="title"><strong>Compre agora!</strong></p>
                <img class="carrinho" src="../assets/CarrinhoCompras.com.png" alt="Carrinho">
              </div>
              <p class="card-footer">Berinjela
                Pimentão
                Alho
                Champignon
                Pimentão vermelho
                Cebola
                Orégano
                Salsinha
                &nbsp; <br><br>| &nbsp; Serve 1 pessoa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppetizersComp',
  methods: {
    addToCart(itemName) {
      const item = {
        name: itemName,
        price: 15.0,
        quantity: 1,
        image: "../assets/Caponata Recipe - Techniques for making the best Sicilian Caponata 1.png",
      };

      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);
      if (existingItemIndex >= 0) {
        cart[existingItemIndex].quantity += 1;
      } else {
        cart.push(item);
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      alert(`${itemName} foi adicionado ao carrinho!`);
    },
  },
};
</script>

<style scoped>
.produtos {
  margin-left: 10px;
  margin-bottom: 10px;
  display: flex;
}

.card {
  overflow: visible;
  margin-left: 13px;
  width: 190px;
  height: 254px;
  border: none;
}

.content {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 300ms;
  border-radius: 5px;
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 5px;
  overflow: hidden;
  border: none;
}

.back {
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;
  border: none;
}

.back::before {
  position: absolute;
  content: ' ';
  display: block;
  width: 160px;
  height: 160%;
}

.back-content {
  position: absolute;
  width: 99%;
  height: 99%;
  border-radius: 5px;
  color: #880204;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.card:hover .content {
  transform: rotateY(180deg);
}

.front {
  transform: rotateY(180deg);
  color: white;
  background-image: url("../assets/Caponata Recipe - Techniques for making the best Sicilian Caponata 1.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
}


.front .front-content {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.front-content .badge {
  background-color: #00000055;
  padding: 2px 10px;
  border-radius: 10px;
  backdrop-filter: blur(2px);
  width: fit-content;
}

.description {
  box-shadow: none;
  width: 100%;
  padding: 10px;
  background-color: #00000099;
  backdrop-filter: blur(5px);
  border-radius: 5px;
  border: none;
}

.title {
  font-size: 11px;
  max-width: 100%;
  display: flex;
  margin: auto;
  justify-content: space-between;
}

.title p {
  width: 100%;
}

.card-footer {
  color: #ffffff88;
  margin-top: 5px;
  font-size: 8px;
}

.front .img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

@keyframes floating {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0px);
  }
}

.carrinho {
  width: 50px;
  height: 50px;
}

.cardImg {
  width: 150px;
}
</style>
