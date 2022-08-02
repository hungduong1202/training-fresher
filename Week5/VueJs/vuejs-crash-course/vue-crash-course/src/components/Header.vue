<template>
    <header>
        <h1>{{ title }}</h1>
        <Button :text="showAddTask ? 'Close' : 'Add'" :color="showAddTask ? 'red' : 'green'"
            @click="$emit('toggle-add-task')" />
    </header>
</template>

<script>
import Button from "@/components/Button.vue"
export default {
    name: "Header",
    props: {
        title: { type: String, default: "Hello World" }, showAddTask: { type: Boolean }
    },
    components: { Button },
    emits: ['toggle-add-task']
}
</script>


<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px
}
</style>