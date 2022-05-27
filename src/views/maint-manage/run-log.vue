<template>
  <div class="run-log-page">
    <div class="inner-container-title">{{ $t("RUN_LOG.LOG_LIST") }}</div>

    <el-table :data="dataTable" tooltip-effect="dark" style="width: 100%">
      <el-table-column prop="name1" :label="$t('RUN_LOG.CONTROL_OBJ')"></el-table-column>
      <el-table-column prop="name2" :label="$t('RUN_LOG.CONTROL_CONTEXT')"></el-table-column>
      <el-table-column prop="name3" :label="$t('RUN_LOG.ACTION')"></el-table-column>
      <el-table-column prop="name4" :label="$t('RUN_LOG.CONTROL_TIME')"></el-table-column>
      <el-table-column prop="name5" :label="$t('RUN_LOG.CONTROL_WAY')"></el-table-column>
      <el-table-column :label="$t('COMMON.CONTROL')" width="120">
        <template>
          <button v-permission="'control'" class="def-btn">{{ $t("COMMON.DELETE") }}</button>
        </template>
      </el-table-column>
    </el-table>

    <div class="inner-pagination-wrapper inner-pagination-colle">
      <div class="pagination-btns-wrapper">
        <button v-permission="'control'" class="def-btn">{{ $t("RUN_LOG.DELETE_ALL") }}</button>
      </div>

      <div class="pagination-switch-btns">
        <button class="def-btn">{{ $t("COMMON.PREV_PAGE") }}</button>
        <button class="def-btn">{{ $t("COMMON.NEXT_PAGE") }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "run-log",
  data() {
    return {
      dataForm: {},
      dataTable: [
        {
          name1: "webadmin",
          name2: "串口",
          name3: "修改",
          name4: "2020-2-10",
          name5: "aaa",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.inner-pagination-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
