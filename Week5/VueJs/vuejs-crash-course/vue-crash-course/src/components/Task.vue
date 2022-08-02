<template>
    <div @dblclick="$emit('toggle-reminder')" class="task" :class="[task.reminder ? 'reminder' : '']">
        <h3>{{ task.text }}
            <i @click="$emit('delete-task')" class="fas fa-times"></i>
        </h3>
        <p>{{ task.day }}</p>
    </div>
</template>


<script>
export default {
    name: 'Tasks',
    props: {
        task: Object
    },
    methods: {
    },
    emits: ['delete-task', 'toggle-reminder']
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
</style>
