import Vue from "vue";
import { Menu, MenuItem, Submenu, Table, TableColumn, Form, FormItem, Select, Input, DatePicker, Option, MessageBox, Message, Notification, Loading, Checkbox, Progress, Radio } from "element-ui";

import "./element-variables.scss";

export let load = null;

Vue.prototype.$load = () => (load = Loading.service());
Vue.prototype.$loaded = load && load.close();

(() => {
  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;
})();

Vue.use(Menu)
  .use(MenuItem)
  .use(Submenu)
  .use(Table)
  .use(TableColumn)
  .use(Form)
  .use(FormItem)
  .use(Select)
  .use(Option)
  .use(Input)
  .use(DatePicker)
  .use(Checkbox)
  .use(Progress)
  .use(Radio);
