<template>
    <div class="container my-5">
        <div class="align-items-center">
            <form class="w-50 mx-auto d-flex flex-column" @submit.prevent="onSubmit">
                <h1 class="my-3 text-center">Login</h1>
                <div class="form-group">
                    <label for="">Username</label>
                    <input type="text" v-model="user.taiKhoan" class="form-control">
                </div>
                <div class="form-group">
                    <label for="">Password</label>
                    <input type="password" class="form-control" v-model="user.matKhau">
                </div>
                <input class="btn btn-success" type="submit" value="Sign up">
                <p class="mt-3">Not registered yet? <router-link to="/register">Create an Account</router-link>
                </p>
            </form>
        </div>
    </div>
</template>

<script>
import store from '@/store'
export default {
    name: 'Login',
    data() {
        return {
            user: {
                taiKhoan: '',
                matKhau: '',
            }
        }
    },
    methods: {
        onSubmit() {
            console.log(this.user)
            console.log('submitted')
            store.dispatch('login', this.user)
        }
    }
}
</script>

<style>
</style>