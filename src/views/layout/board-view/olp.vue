<template>
  <div class="olp-cps-wrapper cps-wrapper">
    <div class="board-table-container">
      <table class="board-table board-title-table" border="1">
        <tr>
          <td>{{ $t("BOARD_INFO.WORK_STATE") }}</td>
          <td>{{ infoData.work_state ? $t("COMMON.PREPARE_REA") : $t("COMMON.MAIN_REA") }}</td>
          <td>{{ $t("BOARD_INFO.PROTECTED_MODE") }}</td>
          <td>
            <select v-model="infoData.protmode">
              <option :value="0">{{ $t("COMMON.AUTO") }}</option>
              <option :value="1">{{ $t("COMMON.MANUAL") }}</option>
            </select>
          </td>
          <td>{{ $t("BOARD_INFO.MAN_REA") }}</td>
          <td>
            <select :disabled="!infoData.protmode" v-model="infoData.forced_switching">
              <option :value="0">{{ $t("COMMON.MAIN_REA") }}</option>
              <option :value="1">{{ $t("COMMON.PREPARE_REA") }}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.MAIN_LINE_RECE_SIGNAL") }}（dBm）</td>
          <td>{{ infoData.main_rx_signal_power | signal }}</td>
          <td>{{ $t("BOARD_INFO.STANDBY_LINE_OPTICAL_SIGNAL") }}（dBm）</td>
          <td>{{ infoData.slave_rx_signal_power | signal }}</td>
          <td>{{ $t("BOARD_INFO.LOCAL_LINE_OPTICAL_SIGNAL") }}（dBm）</td>
          <td>{{ infoData.local_rx_signal_power | signal }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.WHETHER_SWITCH_AUTO") }}</td>
          <td>
            <select :disabled="!!infoData.protmode" v-model="infoData.auto_switchback">
              <option :value="0">{{ $t("COMMON.CUT_BACK") }}</option>
              <option :value="1">{{ $t("COMMON.UN_CUT_BACK") }}</option>
            </select>
          </td>
          <td>{{ $t("BOARD_INFO.WTR_TIME_SWITCH") }}（min）</td>
          <td>
            <limit-select
              v-model="infoData.wtr_time"
              :disabled="!!infoData.protmode"
              :min="5"
              :max="30"
              :options="[
                { label: '5', value: 5 },
                { label: '10', value: 10 },
                { label: '15', value: 15 },
              ]"
            />
          </td>
          <td>{{ $t("BOARD_INFO.MAIN_LINE_ALARM_THRESHOLD") }}（dBm）</td>
          <td>
            <limit-select
              v-model="infoData.main_line_alarm_thre"
              :min="-30"
              :max="15"
              :options="[
                { label: '-15', value: -15 },
                { label: '-18', value: -18 },
              ]"
            />
          </td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.INITIAL_DIFF_BETWEEN") }}（dB）</td>
          <td>
            <limit-select
              v-model="infoData.main_slave_initdiff"
              :min="-30"
              :max="10"
              :options="[
                { label: '1', value: 1 },
                { label: '2', value: 2 },
                { label: '3', value: 3 },
                { label: '-1', value: -1 },
                { label: '-2', value: -2 },
                { label: '-3', value: -3 },
              ]"
            />
          </td>
          <td>{{ $t("BOARD_INFO.ALARM_THRESHOLD_LINE_STANDBY") }}</td>
          <td>
            <limit-select
              v-model="infoData.slave_line_alarm_thre"
              :min="-30"
              :max="10"
              :options="[
                { label: '-15', value: -15 },
                { label: '-18', value: -18 },
              ]"
            />
          </td>
          <td>{{ $t("BOARD_INFO.CHANGE_DIFF_COND") }}（dB）</td>
          <td>
            <limit-select
              v-model="infoData.switch_condition_diff"
              :min="3"
              :max="10"
              :disabled="!!infoData.protmode"
              :options="[
                { label: '4', value: 4 },
                { label: '5', value: 5 },
              ]"
            />
          </td>
        </tr>
      </table>
    </div>

    <div class="board-change-btns">
      <button class="def-btn" @click="refreshGetInfo">{{ $t("COMMON.REFRESH") }}</button>
      <div v-permission="'control'">
        <button class="def-btn" @click="setInfo">{{ $t("COMMON.APPLY") }}</button>
        <button class="def-btn" @click="restoreDefaultInfo">{{ $t("COMMON.RESTOR_DEF") }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from "@/utils/mixins";
import LimitSelect from "@/components/limit-select";

export default {
  name: "olp",
  components: { LimitSelect },
  mixins: [mixins],
  data() {
    return {
      infoData: {
        boardname: "olp",
        type: "get_info",
        protmode: 0,
        forced_switching: 0,
        auto_switchback: 0,
        wtr_time: 1,
        main_line_alarm_thre: 0,
        slave_line_alarm_thre: 0,
        main_slave_initdiff: 0,
        switch_condition_diff: 0,
        work_state: 0,
        main_rx_signal_power: 0,
        slave_rx_signal_power: 0,
        local_rx_signal_power: 0,
      },
    };
  },
  filters: {
    signal(val) {
      if (val !== 0 && !val) return "NA";

      if (val < -30) {
        return this.$t("SUP.WEAK");
      } else if (val >= -30 && val <= 14) {
        return val;
      } else {
        return this.$t("SUP.STRONG");
      }
    },
  },
};
</script>
<style></style>
