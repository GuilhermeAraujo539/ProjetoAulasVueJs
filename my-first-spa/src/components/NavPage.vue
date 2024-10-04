<template>
    <header>
        <div class="nav-bar">
            <nav>
                <ul>
                    <img style="height: 10%; width: 15%;" src="../assets/logo.png" alt="Logo Condô Store">
                    <router-link
                        style="text-decoration: none; color: white; letter-spacing: 1px; font-weight: 500;   font-family:Poppins, sans-serif; text-transform: uppercase;"
                        to="/">Home</router-link>
                    <router-link
                        style="text-decoration: none; color: white; letter-spacing: 1px; font-weight: 500; font-family:Poppins, sans-serif; text-transform: uppercase;"
                        to="/about">About Us</router-link>
                    <router-link
                        style="text-decoration: none; color: white; letter-spacing: 1px; font-weight: 500;font-family:Poppins, sans-serif; text-transform: uppercase;"
                        to="/contact">Contact</router-link>
                    <router-link
                        style="text-decoration: none; color: white; letter-spacing: 1px; font-weight: 500;font-family:Poppins, sans-serif; text-transform: uppercase;"
                        to="/login">Login</router-link>
                </ul>
            </nav>
        </div>
    </header>

    <body>
        <div class="container"></div>
    </body>
</template>
<script>
export default {
    name: 'NavPage'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.contanier {
    display: flex;
}

.nav-bar {
    justify-content: center;
    display: flex;
    align-items: center;
    height: 20vh;
}

* {
    background-color: black;
}

ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;
    text-decoration: none;
}

</style>