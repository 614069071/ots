<template>
  <div>
    <div class="inner-header-wrapper">
      <div class="inner-container-title">{{ $t("COMMON.SEARCH") }}</div>

      <el-form class="history-alarm-search" inline label-width="100px" :model="dataForm" @submit.native.prevent>
        <el-form-item :label="$t('COMMON.START_TIME')">
          <el-date-picker size="mini" v-model="dataForm.start_time" value-format="timestamp" />
        </el-form-item>

        <el-form-item :label="$t('COMMON.END_TIME')">
          <el-date-picker size="mini" v-model="dataForm.end_time" value-format="timestamp" />
        </el-form-item>

        <el-form-item :label="$t('COMMON.SLOT_NUMBER')">
          <el-select size="mini" v-model="dataForm.slot" @change="setCacheCond('slot', $event)">
            <el-option :label="$t('COMMON.ALL')" :value="255"></el-option>
            <el-option :label="$t('COMMON.SLOT') + 1" :value="1"></el-option>
            <el-option :label="$t('COMMON.SLOT') + 2" :value="2"></el-option>
            <el-option :label="$t('COMMON.SLOT') + 3" :value="3"></el-option>
            <el-option :label="$t('COMMON.SLOT') + 4" :value="4"></el-option>
            <el-option :label="$t('COMMON.SLOT') + 5" :value="5"></el-option>
            <el-option :label="$t('COMMON.SLOT') + 6" :value="6"></el-option>
            <el-option :label="$t('COMMON.SLOT') + 7" :value="7"></el-option>
            <el-option :label="$t('COMMON.SLOT') + 8" :value="8"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item :label="$t('ALARM_COMMON.ALARM_LEVEL')">
          <el-select size="mini" v-model="dataForm.level" @change="setCacheCond('level', $event)">
            <el-option :label="$t('COMMON.ALL')" :value="255"></el-option>
            <el-option :label="$t('COMMON.HINT')" :value="0"></el-option>
            <el-option :label="$t('COMMON.MINOR')" :value="1"></el-option>
            <el-option :label="$t('COMMON.MAIN')" :value="2"></el-option>
            <el-option :label="$t('COMMON.SEVERITY')" :value="3"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <div class="history-alarm-search-submit">
        <button class="def-btn" @click="initGetList">{{ $t("COMMON.SEARCH") }}</button>
        <button class="def-btn" @click="resetDataForm">{{ $t("COMMON.RESET1") }}</button>
      </div>
    </div>

    <div class="inner-container-title">{{ $t("HISTORY_ALARM.HISTORY_ALARM") }}</div>

    <el-table border size="mini" :data="dataTable" tooltip-effect="dark" style="width: 100%">
      <el-table-column :label="$t('COMMON.SERIAL')" width="60">
        <template v-slot="{ $index }">
          {{ (page - 1) * total + $index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="occur_time" width="140" :label="$t('ALARM_COMMON.OCCURRENCE_TIME')">
        <template v-slot="{ row }">
          {{ (row.occur_time * 1000) | formatTime }}
        </template>
      </el-table-column>
      <el-table-column prop="occur_time" width="140" :label="$t('COMMON.END_TIME')">
        <template v-slot="{ row }">
          {{ (row.end_time * 1000) | formatTime }}
        </template>
      </el-table-column>
      <el-table-column prop="slot" :label="$t('COMMON.SLOT_NUMBER')" width="100"></el-table-column>
      <el-table-column prop="board_type" :label="$t('COMMON.BOARD_TYPE')" width="140">
        <template v-slot="{ row }">{{ row.board_type | mapBoardType }}</template>
      </el-table-column>
      <el-table-column prop="id" :label="$t('ALARM_COMMON.ALARM_NAME')">
        <template v-slot="{ row }">{{ row | mapBoardAlarmName }}</template>
      </el-table-column>
      <el-table-column prop="level" :label="$t('ALARM_COMMON.ALARM_LEVEL')" width="100">
        <template v-slot="{ row }">
          {{ row.level | mapAlarmLevel }}
        </template>
      </el-table-column>
      <el-table-column prop="name6" :label="$t('ALARM_COMMON.ALARM_CAUSE')"></el-table-column>
      <el-table-column prop="confirm_time" width="140" :label="$t('ALARM_COMMON.CONFIRM_TIME')">
        <template v-slot="{ row }">
          <template v-if="row.confirm_time">
            {{ (row.confirm_time * 1000) | formatTime }}
          </template>

          <template v-else>{{ $t("ALARM_COMMON.UNCONFIRM") }}</template>
        </template>
      </el-table-column>
      <el-table-column :label="$t('COMMON.CONTROL')" width="140">
        <template v-slot="{ row }">
          <div v-permission="'control'">
            <button v-if="!row.confirm_time" class="def-btn" @click="confimAlarm(row)">{{ $t("COMMON.CONFIRM") }}</button>
            <button class="def-btn" @click="deleteAlarm(row)">{{ $t("COMMON.DELETE") }}</button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <div class="inner-pagination-wrapper inner-pagination-colle">
      <div class="pagination-btns-wrapper">
        <div v-permission="'control'">
          <button class="def-btn" @click="delCheckAlarm">{{ $t("ALARM_COMMON.DELETE_CHECK") }}</button>
          <button class="def-btn" @click="delAllAlarm">{{ $t("ALARM_COMMON.DELETE_ALL") }}</button>
          <button class="def-btn" @click="confimCheckAlarm">{{ $t("ALARM_COMMON.CONFIRM_CHECK") }}</button>
          <button class="def-btn" @click="confimAllAlarm">{{ $t("ALARM_COMMON.CONFIRM_ALL") }}</button>
        </div>
      </div>

      <div class="pagination-switch-btns">
        <button class="def-btn" @click="initGetList">{{ $t("COMMON.REFRESH") }}</button>
        <button class="def-btn" :disabled="prevDisabled" @click="prevPage">{{ $t("COMMON.PREV_PAGE") }}</button>
        <button class="def-btn" :disabled="nextDisabled" @click="nextPage">{{ $t("COMMON.NEXT_PAGE") }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { storages } from "@/utils";
export default {
  name: "history-alarm",
  data() {
    return {
      dataForm: {
        slot: 255,
        level: 255,
      },
      inquireLoading: false,
      dataTable: [
        // {
        //   id: 1,
        //   slot: 5,
        //   board_type: 1,
        //   alarmtype: 1,
        //   portno: 0,
        //   occur_time: 0,
        //   end_time:0,
        //   confirm_time: 0,
        // },
      ],
      page: 1,
      total: 30,
      prevDisabled: true,
      nextDisabled: true,
    };
  },
  created() {
    const cacheCond = storages.get("__cache_cond__") || {};
    this.dataForm = cacheCond;
    this.getAlarmList();
  },
  mounted() {},
  computed: {
    mapStartTime() {
      if (!this.dataForm.start_time) return;
      return parseInt(this.dataForm.start_time / 1000);
    },
    mapEndTime() {
      if (!this.dataForm.end_time) return;
      return parseInt(this.dataForm.end_time / 1000);
    },
  },
  methods: {
    initGetList() {
      this.page = 1;
      this.getAlarmList();
    },
    resetDataForm() {
      this.dataForm = { slot: 255, level: 255 };
    },
    getAlarmList() {
      const times = { start_time: this.mapStartTime, end_time: this.mapEndTime };
      const data = { otn2000: { type: "get_histalarm", boardname: "NMU", ...this.dataForm, ...times, start_page: this.page, rows: this.total } };

      this.$http
        .post(data)
        .then(res => {
          const { records = [], total_pages } = res.otn2000_ack;

          this.dataTable = records || [];

          if (records.length < this.total) {
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
        })
        .finally(() => {});
    },
    confimAlarm(row) {
      this.$confirm(this.$t("ALARM_COMMON.CONFIRM_ALARM"), this.$t("COMMON.HINT"), {
        confirmButtonText: this.$t("COMMON.SUBMIT"),
        cancelButtonText: this.$t("COMMON.CANCEL"),
      })
        .then(() => {
          const { id } = row;
          const data = { otn2000: { boardname: "NMU", type: "conf_histalarm", id, confirm_time: parseInt(Date.now() / 1000) } };

          this.$http
            .post(data)
            .then(res => {
              console.log("确认成功", res);

              this.getAlarmList();
            })
            .catch(() => {
              console.log("确认失败");
            })
            .finally(() => {});
        })
        .catch(() => {
          console.log("取消");
        });
    },
    deleteAlarm(row) {
      this.$confirm(this.$t("ALARM_COMMON.CONFIRM_DELETE_ALARM"), this.$t("COMMON.HINT"), {
        confirmButtonText: this.$t("COMMON.SUBMIT"),
        cancelButtonText: this.$t("COMMON.CANCEL"),
      })
        .then(() => {
          const { id } = row;
          const data = { otn2000: { boardname: "NMU", type: "del_histalarm", id } };

          this.$http
            .post(data)
            .then(res => {
              console.log("删除成功", res);

              this.getAlarmList();
            })
            .catch(() => {
              console.log("删除失败");
            })
            .finally(() => {});
        })
        .catch(() => {
          console.log("取消");
        });
    },
    delCheckAlarm() {
      this.$confirm(this.$t("ALARM_COMMON.CONFIRM_DELETE_ALARM"), this.$t("COMMON.HINT"), {
        confirmButtonText: this.$t("COMMON.SUBMIT"),
        cancelButtonText: this.$t("COMMON.CANCEL"),
      })
        .then(() => {
          const { slot, start_time, end_time, level } = this.dataForm;
          const data = { otn2000: { boardname: "NMU", slot, start_time, end_time, level, type: "del_histalarm" } };

          this.$http
            .post(data)
            .then(res => {
              console.log("删除成功", res);

              this.getAlarmList();
            })
            .catch(() => {
              console.log("删除失败");
            })
            .finally(() => {});
        })
        .catch(() => {
          console.log("取消");
        });
    },
    delAllAlarm() {
      this.$confirm(this.$t("ALARM_COMMON.CONFIRM_ALL_DELETE_ALARM"), this.$t("COMMON.HINT"), {
        confirmButtonText: this.$t("COMMON.SUBMIT"),
        cancelButtonText: this.$t("COMMON.CANCEL"),
      })
        .then(() => {
          const data = { otn2000: { boardname: "NMU", type: "delall_histalarm" } };

          this.$http
            .post(data)
            .then(res => {
              console.log("删除成功", res);

              this.getAlarmList();
            })
            .catch(() => {
              console.log("删除失败");
            })
            .finally(() => {});
        })
        .catch(() => {
          console.log("取消");
        });
    },
    confimCheckAlarm() {
      this.$confirm(this.$t("ALARM_COMMON.CONFIRM_CHECKED_ALARM"), this.$t("COMMON.HINT"), {
        confirmButtonText: this.$t("COMMON.SUBMIT"),
        cancelButtonText: this.$t("COMMON.CANCEL"),
      })
        .then(() => {
          const data = { otn2000: { boardname: "NMU", type: "conf_histalarm", ...this.dataForm, confirm_time: parseInt(Date.now() / 1000) } };

          this.$http
            .post(data)
            .then(res => {
              console.log("确认成功", res);

              this.getAlarmList();
            })
            .catch(() => {
              console.log("确认失败");
            })
            .finally(() => {});
        })
        .catch(() => {
          console.log("取消");
        });
    },
    confimAllAlarm() {
      this.$confirm(this.$t("ALARM_COMMON.CONFIRM_ALL_ALARM"), this.$t("COMMON.HINT"), {
        confirmButtonText: this.$t("COMMON.SUBMIT"),
        cancelButtonText: this.$t("COMMON.CANCEL"),
      })
        .then(() => {
          const data = { otn2000: { boardname: "NMU", type: "confall_histalarm", confirm_time: parseInt(Date.now() / 1000) } };

          this.$http
            .post(data)
            .then(res => {
              console.log("确认成功", res);

              this.getAlarmList();
            })
            .catch(() => {
              console.log("确认失败");
            })
            .finally(() => {});
        })
        .catch(() => {
          console.log("取消");
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
    setCacheCond(key, value) {
      const cacheCond = storages.get("__cache_cond__") || {};
      cacheCond[key] = value;
      storages.set("__cache_cond__", cacheCond);
    },
  },
};
</script>

<style scoped>
.history-alarm-search {
  margin-top: 20px;
}

.history-alarm-search-submit {
  text-align: right;
}

.history-alarm-search-submit button + button {
  margin-left: 7px;
}
</style>
