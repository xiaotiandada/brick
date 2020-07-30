// app/middleware/verify.ts

import { Context } from 'egg';
import * as jwt from 'jsonwebtoken';

// 验证token
export default function verifyMiddleWare(options): any {
    return async (ctx: Context, next: () => Promise<any>) => {
        console.log('options：', options);
        try {
            const token = ctx.header['x-brick-token'];
            if (token) {
                const jwtVerifyResult = await jwt.verify(token, ctx.app.config.jwt.secret);
                if (jwtVerifyResult) {
                    console.log('jwtVerifyResult', jwtVerifyResult);
                    await next();
                } else {
                    ctx.body = {
                        code: -1,
                        message: '授权信息校验失败',
                    };
                }
            } else {
                ctx.body = {
                    code: -1,
                    message: '没有可校验的授权信息',
                };
            }
        } catch (e) {
            console.log(e);
            ctx.logger.error(new Error(`verify: ${e}`));
            ctx.body = {
                code: -1,
                message: '授权信息校验出错',
            };
        }
    };
}
