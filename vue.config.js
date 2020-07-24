module.exports = {
    css: {
        loaderOptions: {
            sass: {
                // @ is an alias for /src
                prependData: `@import "@/sass/_variables.scss";`
            }
        }
    }
};
