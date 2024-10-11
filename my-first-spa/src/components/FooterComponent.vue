<template>
  <footer class="container4">
    <img class="logo" src="../assets/logo.png" alt="Logo Condô Store">

    <div class="row">
      <section class="col-md-4">
        <h5>Home</h5>
        <a class="home" href="#">Voltar ao Topo!</a>
      </section>

      <section class="col-md-4">
        <h5>Sobre Nós</h5>
        <p class="about-us text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
      </section>

      <section class="col-md-4">
        <h5>Contato</h5>
        <ul class="nav-flex-c">
          <li class="nav-item">
            <a class="nav-link text-white" href="tel:+5511111111111">Tel: (11) 40022-8922</a>
          </li>
          <li class="nav-item">
            <a class="text-white" href="https://w.app/N6TlUz" target="_blank">WhatsApp: (11) 40022-8922</a>
          </li>
        </ul>
      </section>
    </div>

    <p>&copy; 2024 Condô Store</p>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

.container4 {
  background-color: rgb(0, 0, 0);
  padding: 20px;
  text-align: center;
}

.logo {
  max-width: 150px;
  height: auto; 
  margin-bottom: 20px;
}

.row {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

h5,
.home {
  color: white;
  text-decoration: none;
}

.about-us {
  color: white;
  margin: 10px 0;
}

.nav-flex-c {
  list-style: none;
  padding: 0;
}

.nav-item {
  margin: 5px 0;
}

.text-white {
  color: white;
  text-decoration: none;
}

p {
  text-align: center;
  color: white;
  margin-top: 20px;
}
</style>
