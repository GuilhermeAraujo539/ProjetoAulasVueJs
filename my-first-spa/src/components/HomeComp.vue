<template>
  <div>
    <NavComp @scrollToAppetizers="scrollToAppetizers" />
    <img class="bolinhas" src="../assets/Bolinhas.png" alt="Decoração">
    <div class="explore">
      <h1>
        Explore o seu 
        <img class="Momento" src="../assets/MomentoBeneEBella.png" alt="#MomentoBeneEBella">
      </h1>
    </div>
    
    <div class="group">
      <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
        <g>
          <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </g>
      </svg>
      <input placeholder="Search" type="search" class="input">
      <button>
        <img src="../assets/ImgFiltro.png" alt="Filtro">
      </button>
    </div>
    
    <img class="bolinhas" src="../assets/Bolinhas.png" alt="Decoração">
    <div id="appetizers-section">
    <h5>Aperitivos:</h5>
    <AppetizersComp />
    </div>
    <img class="bolinhas" src="../assets/Bolinhas.png" alt="Decoração">
  </div>
</template>

<script>
import NavComp from "./NavComp.vue";
import AppetizersComp from "./AppetizersComp.vue";

export default {
  name: "HomeComp",
  components: {
    NavComp,
    AppetizersComp,
  },
  methods: {
    scrollToAppetizers() {
      const target = document.getElementById("appetizers-section");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style>
.bolinhas {
  width: 100%;
  height: 100%;
}

.explore {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.Momento {
  width: 250px;
}

.group {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 500px;
  margin: auto;
  margin-bottom: 10px;
}

.group img {
  width: 50px;
}

.group button {
  border-style: hidden;
  background-color: white;
}

.input {
  width: 100%;
  height: 40px;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: #F8F2F2;
  color: #0d0c22;
  transition: 0.3s ease;
}

.input::placeholder {
  color: #9e9ea7;
}

.input:focus, .input:hover {
  outline: none;
  border-color: rgba(234, 76, 137, 0.4);
  background-color: #fff;
  box-shadow: 0 0 0 4px rgba(234, 76, 137, 0.1);
}

.icon {
  position: absolute;
  left: 1rem;
  fill: #9e9ea7;
  width: 1rem;
  height: 1rem;
}

h5 {
  margin: 20px;
}
</style>