const PREFIX: string = 'room';

module.exports = () => {
    return async (ctx, next) => {
        console.log('PREFIX', PREFIX);
        const { app, socket, logger, helper } = ctx;
        const id = socket.id;
        const nsp = app.io.of('/');
        const query = socket.handshake.query;

        // 用户信息
        const { room, userId } = query;
        const rooms = [ room ];

        logger.debug('#user_info', id, room, rooms, userId);
        console.log('#user_info', id, room, rooms, userId);

        const tick = (id, msg) => {
            logger.debug('#tick', id, msg);
            console.log('tick', id, msg);
            // 踢出用户前发送消息
            socket.emit(id, helper.parseMsg('deny', msg));

            // 调用adapter 方法提出用户 客户端触发 disconnect 事件
            nsp.adapter.remoteDisconnect(id, true, err => {
                logger.error(err);
            })
        }

        // 检查房间是否存在，不存在则踢出用户
        // 备注：此处 app.redis 与插件无关，可用其他存储代替
        const hasRoom = await app.redis.get(`${PREFIX}:${room}`);
        console.log('hasRoom', hasRoom);
        if (!hasRoom) {
            tick(id, {
                type: 'deleted',
                message: 'deleted, room has been deleted.',
            });
            return;
        }

        // 用户加入
        logger.debug('#join', room);
        socket.join(room);

        // 在线列表
        nsp.adapter.clients(rooms, (err, clients) => {
            if (err) {
                console.log(err, err);
            }

            logger.debug('#online_join', clients)
            // 更新在线用户列表
            nsp.to(room).emit('online', {
                clients,
                action: 'join',
                target: 'participator',
                id,
                message: `User(${id}) joined.`,
            })
        });
        await next();
        // 用户离开
        logger.debug('#leave', room);

        // 在线列表
        nsp.adapter.clients(rooms, (err, clients) => {
            if (err) {
                console.log(err)
            }

            logger.debug('#online_leave', clients);

            // 更新在线用户列表
            nsp.to(room).emit('online', {
                clients,
                action: 'leave',
                target: 'participator',
                id,
                message: `User(${id}) leaved.`,
            })
        })
    };
};
