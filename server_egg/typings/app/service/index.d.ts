// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportTest from '../../../app/service/Test';
import ExportAccount from '../../../app/service/account';
import ExportCrawler from '../../../app/service/crawler';
import ExportJmeter from '../../../app/service/jmeter';
import ExportM from '../../../app/service/m';
import ExportNotification from '../../../app/service/notification';
import ExportTransation from '../../../app/service/transation';
import ExportUser from '../../../app/service/user';
import ExportWx from '../../../app/service/wx';

declare module 'egg' {
  interface IService {
    test: AutoInstanceType<typeof ExportTest>;
    account: AutoInstanceType<typeof ExportAccount>;
    crawler: AutoInstanceType<typeof ExportCrawler>;
    jmeter: AutoInstanceType<typeof ExportJmeter>;
    m: AutoInstanceType<typeof ExportM>;
    notification: AutoInstanceType<typeof ExportNotification>;
    transation: AutoInstanceType<typeof ExportTransation>;
    user: AutoInstanceType<typeof ExportUser>;
    wx: AutoInstanceType<typeof ExportWx>;
  }
}
