<template>
    <div @dblclick="$emit('toggleReminder')" class="task" :class="{ reminder: task.reminder }">
        <h3>{{ task.text }} <i @click="$emit('deleteTask')" class="fas fa-times"></i></h3>
        <p>{{ task.day }}</p>
    </div>
</template>

<script>
export default {
    data({ task }) {
        const onDbclick = () => [
            console.log(task)
        ]

        return { onDbclick }
    },
    props: {
        task: Object
    },
    emits: ['toggleReminder', 'deleteTask']
}
</script>

<style scoped>
.fas {
    color: red;
}

.task {
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
}

.task.reminder {
    border-left: 5px solid green;
}

.task h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

p {
    text-align: left;
}
</style>
