<template>
  <div class="sidebar">
    <!-- background-color="#f0f7ff"  text-color="rgba(255, 255, 255, 0.65)" -->
    <el-menu class="sidebar-el-menu" :default-active="onRoutes" text-color="#003466" active-text-color="#fff" unique-opened>
      <middle-menu v-for="(item, i) in menuTreeColle" :model="item" :key="item.path" :index="i" />
    </el-menu>
  </div>
</template>

<script>
import MiddleMenu from "./middle-menu";
import { storages, perToMenus } from "@/utils";

export default {
  name: "side-bar",
  components: { MiddleMenu },
  data() {
    return {
      onRoutes: storages.get("__router_active__") || "",
    };
  },
  computed: {
    menuTreeColle() {
      const role = storages.get("__role__") || "0";
      const ORDIN = "0";
      const MANUF = "1";
      const ADMIN = "2";

      const menus = [
        {
          icon: "icon-system",
          menuName: this.$t("MENU.DEVICE_MANAGE"),
          meta: {
            role: [MANUF, ADMIN, ORDIN],
          },
          children: [
            {
              icon: "",
              menuName: this.$t("MENU.DEVICE_VIEW"),
              menuLink: "/",
              meta: {
                role: [MANUF, ADMIN, ORDIN],
              },
            },
            {
              icon: "",
              menuName: this.$t("MENU.BOARD_LIST"),
              menuLink: "/board-list",
              meta: {
                role: [MANUF, ADMIN, ORDIN],
              },
            },
          ],
        },
        {
          icon: "icon-warning",
          menuName: this.$t("MENU.ALARM_MANAGE"),
          meta: {
            role: [ADMIN, ORDIN],
          },
          children: [
            {
              icon: "",
              menuName: this.$t("MENU.ALARM_CONFIG"),
              menuLink: "/alarm-manage",
              meta: {
                role: [ADMIN],
              },
            },
            {
              icon: "",
              menuName: this.$t("MENU.CURRENT_ALARM"),
              menuLink: "/alarm-manage/current-alarm",
              meta: {
                role: [ADMIN, ORDIN],
              },
            },
            {
              icon: "",
              menuName: this.$t("MENU.HISTORY_ALARM"),
              menuLink: "/alarm-manage/history-alarm",
              meta: {
                role: [ADMIN, ORDIN],
              },
            },
          ],
        },
        // {
        //   icon: "icon-earth",
        //   menuName: this.$t("MENU.NET_MANAGE"),
        //   meta: {
        //     role: [ADMIN, ORDIN],
        //   },
        //   children: [
        //     {
        //       icon: "",
        //       menuName: this.$t("MENU.IP_CONFIG"),
        //       menuLink: "/network-manage",
        //       meta: {
        //         role: [ADMIN],
        //       },
        //     },
        //     {
        //       icon: "",
        //       menuName: this.$t("MENU.SNMP_CONFIG"),
        //       menuLink: "/network-manage/snmp-config",
        //       meta: {
        //         role: [ADMIN],
        //       },
        //     },
        //     {
        //       icon: "",
        //       menuName: this.$t("MENU.PORT_INFO"),
        //       menuLink: "/network-manage/port-info",
        //       meta: {
        //         role: [ADMIN, ORDIN],
        //       },
        //     },
        //     {
        //       icon: "",
        //       menuName: this.$t("MENU.CAS_CONFIG"),
        //       menuLink: "/network-manage/cascade-config",
        //       meta: {
        //         role: [ADMIN],
        //       },
        //     },
        //   ],
        // },
        {
          icon: "icon-security",
          menuName: this.$t("MENU.SEC_MANAGE"),
          meta: {
            role: [ADMIN, ORDIN],
          },
          children: [
            {
              icon: "",
              menuName: this.$t("MENU.USER_MANAGE"),
              menuLink: "/safety-manage",
              meta: {
                role: [ADMIN, ORDIN],
              },
            },
          ],
        },
        {
          icon: "icon-ampl",
          menuId: 5,
          menuName: this.$t("MENU.MAIN_MANAGE"),
          meta: {
            role: [ADMIN, ORDIN],
          },
          children: [
            {
              icon: "",
              menuName: this.$t("MENU.SYS_INFO"),
              menuLink: "/maint-manage",
              meta: {
                role: [ADMIN, ORDIN],
              },
            },
            {
              icon: "",
              menuName: this.$t("MENU.UPGRADE"),
              menuLink: "/upgrade",
              meta: {
                role: [ADMIN],
              },
            },
            // {
            //   icon: "",
            //   menuName: this.$t("MENU.RUN_LOG"),
            //   menuLink: "/maint-manage/run-log",
            //   meta: {
            //     role: [ADMIN, ORDIN],
            //   },
            // },
          ],
        },
      ];

      const roleMenus = perToMenus(role, menus);

      return roleMenus;
    },
  },
};
</script>

<style lang="scss">
.sidebar {
  &::-webkit-scrollbar {
    width: 0;
  }

  .sidebar-el-menu {
    overflow: hidden;
  }

  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 200px;
    // min-width: 210px; //该写法，内容会自动撑开，但收起动画会不流畅
  }

  .el-menu {
    border-right: 0;
  }

  ul {
    height: 100%;
  }

  .el-menu--collapse > .middle-menu > .el-submenu > .el-submenu__title {
    span {
      height: 0;
      width: 0;
      overflow: hidden;
      visibility: hidden;
      display: inline-block;
    }
    .el-submenu__icon-arrow {
      display: none;
    }
  }
}

.el-submenu__title,
.el-menu-item {
  height: 45px !important;
  line-height: 45px !important;
  font-size: 15px;
  border-bottom: 1px solid #edf0ef;
}

.el-submenu__title:hover,
.el-menu-item:hover {
  background-color: #fff !important;
}

.el-menu-item.is-active {
  // background-color: var(--default-color) !important;
  background-color: var(--dft-color) !important;
}
</style>
