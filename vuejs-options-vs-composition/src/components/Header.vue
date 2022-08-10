<template>
    <header>
        <h1>{{ title }}</h1>
        <Button :text="showAddTask ? 'Close' : 'Add'" :color="showAddTask ? 'red' : 'green'"
            @click="$emit('toggleAddTask')"></Button>
    </header>

</template>

<script>
import Button from './Button.vue';
export default {
    components: { Button },
    props: {
        title: String,
        showAddTask: Boolean
    },
    emits: ['toggleAddTask']
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