<script setup>
import TaskList from "../components/TaskList.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  store.dispatch("fetchTasks");
});
</script>

<template>
  <div>
    <h1>Task List</h1>
    <TaskList class="list" />
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    text-align: center;
  }

  .list {
    display: flex;
    list-style: none;
    gap: 20px;
  }
}
</style>
