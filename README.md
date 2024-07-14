# task-manager

## Overview

A simple task management application built with Vue.js and Vuex. This application allows users to create, edit, delete, and manage tasks efficiently. It provides a clean and responsive interface to help users stay organized.

## Features

- **Add Tasks**: Easily add new tasks to your list.
- **Edit Tasks**: Modify existing tasks with a simple interface.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Complete Tasks**: Mark tasks as completed or uncompleted to track progress.
- **Uncheck Completed Tasks**: Easily reactivate a completed task to bring it back into your active task list when needed.

## Project setup

To set up the project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/AmirKishk/task-manager.git
cd task-manager
```

### 2. Install the npm packages

```bash
npm i
```

### 3. Start the mock API

```bash
npm run start:db
```

### 4. Start the development server

```bash
npm run serve
```

### Technologies Used

- Vue.js: JavaScript framework for building user interfaces.
- Vuex: State management pattern and library for Vue.js applications.
- Vue Router: The official router for Vue.js to manage routes.
- SCSS: A CSS preprocessor to write more maintainable styles.
- uid: A utility for generating unique IDs for tasks.
- @iconify/vue: A library for using icon sets in Vue.js applications.

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Directory Structure

```bash
src/
├── components/        # Vue components
├── router/            # Vue Router configuration
├── services/          # API services
├── store/             # Vuex store
├── views/             # Vue views
├── App.vue            # Main app component (root component)
└── main.js            # Entry point for the application
```

### License

This project is open-source and available under an open-source license.
