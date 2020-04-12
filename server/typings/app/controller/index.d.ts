// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAccount from '../../../app/controller/account';
import ExportChat from '../../../app/controller/chat';
import ExportCrawler from '../../../app/controller/crawler';
import ExportHome from '../../../app/controller/home';
import ExportJmeter from '../../../app/controller/jmeter';
import ExportM from '../../../app/controller/m';
import ExportNotification from '../../../app/controller/notification';
import ExportTransaction from '../../../app/controller/transaction';

declare module 'egg' {
  interface IController {
    account: ExportAccount;
    chat: ExportChat;
    crawler: ExportCrawler;
    home: ExportHome;
    jmeter: ExportJmeter;
    m: ExportM;
    notification: ExportNotification;
    transaction: ExportTransaction;
  }
}
