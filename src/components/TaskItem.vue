<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { defineProps } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const store = useStore();
const router = useRouter();

const markAsCompleted = (id) => {
  store.dispatch("markAsCompleted", id);
};

const markAsCancelCompleted = (id) => {
  store.dispatch("markAsCancelCompleted", id);
};

const editTask = (id) => {
  router.push({ name: "editTask", params: { id } });
};

const deleteTask = (id) => {
  store.dispatch("deleteTask", id);
};
</script>

<template>
  <div class="container">
    <p :class="['item', { 'completed-todo': task.completed }]">
      {{ task.title }}
    </p>
    <div class="buttons">
      <Icon
        v-if="!task.completed"
        icon="ph:check-circle"
        class="icon check-icon"
        color="#41b080"
        width="28px"
        @click="
          task.completed
            ? markAsCancelCompleted(task.id)
            : markAsCompleted(task.id)
        "
      />
      <Icon
        v-else
        icon="ph:backspace"
        class="icon back-icon"
        width="28px"
        color="#808080"
        @click="
          task.completed
            ? markAsCancelCompleted(task.id)
            : markAsCompleted(task.id)
        "
      />
      <Icon
        icon="ph:pencil-fill"
        class="icon edit-icon"
        color="#1E90FF"
        width="28px"
        @click="editTask(task.id)"
      />
      <Icon
        icon="ph:trash"
        class="icon trash-icon"
        color="#f95e5e"
        width="28px"
        @click="deleteTask(task.id)"
      />
      <!-- <button
        @click="
          task.completed
            ? markAsCancelCompleted(task.id)
            : markAsCompleted(task.id)
        "
      >
        {{ task.completed ? "cancel" : "complete" }}
      </button>
      <button @click="editTask(task.id)">Edit</button>
      <button @click="deleteTask(task.id)">Delete</button> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 10px;
  margin-bottom: 22px;
  background-color: #f1f1f1;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.item {
  text-align: left;
  padding-left: 16px;
  max-width: 300px;
  word-wrap: break-word;
}

.completed-todo {
  text-decoration: line-through;
}

.buttons {
  display: flex;
  gap: 6px;
  transition: 150ms ease-in-out;

  .icon {
    cursor: pointer;
  }
}
</style>
