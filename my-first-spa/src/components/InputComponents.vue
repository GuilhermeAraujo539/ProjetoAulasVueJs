<template>
    <div class="">
        <form action="" class="flex flex-col justify-center ">
            <label style="color: #880204; font-family: Archivo, sans-serif; font-weight: 700; " for="email" class="">{{ label }}</label>
            <input style="background-color:#A60E11; font-family: Archivo, sans-serif; font-weight: 700; "
                class="border-red-800 w-[300px] rounded-[10px] h-[40px] px-2 text-white focus:border-white "  type="text"
                >
        </form>
    </div>

</template>
<script>
export default {
    name: 'InputComponents',
    props:{
        label: String,
    },
}

</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap');

input:focus{
    border-color: white;
    border: 6px
}

</style>