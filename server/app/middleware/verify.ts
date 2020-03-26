// app/middleware/verify.ts

import { Context } from 'egg';

// 验证token 不报错
export default function verifyMiddleWare(): any {
    return async (ctx: Context, next: () => Promise<any>) => {
        const token = ctx.header['x-brick-token'];
        if (token) {
            console.log('token', token);
        } else {
            console.log('授权信息有误');
            ctx.body = {
                code: -1,
                message: '授权信息有误',
            };
            return;
        }
        await next();
    };
}
