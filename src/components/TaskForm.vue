<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { Icon } from "@iconify/vue";

const store = useStore();
const route = useRoute();
const router = useRouter();
const task = ref({ title: "" });
const isEditing = ref(false);

onMounted(() => {
  if (route.params.id) {
    isEditing.value = true;
    const taskData = store.getters.getTaskById(route.params.id);
    if (taskData) {
      task.value = { ...taskData };
    }
  }
});

const submitForm = () => {
  if (isEditing.value) {
    store.dispatch("updateTask", task.value);
  } else {
    store.dispatch("addTask", task.value);
    task.value.title = "";
  }
  router.push({ name: "taskList" });
};

const goBack = () => {
  return router.push({ name: "taskList" });
};
</script>

<template>
  <div class="form-container">
    <h2>{{ isEditing ? "Edit Task" : "Add Task" }}</h2>
    <form @submit.prevent="submitForm">
      <input v-model="task.title" placeholder="Task title" required />
      <div class="buttons">
        <button class="icon-button" type="submit">
          <Icon
            icon="ph:check-circle"
            class="icon check-icon"
            color="#41b080"
            width="28px"
          />
        </button>
        <Icon
          icon="ph:backspace"
          class="icon back-icon"
          width="28px"
          color="#808080"
          type="button"
          @click="goBack"
        />
        <!-- <button type="submit">{{ isEditing ? "Update" : "Add" }}</button>
      <button type="button" @click="goBack">cancel</button> -->
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.form-container {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 20px auto;
  padding: 20px;
  background-color: #f1f1f1;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  gap: 20px;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  input {
    padding: 10px;
    border: 2px solid #41b080;
    border-radius: 4px;
    width: 100%;
    max-width: 300px;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 6px;

    .icon {
      cursor: pointer;
    }

    .icon-button {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
    }
  }
}
</style>
