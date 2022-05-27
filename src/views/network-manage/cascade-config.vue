<template>
  <div>
    <div class="inner-container-title">{{ $t("CASCADE_CONFIG.CASCADE_CONFIG") }}</div>

    <div class="cascade-form-wrapper">
      <div class="cascade-item-wrapper">
        <el-select size="mini" v-model="dataForm.name1">
          <el-option :label="$t('CASCADE_CONFIG.REMOVE_CAS')" value="1"></el-option>
        </el-select>
        <button class="def-btn">{{ $t("COMMON.SUBMIT") }}</button>
      </div>

      <div class="cascade-item-wrapper">
        <el-select size="mini" v-model="dataForm.name2">
          <el-option :label="$t('CASCADE_CONFIG.MAIN_NET')" value="1"></el-option>
        </el-select>
        <button class="def-btn">{{ $t("COMMON.SUBMIT") }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cascade-config",
  data() {
    return {
      dataForm: {},
    };
  },
  methods: {},
};
</script>

<style scoped>
.cascade-form-wrapper {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
}

.cascade-item-wrapper button {
  margin-left: 10px;
}
</style>
