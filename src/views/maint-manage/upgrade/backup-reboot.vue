<template>
  <div>
    <div class="backup-reboot-checks">
      <el-checkbox>板卡#2</el-checkbox>
      <el-checkbox>板卡#4</el-checkbox>
      <el-checkbox>板卡#6</el-checkbox>
      <el-checkbox>板卡#8</el-checkbox>
      <el-checkbox>NMU</el-checkbox>
      <el-checkbox>恢复出厂IP</el-checkbox>
    </div>

    <div class="setting-btns">
      <button class="def-btn">{{ $t("UPGRADE.BACKUP") }}</button>
      <button class="def-btn">{{ $t("UPGRADE.ALL_SELECT") }}</button>
      <button class="def-btn">{{ $t("UPGRADE.ALL_UNSELECT") }}</button>
      <button class="def-btn">{{ $t("UPGRADE.UN_ALL_SELECT") }}</button>
      <button class="def-btn">{{ $t("UPGRADE.BACKUP_AND_RESTORE") }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "backup-reboot",
  data() {
    return {
      formData: {},
    };
  },
};
</script>

<style scoped lang="css">
.setting-btns {
  margin-top: 20px;
}

.backup-reboot-checks {
  margin-top: 24px;
}
</style>

<style>
.backup-reboot-checks .el-checkbox {
  margin-bottom: 24px;
}
</style>
