<template>
  <div class="container22">
    <ContactComponent/>

</div>
<FooterComponent />
</template>


<script>
import FooterComponent from '../components/FooterComponent.vue';
import ContactComponent from '../components/ContanctComponent.vue';
export default {
  name: 'ContactPage',
  components:{
    FooterComponent, ContactComponent
  }
}
</script>



<style>
.container22{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

}
</style>