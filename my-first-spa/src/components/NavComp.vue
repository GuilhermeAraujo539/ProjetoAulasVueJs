<template>
    <ul>
        <img class="Logo" src="../assets/logo.png" alt="Logo">
        <li>
            <a href="#appetizers-section" class="nav-link" @click.prevent="handleNavigation">
                NOSSOS PRODUTOS
            </a>
        </li>
        <li>
            <router-link
            style="text-decoration: none; color: #880204; letter-spacing: 1px; font-weight: 500; font-family: Poppins, sans-serif; text-transform: uppercase;"
            to="/sobreNos">SOBRE NÓS</router-link>
        </li>
        <li style="margin-top: 40px">
            <router-link
                style="text-decoration: none; color: #880204; letter-spacing: 1px; font-weight: 500; font-family: Poppins, sans-serif; text-transform: uppercase;"
                to="/carrinho">Carrinho</router-link>
                <img src="../assets/CarrinhoComprasNav.png" alt="">
        </li>
        <li style="margin-top: 40px">
            <router-link
            style="text-decoration: none; color: #880204; letter-spacing: 1px; font-weight: 500; font-family: Poppins, sans-serif; text-transform: uppercase;"
            to="/perfil">Perfil</router-link>
            <img src="../assets/Male User.png" alt="Imagem de Perfil">
        </li>
    </ul>
</template>

<script>
export default {
    name: 'NavComp',
    methods: {
        handleNavigation() {
            if (this.$route.path === '/') {

                this.scrollToAppetizers();
            } else {
                this.$router.push('/');
            }
        },
        scrollToAppetizers() {
            const target = document.getElementById("appetizers-section");
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        },
    }
}
</script>

<style scoped>
* {
    padding: 0px;
    margin: 0px;
}

.Logo {
    width: 170px;
    height: 90px;
    margin-top: 10px;
}

ul {
    display: flex;
    justify-content: space-between;
}

li {
    list-style: none;
    margin-top: 50px;
    padding: none;
}

a.nav-link {
    text-decoration: none;
    color: #880204;
    letter-spacing: 1px;
    font-weight: 500;
    font-family: Poppins, sans-serif;
    text-transform: uppercase;
}
</style>
