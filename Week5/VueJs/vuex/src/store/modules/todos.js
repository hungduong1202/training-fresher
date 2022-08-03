import axios from "axios";

const state = {
  todos: [],
};

const getters = { allTodos: (state) => state.todos };

const actions = {
  async fetchTodos({ commit }) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(res.data);
    commit("setTodos", res.data);
  },

  async addTodo({ commit }, title) {
    const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed: false,
    });
    commit("newTodo", res.data);
    console.log(res);
  },

  async deleteTodo({ commit }, id) {
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    commit("removeTodo", id);
    console.log(res);
  },

  async filterTodos({ commit }, value) {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${value}`
    );
    commit("filterTodos", res.data);
  },

  async updateTodo({ commit }, todo) {
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
      {
        ...todo,
        completed: !todo.completed,
      }
    );
    console.log(res.data);
    commit("changeStatus", res.data);
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
  filterTodos: (state, todos) => (state.todos = todos),
  changeStatus: (state, todo) => {
    const index = state.todos.findIndex((ele) => ele.id === todo.id);
    state.todos.splice(index, 1, todo);
  },
};

export default { state, getters, actions, mutations };
