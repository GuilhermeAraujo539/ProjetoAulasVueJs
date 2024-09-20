<template>
  <NavPage></NavPage>
  <ContentPage></ContentPage>
  <FooterPage></FooterPage>
  <LoopComponent></LoopComponent>
  <ObjectComponent></ObjectComponent>
</template>

<script>
import NavPage from './components/default/NavPage.vue';
import FooterPage from './components/default/FooterPage.vue';
import ContentPage from './components/default/ContentPage.vue';
import LoopComponent from './components/default/LoopComponent.vue';
import ObjectComponent from './components/default/ObjectComponent.vue';

export default{
  name: 'App',
  components: {
    NavPage, 
    ContentPage,
    FooterPage,
    LoopComponent,
    ObjectComponent
  }
}
</script>

<style scoped>

</style>
