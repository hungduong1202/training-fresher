<template>
    <button class="btn" @click="onClick" :style="{ backgroundColor: color }">{{ text }}</button>
</template>

<script>
export default {
    setup(props) {
        const onClick = () => {
            console.log('clicked')
        }
        
        return { onClick }
    },
    props: {
        text: String,
        color: String,
    }

}
</script>

<style scope>
.btn {
    display: inline-block;
    background: #000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
}

.btn:focus {
    outline: none;
}

.btn:active {
    transform: scale(0.98);
}

.btn-block {
    display: block;
    width: 100%;
}
</style>