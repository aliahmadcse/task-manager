<template>
    <div id="app">
        <Navbar />
        <div id="app-container">
            <router-view />
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
    name: 'App',
    components: {
        Navbar
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
</style>
