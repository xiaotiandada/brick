module.exports = app => {
    app.beforeStart(async () => {
        console.log('app before start');
        // 给io room写入房间号
        const room = await app.redis.get('room:demo');
        if (!room) {
            await app.redis.set('room:demo', 'demo');
        }
    })
};
