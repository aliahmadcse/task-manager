<template>
    <div class="home">
        <div id="custom-home">
            <hello-world />
        </div>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import { http } from '@/services/httpService';
export default {
    name: 'Home',
    components: {
        HelloWorld
    },
    beforeCreate() {
        http()
            .get('/user')
            .then(res => {
                console.log(res.data);
            });
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
