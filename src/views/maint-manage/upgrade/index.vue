<template>
  <div>
    <div class="inner-header-wrapper">
      <div class="upgrade-switch-wrapper">
        <!-- <div class="upgrade-item f18" :class="current === 'backup-reboot' ? 'active' : ''" @click="current = 'backup-reboot'">{{ $t("UPGRADE.BACKUP_AND_RESTORE") }}</div> -->
        <div class="upgrade-item f18" :class="current === 'system-upgrade' ? 'active' : ''" @click="current = 'system-upgrade'">{{ $t("UPGRADE.SYS_UPGRADE") }}</div>
        <div class="upgrade-item f18" :class="current === 'board-upgrede' ? 'active' : ''" @click="current = 'board-upgrede'">{{ $t("UPGRADE.BOARD_UPGRADE") }}</div>
      </div>
    </div>

    <div>
      <component :is="current"></component>
    </div>
  </div>
</template>

<script>
import BackupReboot from "./backup-reboot";
import SystemUpgrade from "./system-upgrade";
import boardUpgrede from "./board-upgrede";

export default {
  name: "upgrade",
  components: { BackupReboot, SystemUpgrade, boardUpgrede },
  data() {
    return {
      current: "system-upgrade",
      dataForm: {},
      addUserArg: [],
      dataTable: [
        {
          name1: "webadmin",
          name2: "****",
          name3: "管理员",
          name4: "2020-2-10",
        },
      ],
    };
  },
  methods: {
    addUserItem() {
      this.addUserArg.push(Date.now());
    },
  },
};
</script>

<style scoped lang="scss">
.upgrade-switch-wrapper {
  display: flex;
  align-items: flex-end;
  background-color: #00366b;
  margin-bottom: 20px;

  .upgrade-item {
    height: 30px;
    line-height: 30px;
    color: #fff;
    cursor: pointer;
    text-align: center;
    padding: 0 12px;
  }

  .upgrade-item.active {
    background-color: #dfe0e0;
    color: #000;
  }
}
</style>
