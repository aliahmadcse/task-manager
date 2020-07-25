export default {
    isEmpty(value) {
        return !value || !value.trim();
    },

    capitalize(word) {
        return word.charAt(0).toUpperCase();
    }
};
