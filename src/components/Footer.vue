<template>
    <footer id="custom-footer">
        <span>&copy; 2020 Ali Ahmad</span>
        <span>Privacy</span>
        <span>Term of Services</span>
    </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer#custom-footer {
    height: 6rem;
    background-color: #373f46;
    font-size: 1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
@media screen and (max-width: 725px) {
    footer#custom-footer {
        flex-direction: column;
    }
}
</style>