<template>
  <div id="app">
    <Users/>
    <hr style="border:1px solid #f4f4f4">
  </div>
</template>

<script>
import Users from './components/UsersComponent.vue'

export default {
  name: 'app',
  components: {
    Users
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
