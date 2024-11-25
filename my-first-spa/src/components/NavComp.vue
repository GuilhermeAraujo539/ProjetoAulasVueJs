<template>
    <ul>
        <img class="Logo" src="../assets/logo.png" alt="Logo">
        <div></div>
            <li>
                <router-link
                style="text-decoration: none; color: #880204; letter-spacing: 1px; font-weight: 500;   font-family:Poppins, sans-serif; text-transform: uppercase;"
                to="/">NOSSOS PRODUTOS</router-link>
            </li>
            <li>
                <router-link
                    style="text-decoration: none; color: #880204; letter-spacing: 1px; font-weight: 500; font-family:Poppins, sans-serif; text-transform: uppercase;"
                    to="/aboutUS">RESTAURANTES</router-link>
            </li>
            <li>
                    <router-link
                        style="text-decoration: none; color: #880204; letter-spacing: 1px; font-weight: 500;font-family:Poppins, sans-serif; text-transform: uppercase;"
                        to="/contact">DELIVERY</router-link>
            </li>
            <li>
                    <router-link
                        style="text-decoration: none; color: #880204; letter-spacing: 1px; font-weight: 500;font-family:Poppins, sans-serif; text-transform: uppercase;"
                        to="/login">SOBRE NÓS</router-link>
            </li>
            <li style="margin-top:40px">
                    <router-link
                        style="text-decoration: none; color: #880204; letter-spacing: 1px; font-weight: 500;font-family:Poppins, sans-serif; text-transform: uppercase;"
                        to="/login">Perfil  </router-link>
                        <img src="../assets/Male User.png" alt="">
                        
            </li>
        </ul>
</template>
    
    
<script>
    export default {
        name: 'NavComp',
    }
</script>
    
    
    
<style scoped>
*{
    padding:0px;
    margin:0px;
}
.Logo{
    width: 250px;
    height: 130px;
    margin-top: 10px;
}

ul{
    display: flex;   
    justify-content: space-between; 
}
li{
    list-style: none;
    margin-top: 50px;
    padding:none;
}
</style>