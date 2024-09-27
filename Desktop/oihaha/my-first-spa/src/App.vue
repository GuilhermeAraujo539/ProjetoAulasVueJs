<template>
  <div>
    <nav>
      <router-link to="/">Hello World</router-link>
      <router-link to="/Loop">Loop</router-link>
    </nav>
  </div>
  
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

</style>
