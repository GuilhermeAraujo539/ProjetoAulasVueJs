<template>
  <div class="container2">
    <CardPerson></CardPerson>

</div>
</template>


<script>
import CardPerson from '../components/CardsPerson.vue';

export default {
  name: 'AboutUs',
  components:{
    CardPerson
  }
}
</script>



<style>
.container2{
  display: grid;
  grid-template-columns: repeat(3, 0.3fr);
  gap: 30px;
  place-content: center;
  place-items: center;
}
</style>