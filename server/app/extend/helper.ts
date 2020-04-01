// helper.ts
module.exports = {
    formatUser(user) {
        return user + ' helper.ts';
    },

    /**
     * compose
     * @param fn
     */
    compose (...fn) {
        if (fn.length === 0) {
            return arg => arg
        }

        if (fn.length === 1) {
            return fn[0]
        }

        return fn.reduce((a, b) => (...args) => a(b(...args)))
    },

};
