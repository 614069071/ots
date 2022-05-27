<template>
  <div>
    <div class="inner-container-title">{{ $t("SNMP_CONFIG.GLOBAL_CONFIG") }}</div>

    <div class="global-config-snmp-wrapper">
      <div class="global-info-wrapper">
        <div class="system-info-item">
          <span>{{ $t("SNMP_CONFIG.SNMP_READ_COM") }}</span
          ><span>pulic</span>
        </div>
        <div class="system-info-item">
          <span>{{ $t("SNMP_CONFIG.SNMP_WRITE_COM") }}</span
          ><span>private</span>
        </div>
      </div>

      <div class="change-global-snmp-btn">
        <button class="def-btn">{{ $t("COMMON.CHANGE") }}</button>
      </div>
    </div>

    <div class="inner-container-title">{{ $t("SNMP_CONFIG.SNMP_TRAP_CONFIG") }}</div>

    <el-table :data="dataTable" tooltip-effect="dark" style="width: 100%">
      <el-table-column type="index" :label="$t('COMMON.SERIAL')" width="70"> </el-table-column>
      <el-table-column prop="name1" :label="$t('SNMP_CONFIG.HOST_NAME')"></el-table-column>
      <el-table-column prop="name2" :label="$t('COMMON.IP_ADDRESS')"></el-table-column>
      <el-table-column prop="name3" :label="$t('SNMP_CONFIG.UDP_PORT')"></el-table-column>
      <el-table-column prop="name4" :label="$t('COMMON.STATUS')"></el-table-column>
      <el-table-column prop="name5" :label="$t('COMMON.CONTROL')" width="160">
        <template>
          <button class="def-btn">{{ $t("COMMON.CHANGE") }}</button>
          <button class="def-btn">{{ $t("COMMON.DELETE") }}</button>
        </template>
      </el-table-column>
    </el-table>

    <div class="add-trap-config-wrapper" v-for="item in addTrapArg" :key="item">
      <input class="def-input" type="text" :placeholder="$T('SNMP_CONFIG.INPUT_HOST_NAME')" />
      <input class="def-input" type="text" :placeholder="$T('SNMP_CONFIG.INPUT_IP_ADDRESS')" />
      <input class="def-input" type="text" :placeholder="$T('SNMP_CONFIG.INPUT_UDP_PORT')" />

      <button class="def-btn">{{ $t("COMMON.SUBMIT") }}</button>
    </div>

    <div class="add-trap-wrapper">
      <button class="def-btn" @click="addTrapItme">{{ $t("SNMP_CONFIG.ADD_TRAP") }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "snmp-config",
  data() {
    return {
      dataForm: {},
      dataTable: [
        {
          name1: "host222",
          name2: "192.168.1.121",
          name3: "9162",
          name4: "启用",
        },
      ],
      addTrapArg: [],
    };
  },
  methods: {
    addTrapItme() {
      const date = Date.now();
      this.addTrapArg.push(date);
    },
  },
};
</script>

<style scoped lang="scss">
.global-config-snmp-wrapper {
  padding-top: 10px;
}

.global-info-wrapper {
  border-top: 1px solid grey;
  border-left: 1px solid grey;
  .system-info-item {
    display: flex;
    align-items: center;

    span {
      height: 50px;
      line-height: 50px;
      border-right: 1px solid grey;
      border-bottom: 1px solid grey;
      color: #a7a7a7;
    }

    span:first-child {
      background-color: #f4f7fa;
      width: 30%;
      text-align: center;
    }
    span:last-child {
      flex: 1;
      padding-left: 15px;
    }
  }
}

.change-global-snmp-btn {
  margin: 13px 0 40px 0;
  text-align: right;
}

.add-trap-config-wrapper {
  white-space: nowrap;
  padding: 10px 0 0 60px;
  input {
    margin-right: 20px;
  }
}

.add-trap-wrapper {
  text-align: right;
  margin-top: 20px;
}
</style>
