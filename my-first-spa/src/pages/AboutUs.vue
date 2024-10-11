<template>
  <div class="container2">
    <CardPerson></CardPerson>

</div>
<FooterComponent />
</template>


<script>
import CardPerson from '../components/CardsPerson.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
  name: 'AboutUs',
  components:{
    CardPerson, FooterComponent
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