<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div id="app">
    <nav>
      <RouterLink to="/">Task List</RouterLink> |
      <RouterLink to="/add-task">Add Task</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");
* {
  font-family: "Rubik", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;
      margin: 0 15px;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
