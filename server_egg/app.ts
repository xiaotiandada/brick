module.exports = app => {
    app.beforeStart(async () => {
        console.log('app before start');
        // 给io room写入房间号
        const room = await app.redis.get('room:demo');
        if (!room) {
            await app.redis.set('room:demo', 'demo');
        }
    })

    // https://github.com/eggjs/egg/issues/2652#issuecomment-425687641
    app.messenger.on('egg-ready', info => {
        // console.log(info);
        // console.log(info, app.server.address().port);
        app.config['_port'] = info.port
    });
};
