<template>
    <div class="sobre-nos">
      <NavComp></NavComp>
    <img src="../assets/Bolinhas.png" alt="">

      <section class="nossa-historia">
        <h2>Nossa História</h2>
        <p>
          Fundada em 1915 na charmosa cidade de Florença, a Bene e Bella nasceu
          do sonho de dois amigos apaixonados pela rica gastronomia italiana.
          Nosso objetivo sempre foi levar a autêntica culinária italiana para
          diferentes partes do mundo, mantendo viva a tradição e os sabores únicos
          que fazem parte da nossa cultura.
        </p>
        <img
          src="../assets/BenneBellaRestauranteVelho.png"
          alt="Restaurante italiano"
        />
    </section>
    <img src="../assets/Bolinhas.png" alt="">
  
      <section class="missao-visao-valores">
        <h2>O Que Nos Move</h2>
        <div class="info">
          <div>
            <h3>Missão</h3>
            <p>
              Proporcionar experiências gastronômicas memoráveis, unindo sabor,
              tradição e hospitalidade italiana.
            </p>
          </div>
          <div>
            <h3>Visão</h3>
            <p>
              Ser referência mundial em cozinha italiana e hospitalidade.
            </p>
          </div>
          <div>
            <h3>Valores</h3>
            <ul>
              <li>Autenticidade</li>
              <li>Qualidade</li>
              <li>Sustentabilidade</li>
              <li>Respeito à cultura italiana</li>
            </ul>
          </div>
        </div>
    </section>
    <img src="../assets/Bolinhas.png" alt="">

      <section class="nossos-restaurantes">
        <h2>Presença Global</h2>
        <p>
          Atualmente, a Bene e Bella está presente em mais de 10 países, com mais
          de 50 unidades. Cada restaurante é uma porta de entrada para a Itália,
          com ambientes decorados para proporcionar uma experiência única.
        </p>
        <div class="imagens-restaurantes">
            <img src="../assets/BenneBellaRestaurante.png" alt="Restaurante 1" />
            <img src="../assets/BenneBellaRestaurante2.png" alt="Restaurante 2" />
          <img src="../assets/BenneBellaRestaurante3.png" alt="Restaurante 3" />
        </div>
      </section>
      <img src="../assets/Bolinhas.png" alt="">
  
      <footer>
        <p>&copy; 2024 Bene e Bella - Todos os direitos reservados.</p>
      </footer>
    </div>
  </template>
  
  <script>
  import NavComp from './NavComp.vue';
  export default {
    name: "SobreNos",
    components: {
    NavComp,
  },
  };
  </script>
  
  <style scoped>
  .nossa-historia {
    text-align: center;
    padding: 40px 20px;
  }
  .nossa-historia img {
    width: 100%;
    max-width: 800px;
    margin-top: 20px;
    border-radius: 10px;
  }
  
  .missao-visao-valores {
    padding: 40px 20px;
    background-color: #f9f9f9;
  }
  .missao-visao-valores .info {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  .missao-visao-valores .info div {
    flex: 1;
    text-align: center;
  }

  .missao-visao-valores h2{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-bottom: 50px;
  }
  
  .nossos-restaurantes {
    text-align: center;
    padding: 40px 20px;
  }
  .nossos-restaurantes .imagens-restaurantes {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }
  .nossos-restaurantes img {
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
  }
  

  footer {
    text-align: center;
    padding: 20px;
    /* background-color: #880204; */
    color: black;
  }
  </style>
  