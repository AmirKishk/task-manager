import { createRouter, createWebHistory } from "vue-router";
import TaskListView from "../views/TaskListView.vue";
import TaskFormView from "../views/TaskFormView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "taskList",
      component: TaskListView,
    },
    {
      path: "/add-task",
      name: "addTask",
      component: TaskFormView,
    },
    {
      path: "/edit-task/:id",
      name: "editTask",
      component: TaskFormView,
    },
  ],
});

export default router;
