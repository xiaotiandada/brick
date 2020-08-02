// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportVerify from '../../../app/middleware/verify';

declare module 'egg' {
  interface IMiddleware {
    verify: typeof ExportVerify;
  }
}
