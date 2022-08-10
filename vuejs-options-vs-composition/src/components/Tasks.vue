<template>
    <div v-for="task of tasks" :key="task.id">
        <Task :task="task" @toggleReminder="$emit('toggleReminder', task.id)"
            @deleteTask="$emit('deleteTask', task.id)"></Task>
    </div>
</template>

<script>
import Task from './Task.vue';
export default {
    components: { Task },
    setup({ tasks }) {
    },
    props: {
        tasks: Array
    },
    emits: ['toggleReminder', 'deleteTask']
}
</script>

<style>
</style>