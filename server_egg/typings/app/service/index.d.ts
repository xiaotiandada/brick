// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/service/Test';
import ExportAccount from '../../../app/service/account';
import ExportCrawler from '../../../app/service/crawler';
import ExportElasticsearch from '../../../app/service/elasticsearch';
import ExportJmeter from '../../../app/service/jmeter';
import ExportM from '../../../app/service/m';
import ExportNotification from '../../../app/service/notification';
import ExportTransation from '../../../app/service/transation';
import ExportUser from '../../../app/service/user';
import ExportWx from '../../../app/service/wx';

declare module 'egg' {
  interface IService {
    test: ExportTest;
    account: ExportAccount;
    crawler: ExportCrawler;
    elasticsearch: ExportElasticsearch;
    jmeter: ExportJmeter;
    m: ExportM;
    notification: ExportNotification;
    transation: ExportTransation;
    user: ExportUser;
    wx: ExportWx;
  }
}
