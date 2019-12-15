import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Row, Col,Message } from 'element-ui';

Vue
.use(Button)
.use(Row)
.use(Col)

Vue.prototype.$message = Message
