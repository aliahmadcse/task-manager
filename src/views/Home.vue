<template>
    <div class="home">
        <div id="custom-home">
            <hello-world />
        </div>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'Home',
    components: {
        HelloWorld
    }
};
</script>

<style lang="scss" scoped>
div#custom-home {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
