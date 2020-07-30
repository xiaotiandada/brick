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
    // {
    //     data: {
    //         action: 'exchange',  // 'deny' || 'exchange' || 'broadcast'
    //             payload: {},
    //     },
    //     meta:{
    //         timestamp: 1512116201597,
    //             client: 'nNx88r1c5WuHf9XuAAAB',
    //             target: 'nNx88r1c5WuHf9XuAAAB'
    //     },
    // }
    parseMsg(action, payload = {}, metadata = {}) {
        const meta = Object.assign({}, {
            timestamp: Date.now(),
        }, metadata);

        return {
            meta,
            data: {
                action,
                payload,
            },
        };
    },
};
