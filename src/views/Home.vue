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
    },
    beforeCreate() {
        fetch(this.$store.state.apiUrl + '/api/user', {
            method: 'GET'
        })
            // .then(res => res.json())
            .then(res => {
                console.log(res);
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