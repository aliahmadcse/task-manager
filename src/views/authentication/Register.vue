<template>
    <div>
        <h1>Register Route</h1>
        <form class="custom-form" @submit.prevent="registerUser">
            <div class="form-group">
                <label for="firstname">First Name</label>
                <input
                    type="text"
                    v-model="first"
                    class="form-control"
                    id="firstname"
                    placeholder="First Name..."
                />
            </div>
            <div class="form-group">
                <label for="lastname">Last Name</label>
                <input
                    type="text"
                    v-model="last"
                    class="form-control"
                    id="lastname"
                    placeholder="Last Name..."
                />
            </div>
            <div class="form-group">
                <label for="username">UserName</label>
                <input
                    type="text"
                    v-model="userName"
                    class="form-control"
                    id="username"
                    placeholder="UserName..."
                />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input
                    type="password"
                    v-model="password"
                    class="form-control"
                    id="password"
                    placeholder="Password..."
                />
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
    name: 'register',

    data() {
        return {
            first: '',
            last: '',
            userName: '',
            password: ''
        };
    },

    methods: {
        async registerUser() {
            const user = {
                userName: this.userName,
                first: this.first,
                last: this.last,
                password: this.password
            };
            await auth.registerUser(user);
            await auth.login(user);
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
