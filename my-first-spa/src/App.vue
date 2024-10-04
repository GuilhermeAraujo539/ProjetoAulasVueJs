<template>

    <NavPage></NavPage>
  
  <router-view></router-view>
</template>

<script>

import NavPage from './components/NavPage.vue';

export default {
  name: 'App',
  components:{
    NavPage,
  }
}
</script>

<style>

</style>
