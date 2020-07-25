<template>
    <div>
        <h1>Login Route</h1>
        <form class="custom-form" @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="username">UserName</label>
                <input type="text" class="form-control" id="username" placeholder="UserName..." />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password..." />
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-secondary">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
import auth from '@/services/AuthService';

export default {
    name: 'Login',
    methods: {
        onSubmit() {
            auth.login();
            this.$router.push({ name: 'Home' });
        }
    }
};
</script>

<style lang="scss" scoped>
form.custom-form {
    max-width: 40rem;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
}
</style>