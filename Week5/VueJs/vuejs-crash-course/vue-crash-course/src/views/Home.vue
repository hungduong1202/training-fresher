<template>
    <AddTask v-show="showAddTask" @add-task="addTask($event)" />
    <Tasks @toggle-reminder="toggleReminder($event)" @delete-task="deleteTask($event)" :tasks="tasks" />
</template>


<script>
import AddTask from '@/components/AddTask.vue';
import Tasks from '@/components/Tasks.vue';
export default {
    name: "Home",
    components: { AddTask, Tasks },
    props: { showAddTask: Boolean },
    data() {
        return {
            tasks: [],
        };
    },
    methods: {
        async deleteTask(id) {
            if (confirm("Are you sure ?")) {
                const res = await fetch(`api/tasks/${id}`, { method: 'DELETE' })
                res.status === 200 ? this.tasks = this.tasks.filter((task) => id !== task.id) : alert('Delete Error')
            }
        },
        async toggleReminder(id) {
            const taskToToggle = await this.fetchTask(id)

            const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

            const res = await fetch(`api/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(updTask)
            })

            this.tasks = this.tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            );
        },
        async addTask(newTask) {
            const res = await fetch("api/tasks", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(newTask),
            });
            const data = await res.json();
            this.tasks = [...this.tasks, data];
        },
        async fetchTasks() {
            const res = await fetch("api/tasks/");
            const data = await res.json();
            return data;
        },
        async fetchTask(id) {
            const res = await fetch(`api/tasks/${id}`);
            const data = await res.json();
            return data;
        },
    }, async created() {
        this.tasks = await this.fetchTasks();
    }
}
</script>