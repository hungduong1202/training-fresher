<template>
    <div>
        <h3>Add Todo</h3>
        <div class="add">
            <form @submit.prevent="onSubmit">
                <input v-model="title" placeholder="...Add Todo" type="text" />
                <input type="submit" />
            </form>
        </div>
    </div>
</template>

<script>
import store from '@/store';
export default {
    name: "AddTodo",
    data() {
        return {
            title: "",
        };
    },
    methods: {
        onSubmit() {
            store.dispatch('addTodo', this.title);
        },
    },
};
</script>

<style scoped>
form {
    display: flex;
}

input[type="text"] {
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
}

input[type="submit"] {
    flex: 2;
    background: #41b883;
    color: #fff;
    border: 1px #41b883 solid;
    cursor: pointer;
}
</style>