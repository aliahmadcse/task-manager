<template>
    <div id="app">
        <Navbar />
        <div id="app-container">
            <router-view />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: 'App',
    components: {
        Navbar,
        Footer
    },
    beforeCreate() {
        this.$store.dispatch('authenticate');
    }
};
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';

div#app-container {
    position: fixed;
    top: 80px;
    left: 0;
    bottom: 96px;
    width: 100%;
    padding: 2rem;
    background-color: $container-bg;
    overflow: auto;
}

//works as a global css
.btn-primary {
    background-color: #32aced !important;
}

.btn-success {
    background-color: #4fc08d !important;
}

.btn-success:hover {
    background-color: #3da978;
}
</style>
