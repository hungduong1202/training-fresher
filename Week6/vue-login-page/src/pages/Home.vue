<template>
    <div class="container">
        <h1>Welcome {{ userLogin?.taiKhoan }}</h1>
    </div>
</template>

<script>
import store from '@/store'
import router from '@/router'
export default {
    name: 'Home',
    computed:
    {
        userLogin() {
            const data = JSON.parse(localStorage.getItem('userLogin'));
            console.log(data)
            return data
        }
    },
    created() {
        if (!!!this.userLogin) {
            this.$router.push('/login')
        }
    }
}
</script>

<style>
</style>