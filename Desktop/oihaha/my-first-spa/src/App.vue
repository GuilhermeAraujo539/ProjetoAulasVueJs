<template>
  <div>
    <nav>
      <router-link to="/">Hello World</router-link>
      <router-link to="/Loop">Loop</router-link>
      <router-link to="/Content">Content</router-link>
      <router-link to="/Nav">NavBar</router-link>
      <router-link to="/Object">Object</router-link>
      <router-link to="/Footer">Footer</router-link>
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
