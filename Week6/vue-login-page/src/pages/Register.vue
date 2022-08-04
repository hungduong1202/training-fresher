<template>
    <div class="container my-5">
        <div class="align-items-center">
            <form class="w-50 mx-auto d-flex flex-column needs-validation" novalidate @submit.prevent="onSubmit">
                <h1 class="my-3 text-center">Register</h1>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" v-model="user.taiKhoan" class="form-control" minlength="4" maxlength="10"
                        required>
                    <div class="invalid-feedback">Please enter your valid username.</div>
                </div>
                <div class="form-group">
                    <label for="">Email</label>
                    <input type="text" class="form-control" v-model="user.email" required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
                    <div class="invalid-feedback">Please enter your valid email.</div>
                </div>
                <div class="form-group">
                    <label for="">Password</label>
                    <input type="password" class="form-control" v-model="user.matKhau" required
                        pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$">
                    <div class="invalid-feedback">Please enter your valid password.</div>
                </div>
                <input class="btn btn-success" type="submit" value="Sign up">
                <p class="mt-3">Have already an Account? <router-link to="/login">Login</router-link>
                </p>
            </form>
        </div>
    </div>
</template>

<script>
import store from '@/store'
export default {
    name: 'Register',
    data() {
        return {
            user: {
                taiKhoan: '',
                matKhau: '',
                email: '',
            }
        }
    },
    methods: {
        onSubmit() {
            let form = document.querySelector(".needs-validation");
            form.classList.add("was-validated");
            if (form.checkValidity()) {
                store.dispatch('register', this.user)
            }
        }
    }
}

</script>

<style>
</style>