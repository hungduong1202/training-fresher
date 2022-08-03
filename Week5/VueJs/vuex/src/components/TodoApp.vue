<template>
  <div>
    <AddTodo />
    <FilterTodos />
    <h3>Todos</h3>
    <div class="todos">
      <div @dblclick="updateTodo(todo)" v-for="todo in allTodos" class="todo"
        :class="todo.completed ? 'is-complete' : null" :key="todo.id">{{
            todo.title
        }}
        <i @click="deleteTodo(todo.id)" class="fa fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store';
// import { mapActions } from 'vuex';
import AddTodo from './AddTodo.vue';
import FilterTodos from './FilterTodos.vue';
export default {
  data() {
    return {};
  },
  name: "TodoApp",
  computed: {
    allTodos() {
      return store.getters.allTodos;
    }
  },
  methods: {
    // ...mapActions(["fetchTodos"]),
    deleteTodo(id) {
      store.dispatch('deleteTodo', id)
    },
    updateTodo(todo) {
      store.dispatch('updateTodo', todo)
    }
  },
  created() {
    // this.fetchTodos()
    store.dispatch("fetchTodos");
  },
  components: { AddTodo, FilterTodos }
}
</script>

<style scope>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}

.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}

.is-complete {
  background: #35495e;
  color: #fff;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
