// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/service/Test';
import ExportAccount from '../../../app/service/account';
import ExportCrawler from '../../../app/service/crawler';
import ExportJmeter from '../../../app/service/jmeter';
import ExportM from '../../../app/service/m';
import ExportTransation from '../../../app/service/transation';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    test: ExportTest;
    account: ExportAccount;
    crawler: ExportCrawler;
    jmeter: ExportJmeter;
    m: ExportM;
    transation: ExportTransation;
    user: ExportUser;
  }
}
