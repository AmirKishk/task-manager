import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  async getTasks() {
    const response = await apiClient.get("/tasks");
    return response.data;
  },
  async addTask(task) {
    const response = await apiClient.post("/tasks", task);
    return response.data;
  },
  async updateTask(task) {
    const response = await apiClient.patch(`/tasks/${task.id}`, task);
    return response.data;
  },
  async deleteTask(taskId) {
    await apiClient.delete(`/tasks/${taskId}`);
  },
  async markAsCompleted(taskId) {
    const response = await apiClient.patch(`/tasks/${taskId}`, {
      completed: true,
    });
    return response.data;
  },
  async markAsCancelCompleted(taskId) {
    const response = await apiClient.patch(`/tasks/${taskId}`, {
      completed: false,
    });
    return response.data;
  },
};
