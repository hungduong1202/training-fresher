<template>
    <div>
        <h3>Filter todos:</h3>
        <select @change="filterTodos">
            <option value="200">200</option>
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="20">20</option>
            <option value="10">10</option>
            <option value="5">5</option>
        </select>
    </div>
</template>

<script>
import store from '@/store';
export default {
    name: "FilterTodos",
    methods: {
        filterTodos(e) {
            const { value } = e.target
            console.log(value)
            store.dispatch('filterTodos', value)
        }
    }
};
</script>

<style scoped>
h3 {
    display: inline-block;
}

select {
    margin-top: 20px;
    padding: 6px;
    border: #41b883 1px solid;
}
</style>
