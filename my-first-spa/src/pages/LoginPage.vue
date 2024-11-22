<template>

    <div class="flex flex-row justify-center items-center">
        <div class='flex flex-col gap-8 w-[820px] h-full justify-center items-center'>
            <div>
                <div class="">
                    <h1 class="text-5xl" style="font-family: Archivo,sans-serif; color: #880204; font-weight: bold">Bem
                        vindo de volta!</h1>
                    </div>
                </div>
                <div class="flex flex-col gap-6">
                    <InputComponents label="Email:" />
                    <div class="flex flex-col gap-2">
                        <InputComponents label="Senha:" />
                        <h5 style="font-family: Archivo,sans-serif;  font-weight: 500;">Esqueceu a sua senha?</h5>
                        <div class="flex flex-row justify-center mt-7 items-center gap-10">
                            <h4>______________</h4>
                            <h4 style="font-family: Archivo,sans-serif; color: #880204; font-weight: bold">Ou</h4>
                            <h4>______________</h4>
                        </div>
                        <div class="flex flex-row gap-10 justify-center mt-4 ">
                            <img class="w-[32px] h-[32px]" src="../assets/image 2.png" alt="">
                            <img class="w-[32px] h-[32px]" src="../assets/image 3.png" alt="">
                        <img class="w-[32px] h-[32px]" src="../assets/image 4.png" alt="">
                    </div>
                    
                    <div class="flex justify-center mt-4">
                        <button class="w-[230px] h-[50px] font-bold text-white rounded-[25px]" style="background-color: #A60E11;  font-family: Archivo,sans-serif; color: #880204;">Entre</button>
                    </div>
                    <div class=" flex flex-row items-center justify-left gap-1 mt-2">
                        <h4 class=" ml-1 text-1xl" style="font-family: Archivo,sans-serif;  font-weight: 600;">Ainda nao
                            tem
                            uma conta?
                        </h4>
                        <h4 class="text-1xl" style="font-family: Archivo,sans-serif; color: #880204; font-weight: 600">
                            Cadastre-se
                        </h4>
                    </div>
                </div>
            </div>
        </div>

            <div class="imagen">

                <div class="w-1/2 h-full justify-end flex-wrap">
                    <img class="h-[585px] w-[892px] " style="-webkit-box-shadow: -5px 4px 19px -7px rgba(0,0,0,0.75);
-moz-box-shadow: -5px 4px 19px -7px rgba(0,0,0,0.75);
box-shadow: -5px 4px 19px -7px rgba(0,0,0,0.75);" src="../assets/image1.png" alt="">
</div>
        </div>
    </div>


</template>


<script>
import InputComponents from "../components/InputComponents.vue"
export default {
    name: 'LoginPage',
    components: {
        InputComponents
    }
}

</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap');


@media (max-width: 600px) {
    body{
        position: relative;
    }
    
    h1{

        padding-top: 60px;
        text-align: center;
    }

    .imagen {
        display: none;
  }}
</style>