<template>
  <div>
    <div class="inner-container-title">{{ $t("ALARM_SET.ALARM_SET") }}</div>

    <div class="manage-alarm-search-wrapper">
      <el-form class="current-alarm-search" inline label-width="100px" :model="dataForm" @submit.native.prevent>
        <el-form-item :label="$t('COMMON.SLOT_NUMBER')">
          <el-select size="mini" v-model="dataForm.slot">
            <el-option :label="$t('COMMON.ALL')" :value="255"></el-option>
            <el-option :label="$t('COMMON.SLOT') + slot" :value="slot" v-for="{ slot } in onlineBoardList" :key="slot"></el-option>
            <el-option :label="$t('COMMON.SLOT') + 8" :value="8"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item :label="$t('COMMON.PORT_NUMBER')">
          <el-select size="mini" v-model="dataForm.portno">
            <el-option :label="$t('COMMON.ALL_PORT')" :value="255"></el-option>
            <el-option :label="$t('COMMON.PORT') + item" :value="item" v-for="item in mapPorts" :key="item"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item :label="$t('ALARM_COMMON.ALARM_LEVEL')">
          <el-select size="mini" v-model="dataForm.level">
            <el-option :label="$t('COMMON.ALL')" :value="255"></el-option>
            <el-option :label="$t('COMMON.HINT')" :value="0"></el-option>
            <el-option :label="$t('COMMON.MINOR')" :value="1"></el-option>
            <el-option :label="$t('COMMON.MAIN')" :value="2"></el-option>
            <el-option :label="$t('COMMON.SEVERITY')" :value="3"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <button class="def-btn" @click="initGetList">{{ $t("COMMON.SEARCH") }}</button>
        </el-form-item>
      </el-form>

      <div class="shield-all-button" v-show="dataForm.slot !== 255">
        <button class="def-btn" @click="shieldAll(1)">{{ $t("ALARM_SET.SHIELD_ALL") }}</button>
        <button class="def-btn" @click="shieldAll(0)">{{ $t("ALARM_SET.OPEN_ALL") }}</button>
      </div>
    </div>

    <el-table border size="mini" :data="dataTable" tooltip-effect="dark" style="width: 100%">
      <el-table-column :label="$t('COMMON.SERIAL')" width="60">
        <template v-slot="{ $index }">
          {{ (page - 1) * total + $index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="slot" :label="$t('COMMON.SLOT_NUMBER')" width="100"></el-table-column>
      <el-table-column prop="board_type" :label="$t('COMMON.BOARD_TYPE')" width="140">
        <template v-slot="{ row }">{{ row.board_type | mapBoardType }}</template>
      </el-table-column>
      <el-table-column prop="portno" :label="$t('COMMON.PORT')" width="60"></el-table-column>
      <el-table-column :label="$t('ALARM_COMMON.ALARM_NAME')">
        <template v-slot="{ row }">{{ row | mapBoardAlarmName }}</template>
      </el-table-column>
      <el-table-column prop="level" :label="$t('ALARM_COMMON.ALARM_LEVEL')" width="100">
        <template v-slot="{ row }">
          {{ row.level | mapAlarmLevel }}
        </template>
      </el-table-column>
      <el-table-column prop="status" :label="$t('ALARM_COMMON.ALARM_STATUS')" width="100">
        <template v-slot="{ $index }">
          <select size="mini" v-model="dataTable[$index].status">
            <option :label="$t('COMMON.DISABLE')" :value="1"></option>
            <option :label="$t('COMMON.ENABLE')" :value="0"></option>
          </select>
        </template>
      </el-table-column>
    </el-table>

    <div class="alarm-list-controls">
      <button class="def-btn" @click="submitAlarm">{{ $t("COMMON.APPLY") }}</button>
      <button class="def-btn" @click="initGetList">{{ $t("COMMON.REFRESH") }}</button>
      <button class="def-btn" :disabled="prevDisabled" @click="prevPage">{{ $t("COMMON.PREV_PAGE") }}</button>
      <button class="def-btn" :disabled="nextDisabled" @click="nextPage">{{ $t("COMMON.NEXT_PAGE") }}</button>
    </div>
  </div>
</template>

<script>
const mapBoardPorts = (v = "") => {
  let port = 0;
  let n = v.toUpperCase();

  switch (n) {
    case "NMU":
    case "OCP10G":
      port = 6;
      break;
    case "OTU10G":
      port = 8;
      break;
    case "DCO200G":
      port = 9;
      break;
    default:
      port = 0;
  }

  return port;
};

export default {
  name: "manage-alarm",
  data() {
    return {
      dataForm: {
        slot: 8,
        portno: 255,
        level: 255,
      },
      inquireLoading: false,
      dataTable: [],
      onlineBoardList: [],
      page: 1,
      total: 30,
      prevDisabled: true,
      nextDisabled: true,
    };
  },
  computed: {
    mapPorts() {
      //根据不同单板显示不同的端口
      const slot = this.dataForm.slot;
      const item = this.onlineBoardList.find(e => e.slot === slot) || {};
      const boardname = slot === 8 ? "NMU" : item.boardname;

      return mapBoardPorts(boardname);
    },
  },
  created() {
    this.getAlarmList();
  },
  mounted() {
    this.$bus.$on("onBoardList", v => {
      this.onlineBoardList = v.filter(e => e.status && e.boardname !== "NMU");
    });
  },
  beforeDestroy() {
    this.$bus.$off("onBoardList");
  },
  methods: {
    initGetList() {
      this.page = 1;
      this.getAlarmList();
    },
    getAlarmList() {
      const data = { otn2000: { type: "get_alarmconfig", boardname: "NMU", ...this.dataForm, start_page: this.page, rows: this.total } };

      this.$http
        .post(data)
        .then(res => {
          const { cfg_records = [], total_pages } = res.otn2000_ack;
          const result = cfg_records || [];
          result.forEach(e => (e.static = e.status));
          this.dataTable = result;

          if (result.length < this.total) {
            this.prevDisabled = this.page === 1;
            this.nextDisabled = true;
          } else {
            if (this.page >= total_pages) {
              this.prevDisabled = false;
              this.nextDisabled = true;
            } else if (this.page <= 1) {
              this.prevDisabled = true;
              this.nextDisabled = false;
            } else {
              this.prevDisabled = false;
              this.nextDisabled = false;
            }
          }
        })
        .catch(() => {
          this.dataTable = [];
        });
    },
    submitAlarm() {
      const cfg_records = this.dataTable.filter(e => e.static !== e.status);
      const data = { otn2000: { slot: cfg_records[0]["slot"], type: "post_alarmconfig", cfg_records } };

      cfg_records.length &&
        this.$http
          .post(data)
          .then(() => {
            // this.getAlarmList();
          })
          .catch(() => {
            alert(this.$t("COMMON.FAIL"));
          })
          .finally(() => {
            this.getAlarmList();
          });
    },
    prevPage() {
      this.dataTable = [];
      this.page -= 1;
      this.getAlarmList();
    },
    nextPage() {
      this.dataTable = [];
      this.page += 1;
      this.getAlarmList();
    },
    shieldAll(enable) {
      const slot = this.dataForm.slot;

      if (slot === 255) return;

      const boardname = slot === 8 ? "NMU" : this.onlineBoardList.find(e => e.slot === slot).boardname;
      // enable 0 屏蔽 1 开启
      const data = { otn2000: { slot, boardname, enable, type: "postall_alarmconfig" } };

      this.$http
        .post(data)
        .then(() => {})
        .catch(() => {
          alert(this.$t("COMMON.FAIL"));
        })
        .finally(() => {
          this.getAlarmList();
        });
    },
  },
};
</script>

<style scoped>
.form-alarm-container {
  padding: 10px 0;
}

.alarm-list-controls {
  padding: 10px 0;
  text-align: right;
}

.manage-alarm-search-wrapper {
  display: flex;
  justify-content: space-between;
}

.shield-all-button {
  margin-top: 7px;
}
</style>
