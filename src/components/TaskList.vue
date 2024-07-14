<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import TaskItem from "./TaskItem.vue";
import { Icon } from "@iconify/vue";

const store = useStore();
const tasks = computed(() => store.state.tasks);

// Filter out duplicate tasks (I do not know why there were duplicates)
const uniqueTasks = computed(() => {
  const seen = new Set();
  return tasks.value.filter((task) => {
    if (seen.has(task.id)) {
      return false;
    }
    seen.add(task.id);
    return true;
  });
});

const allTasksCompleted = computed(() => {
  return (
    uniqueTasks.value.length > 0 &&
    uniqueTasks.value.every((task) => task.completed)
  );
});
</script>

<template>
  <div class="tasklist">
    <div v-if="uniqueTasks.length > 0">
      <TaskItem v-for="task in uniqueTasks" :id="task.id" :task="task" />
    </div>

    <p class="todos-msg" v-else>
      <Icon icon="noto-v1:sad-but-relieved-face" />
      <span>You have no tasks! Add one!</span>
    </p>

    <p v-if="allTasksCompleted" class="todos-msg">
      <Icon icon="noto-v1:party-popper" />
      <span>You have completed all your tasks!</span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.taskList {
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 24px;
}

.todos-msg {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
</style>

<!-- 
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import TaskItem from "./TaskItem.vue";

const store = useStore();
const tasks = computed(() => store.state.tasks);
</script>

<template>
  <div>
    <TaskItem v-for="task in tasks" :id="task.id" :task="task" />
  </div>
</template>

-->
