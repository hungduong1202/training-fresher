<template>
    <div class="container">
        <Header title="Task Tracker" @toggleAddTask="showAddTask = !showAddTask" :showAddTask="showAddTask"></Header>
        <AddTask v-if="showAddTask" @addTask="addTask($event)"></AddTask>
        <Tasks :tasks="data.tasks" @toggleReminder="toggleReminder($event)" @deleteTask="deleteTask($event)"></Tasks>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Tasks from '@/components/Tasks.vue';
import Footer from '@/components/Footer.vue';
import { reactive, ref } from '@vue/reactivity';
import AddTask from '../components/AddTask.vue';
import { onBeforeMount } from '@vue/runtime-core';
import { TaskService } from '@/services/taskServices'


export default {
    components: { Header, Tasks, Footer, AddTask },
    setup() {

        const taskService = new TaskService
        const showAddTask = ref(false)

        const data = reactive({
            tasks: []
        })

        const addTask = async (newTask) => {
            await taskService.createTask(newTask)
            data.tasks.push(newTask)
        }

        const toggleReminder = async (id) => {
            const taskToToggle = await taskService.getTask(id)
            const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

            taskService.updateTask(updTask)

            data.tasks = data.tasks.map((ele) =>
                ele.id === updTask.id ? { ...ele, reminder: updTask.reminder } : ele

            )
        }

        const deleteTask = async (id) => {
            await taskService.deleteTask(id)

            data.tasks = data.tasks.filter(task => task.id !== id)
        }

        onBeforeMount(async () => {
            data.tasks = await taskService.getTasks()
        })

        return { data, toggleReminder, deleteTask, showAddTask, addTask }
    }
}
</script>


