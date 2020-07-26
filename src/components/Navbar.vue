<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark custom-bg-dark fixed-top">
            <router-link class="navbar-brand" :to="{name:'Home'}">
                <img src="@/assets/logo.png" class="mr-2" style="max-height:25px" alt="Vue" />
                Task Manager
            </router-link>
            <button
                class="navbar-toggler"
                data-target="#my-nav"
                data-toggle="collapse"
                aria-controls="my-nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="my-nav" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link :to="{name:'Home'}" class="nav-link" exact>Home</router-link>
                    </li>
                    <li class="nav-item" v-if="$store.state.isLoggedIn">
                        <router-link :to="{name:'tasks-all'}" class="nav-link" exact>Tasks</router-link>
                    </li>
                    <li class="nav-item" v-if="!$store.state.isLoggedIn">
                        <router-link :to="{name:'register'}" class="nav-link" exact>Register</router-link>
                    </li>
                    <li class="nav-item" v-if="!$store.state.isLoggedIn">
                        <router-link :to="{name:'login'}" class="nav-link" exact>Login</router-link>
                    </li>
                    <li class="nav-item" v-if="$store.state.isLoggedIn">
                        <a @click.prevent="logout" class="nav-link" href="#">Logout</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{{ userName }}</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import auth from '../services/AuthService';
export default {
    name: 'Navbar',

    computed: {
        userName() {
            return this.$store.state.userName
                ? this.$store.state.userName
                : 'user';
        }
    },

    methods: {
        logout() {
            auth.logout();
            if (this.$route.name !== 'Home') {
                this.$router.push({ name: 'Home' });
            }
        }
    }
};
</script>

<style lang="scss">
.custom-bg-dark {
    background-color: #373f46 !important;
}

nav.navbar {
    height: 5rem;
}

a.navbar-brand {
    text-transform: uppercase;
    letter-spacing: 3px;
}

li.nav-item a {
    text-transform: uppercase;
}

@media screen and (max-width: 990px) {
    div#my-nav {
        width: 100%;
        position: fixed;
        top: 75px;
        left: 0;
        padding-left: 20px;
        padding-bottom: 5px;
        background-color: $nav-bg;
    }
}
</style>