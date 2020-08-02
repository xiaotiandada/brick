// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAccount from '../../../app/controller/account';
import ExportChat from '../../../app/controller/chat';
import ExportCrawler from '../../../app/controller/crawler';
import ExportElasticsearch from '../../../app/controller/elasticsearch';
import ExportHome from '../../../app/controller/home';
import ExportJmeter from '../../../app/controller/jmeter';
import ExportM from '../../../app/controller/m';
import ExportNotification from '../../../app/controller/notification';
import ExportTransaction from '../../../app/controller/transaction';
import ExportWx from '../../../app/controller/wx';

declare module 'egg' {
  interface IController {
    account: ExportAccount;
    chat: ExportChat;
    crawler: ExportCrawler;
    elasticsearch: ExportElasticsearch;
    home: ExportHome;
    jmeter: ExportJmeter;
    m: ExportM;
    notification: ExportNotification;
    transaction: ExportTransaction;
    wx: ExportWx;
  }
}
