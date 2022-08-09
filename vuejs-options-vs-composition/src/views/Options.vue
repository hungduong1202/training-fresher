<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>You have {{ todoCount }} Todos !</h3>
    <div>
      <input type="text" placeholder="Add a Todo" v-model="newTodoName" @keyup.enter="newTodo()">
    </div>
    <div>
      <ul>
        <li v-for="todo of todos" :key="todo.id">
          <span>{{ todo.name }}</span>
          <button @click="deleteTodo(todo.id)">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoName: '',
      todos: [
        {
          id: 1,
          name: 'One'
        }, {
          id: 2,
          name: 'Two'
        }, {
          id: 3,
          name: 'Three'
        }
      ],
    }
  },
  methods: {
    newTodo() {
      if (!!this.newTodoName) {
        let newTodo = {
          id: Date.now(),
          name: this.newTodoName
        }
        this.todos.push(newTodo)
        this.newTodoName = ''
      }
      else {
        alert('Pls add a todo name')
      }
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
      console.log(this.todos)
    }
  },
  computed: {
    todoCount() {
      return this.todos.length
    }
  },
  watch: {
    newTodoName(newValue) {
      const index = this.todos.findIndex(ele => ele.name.toLowerCase() === newValue.toLowerCase())
      if (index !== -1) {
        this.newTodoName = ''
        alert(`Have already "${newValue}" todo !!`)
      }
    }
  }
}
</script>

<style>
ul {
  list-style: none;
  padding: 0;
  width: 200px;
  margin: 20px auto 0;
}

li {
  border: 1px solid;
  display: flex;
  margin-bottom: 10px;
}

li span {
  flex-grow: 1;
}
</style>
