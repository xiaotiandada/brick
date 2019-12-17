import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Row, Col, Message, Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui';

Vue
.use(Button)
.use(Row)
.use(Col)
.use(Message)
.use(Menu)
.use(Submenu)
.use(MenuItem)
.use(MenuItemGroup);

Vue.prototype.$message = Message;
