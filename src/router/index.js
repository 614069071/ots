import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login";
import { storages } from "@/utils";

Vue.use(VueRouter);

const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err);
};

const VueRouterReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(to) {
  return VueRouterReplace.call(this, to).catch(err => err);
};

const staticRoutes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    component: () => import(/* webpackChunkName: "view" */ "@/views/layout"),
    meta: { name: "首页" },
    children: [
      {
        path: "/",
        component: () => import(/* webpackChunkName: "view" */ "@/views/equip-manage"),
        meta: { name: "设备管理" },
        children: [
          {
            path: "/",
            name: "equip-overview",
            component: () => import(/* webpackChunkName: "view" */ "@/views/equip-manage/equip-overview"),
            meta: { name: "设备概览" },
          },
          {
            path: "/board-list",
            name: "board-list",
            component: () => import(/* webpackChunkName: "view" */ "@/views/equip-manage/board-list"),
            meta: { name: "单板列表" },
          },
        ],
      },
      {
        path: "/alarm-manage",
        name: "alarm-manage",
        component: () => import(/* webpackChunkName: "view" */ "@/views/alarm-manage"),
        meta: { name: "告警管理" },
        children: [
          {
            path: "/alarm-manage",
            name: "manage-alarm",
            component: () => import(/* webpackChunkName: "view" */ "@/views/alarm-manage/manage-alarm"),
            meta: { name: "告警管理" },
          },
          {
            path: "/alarm-manage/current-alarm",
            name: "current-alarm",
            component: () => import(/* webpackChunkName: "view" */ "@/views/alarm-manage/current-alarm"),
            meta: { name: "当前告警" },
          },
          {
            path: "/alarm-manage/history-alarm",
            name: "history-alarm",
            component: () => import(/* webpackChunkName: "view" */ "@/views/alarm-manage/history-alarm"),
            meta: { name: "历史告警" },
          },
        ],
      },
      {
        path: "/network-manage",
        name: "network-manage",
        component: () => import(/* webpackChunkName: "view" */ "@/views/network-manage"),
        meta: { name: "网络管理" },
        children: [
          {
            path: "/network-manage",
            name: "ip-config",
            component: () => import(/* webpackChunkName: "view" */ "@/views/network-manage/ip-config"),
            meta: { name: "IP地址配置" },
          },
          {
            path: "/network-manage/snmp-config",
            name: "snmp-config",
            component: () => import(/* webpackChunkName: "view" */ "@/views/network-manage/snmp-config"),
            meta: { name: "SNMP配置" },
          },
          {
            path: "/network-manage/port-info",
            name: "port-info",
            component: () => import(/* webpackChunkName: "view" */ "@/views/network-manage/port-info"),
            meta: { name: "端口信息" },
          },
          {
            path: "/network-manage/cascade-config",
            name: "cascade-config",
            component: () => import(/* webpackChunkName: "view" */ "@/views/network-manage/cascade-config"),
            meta: { name: "级联配置" },
          },
        ],
      },
      {
        path: "/safety-manage",
        name: "safety-manage",
        component: () => import(/* webpackChunkName: "view" */ "@/views/safety-manage"),
        meta: { name: "安全管理" },
        children: [
          {
            path: "/safety-manage",
            name: "user-manage",
            component: () => import(/* webpackChunkName: "view" */ "@/views/safety-manage/user-manage"),
            meta: { name: "用户管理" },
          },
        ],
      },
      {
        path: "/maint-manage",
        name: "maint-manage",
        component: () => import(/* webpackChunkName: "view" */ "@/views/maint-manage"),
        meta: { name: "维护管理" },
        children: [
          {
            path: "/maint-manage",
            name: "system-info",
            component: () => import(/* webpackChunkName: "view" */ "@/views/maint-manage/system-info"),
            meta: { name: "系统信息" },
          },
          {
            path: "/upgrade",
            name: "upgrade",
            component: () => import(/* webpackChunkName: "view" */ "@/views/maint-manage/upgrade"),
            meta: { name: "远程升级" },
          },
          {
            path: "/maint-manage/run-log",
            name: "run-log",
            component: () => import(/* webpackChunkName: "view" */ "@/views/maint-manage/run-log"),
            meta: { name: "运行日志" },
          },
        ],
      },
    ],
  },
  {
    path: "/error",
    component: () => import(/* webpackChunkName: "view" */ "@/views/common/e404"),
  },
  {
    path: "*",
    redirect: "/error",
  },
];

const router = new VueRouter({ routes: staticRoutes });

router.afterEach(({ matched = [] }) => {
  const route = matched[matched.length - 1];
  const exclude = ["/login", "/error"];
  const isExclude = exclude.includes(route.path);

  !isExclude && storages.set("__router_active__", route.path);
});

export default router;
