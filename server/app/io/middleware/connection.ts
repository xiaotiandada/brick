module.exports = app => {
    return async (ctx, next) => {
        const { socket } = ctx;
        const id = socket.id;
        const nsp = app.io.of('/');
        // 有人加入聊天室
        await nsp.emit('chat', {
            action: 'join',
            id,
        });

        await next();
        // execute when disconnect.
        // console.log('disconnection!');
    };
};
