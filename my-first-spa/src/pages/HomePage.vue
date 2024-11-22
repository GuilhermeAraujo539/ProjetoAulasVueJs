<template>
  <HomeComp></HomeComp>
  <img class="bolinhas" src="../assets/Bolinhas.png" alt="">
  <h1>Explore o seu</h1>
</template>


<script>
import HomeComp from '../components/HomeComp.vue'
export default {
  name: 'HomePage',
  components:{
    HomeComp
  }
}

</script>



<style>
  .bolinhas{
    width: 100%;
    height:100%;
  }
</style>