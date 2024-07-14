import { createStore } from "vuex";
import { uid } from "uid";
import taskService from "../services/taskService";

export default createStore({
  state: {
    tasks: [],
  },
  mutations: {
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    },
    ADD_TASK(state, task) {
      state.tasks.push(task);
    },
    UPDATE_TASK(state, updatedTask) {
      const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks[index] = updatedTask;
      }
    },
    DELETE_TASK(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
    MARK_AS_COMPLETED(state, taskId) {
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.completed = true;
      }
    },
    MARK_AS_CANCEL_COMPLETED(state, taskId) {
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.completed = false;
      }
    },
  },
  actions: {
    async fetchTasks({ commit }) {
      const tasks = await taskService.getTasks();
      commit("SET_TASKS", tasks);
    },
    async addTask({ commit }, task) {
      task.id = uid();
      const newTask = await taskService.addTask(task);
      commit("ADD_TASK", newTask);
    },
    async updateTask({ commit }, task) {
      const updatedTask = await taskService.updateTask(task);
      commit("UPDATE_TASK", updatedTask);
    },
    async deleteTask({ commit }, taskId) {
      await taskService.deleteTask(taskId);
      commit("DELETE_TASK", taskId);
    },
    async markAsCompleted({ commit }, taskId) {
      await taskService.markAsCompleted(taskId);
      commit("MARK_AS_COMPLETED", taskId);
    },
    async markAsCancelCompleted({ commit }, taskId) {
      await taskService.markAsCancelCompleted(taskId);
      commit("MARK_AS_CANCEL_COMPLETED", taskId);
    },
  },
  getters: {
    getTaskById: (state) => (id) => state.tasks.find((task) => task.id === id),
  },
});
