<template>
    <div class="jumbotron custom-bg-dark">
        <h1 class="display-4">Mevn Stack Task Manager</h1>
        <p
            class="lead"
        >This is a sample task manager application built with Mongodb, express, node and Vue.js</p>
        <hr class="my-4" />
        <p>Click below to begin managing tasks for users.</p>
        <router-link :to="{name:'tasks-all'}" class="btn btn-success" role="button">View Tasks</router-link>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>