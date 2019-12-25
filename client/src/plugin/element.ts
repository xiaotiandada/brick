import Vue from "vue";
import "element-ui/lib/theme-chalk/index.css";
import {
  Button,
  Row,
  Col,
  Message,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Pagination,
  Loading
} from "element-ui";

Vue.use(Button)
  .use(Row)
  .use(Col)
  .use(Message)
  .use(Menu)
  .use(Submenu)
  .use(MenuItem)
  .use(MenuItemGroup)
  .use(Pagination);

Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;

Vue.prototype.$message = Message;
