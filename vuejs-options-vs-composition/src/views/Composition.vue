<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>You have {{ todoCount }} Todos !</h3>
    <div>
      <input type="text" placeholder="Add a Todo" v-model="data.newTodoName" @keyup.enter="addTodo()">
    </div>
    <div>
      <ul>
        <li v-for="todo of data.todos" :key="todo.id">
          <span>{{ todo.name }}</span>
          <button @click="deleteTodo(todo.id)">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import { computed, watch } from '@vue/runtime-core'
export default {
  setup() {
    // let newTodoName = ref('')
    // let todos = ref([])

    let data = reactive({
      newTodoName: '',
      todos: [{
        id: 1,
        name: 'One'
      }, {
        id: 2,
        name: 'Two'
      }, {
        id: 3,
        name: 'Three'
      }]
    })

    function addTodo() {
      const newTodo = {
        id: Date.now(),
        name: data.newTodoName
      }
      data.todos.push(newTodo)
      data.newTodoName = ''
    }

    function deleteTodo(id) {
      data.todos = data.todos.filter(todo => todo.id !== id)
    }

    const todoCount = computed(() => {
      return data.todos.length
    })

    watch(data, (newValue) => {
      console.log(newValue)
      const index = data.todos.findIndex((ele) => ele.name.toLowerCase() === newValue.newTodoName.toLowerCase())
      if (index !== -1) {
        alert(`Have already "${newValue.newTodoName}" todo !!`)
        data.newTodoName = ''
      }
    })


    return {
      addTodo,
      deleteTodo,
      todoCount,
      data
    }

  }
}
</script>
