<template>
  <div class="edfa-cps-wrapper cps-wrapper">
    <!-- 状态信息 -->
    <div class="board-table-container">
      <table class="board-table" border="1">
        <tr>
          <td>{{ $t("BOARD_INFO.INPUT_OPT_POWER") }}（dBm）</td>
          <td>{{ infoData.lum_input === 327.67 ? $t("SUP.NO_INPUT") : infoData.lum_input }}</td>
          <td>{{ $t("BOARD_INFO.OUTPUT_OPT_POWER") }}（dBm）</td>
          <td>{{ infoData.lum_output === 327.67 ? $t("SUP.NO_OUTPUT") : infoData.lum_output }}</td>
          <td>TEC{{ $t("BOARD_INFO.REF_ELE_CURRENT") }}（mA）</td>
          <td>{{ infoData.tec_cold_cur }}</td>
        </tr>

        <tr>
          <td>{{ $t("BOARD_INFO.MODULE_TEMP") }}（℃）</td>
          <td>{{ infoData.mod_temp }}</td>
          <td>PUMP{{ $t("BOARD_INFO.TEMPERATURE") }}（℃）</td>
          <td>{{ infoData.pump_temp }}</td>
          <td>PUMP{{ $t("BOARD_INFO.AMPERE") }}（mA）</td>
          <td>{{ infoData.pump_cur }}</td>
        </tr>

        <tr>
          <td>{{ $t("BOARD_INFO.INPUT_POWER_ALARM") }}</td>
          <td>{{ infoData.input_power_alarm ? $t("COMMON.ALARM") : $t("COMMON.NORMAL") }}</td>
          <td>{{ $t("BOARD_INFO.OUTPUT_POWER_ALARM") }}</td>
          <td>{{ infoData.output_power_alarm ? $t("COMMON.ALARM") : $t("COMMON.NORMAL") }}</td>
          <td>PUMP{{ $t("BOARD_INFO.CURRENT_ALARM") }}</td>
          <td>{{ infoData.pump_cur_alarm ? $t("COMMON.ALARM") : $t("COMMON.NORMAL") }}</td>
        </tr>

        <tr>
          <td>{{ $t("BOARD_INFO.MODULE_TEMOP_ALARM") }}</td>
          <td>{{ infoData.mod_temp_alarm ? $t("COMMON.ALARM") : $t("COMMON.NORMAL") }}</td>
          <td>PUMP{{ $t("BOARD_INFO.TEMP_ALARM") }}</td>
          <td>{{ infoData.pump_temp_alarm ? $t("COMMON.ALARM") : $t("COMMON.NORMAL") }}</td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td>PUMP{{ $t("BOARD_INFO.SHUT_OFF") }}</td>
          <td style="text-align: left">
            <select style="width: 66px" v-model="infoData.pump_sw">
              <option :value="0">{{ $t("COMMON.ON") }}</option>
              <option :value="1">{{ $t("COMMON.OFF") }}</option>
            </select>
          </td>
          <td>{{ $t("BOARD_INFO.WORK_MODE") }}</td>
          <td>
            <select v-model="infoData.mode">
              <option :value="2">APC</option>
              <option :value="3">AGC</option>
            </select>
          </td>
          <!-- OBA -->
          <template v-if="info.bdtype === 'OBA20G22'">
            <template v-if="infoData.mode === 3">
              <td>{{ $t("BOARD_INFO.GAIN_VAL") }}</td>
              <td>
                <!-- <el-input-number v-model="infoData.gain" size="mini" :min="19" :max="25"></el-input-number> -->
                <Limit :min="19" :max="25" v-model="infoData.gain" />
              </td>
            </template>

            <template v-else-if="infoData.mode === 2">
              <td>{{ $t("BOARD_INFO.POWER_VAL") }}</td>
              <td>
                <Limit :min="-4" :max="20" v-model="infoData.APC_output_power" />
                <!-- <el-input-number v-model="infoData.APC_output_power" size="mini" :min="-4" :max="20"></el-input-number> -->
              </td>
            </template>

            <template v-else-if="infoData.mode === 0">
              <td></td>
              <td></td>
            </template>
          </template>

          <!-- OLA 单板-->
          <template v-if="info.bdtype === 'OLA20G22'">
            <template v-if="infoData.mode === 3">
              <td>{{ $t("BOARD_INFO.GAIN_VAL") }}</td>
              <td>
                <Limit :min="19" :max="25" v-model="infoData.gain" />
              </td>
            </template>

            <template v-else-if="infoData.mode === 2">
              <td>{{ $t("BOARD_INFO.POWER_VAL") }}</td>
              <td>
                <Limit :min="-11" :max="20" v-model="infoData.APC_output_power" />
              </td>
            </template>

            <template v-else-if="infoData.mode === 0">
              <td></td>
              <td></td>
            </template>
          </template>

          <!-- OPA -->
          <template v-else-if="info.bdtype === 'OPA20G32'">
            <template v-if="infoData.mode === 3">
              <td>{{ $t("BOARD_INFO.GAIN_VAL") }}</td>
              <td>
                <Limit :min="29" :max="35" v-model="infoData.gain" />

                <!-- <el-input-number v-model="infoData.gain" size="mini" :min="29" :max="35"></el-input-number> -->
              </td>
            </template>

            <template v-else-if="infoData.mode === 2">
              <td>{{ $t("BOARD_INFO.POWER_VAL") }}</td>
              <td>
                <Limit :min="-1" :max="20" v-model="infoData.APC_output_power" />
              </td>
            </template>

            <template v-else-if="infoData.mode === 0">
              <td></td>
              <td></td>
            </template>
          </template>
        </tr>
      </table>

      <!-- 修改信息 -->

      <table class="board-table" style="margin-top: 20px" border="1">
        <tr>
          <td>{{ $t("BOARD_INFO.INPUT_THR_LOWER_ALARM") }}（dBm）</td>
          <td>
            <Limit v-if="info.bdtype === 'OBA20G22'" :min="-26" :max="12" v-model="infoData.lum_input_thr" />
            <Limit v-else-if="info.bdtype === 'OPA20G32'" :min="-33" :max="5" v-model="infoData.lum_input_thr" />
            <Limit v-else-if="info.bdtype === 'OLA20G22'" :min="-33" :max="5" v-model="infoData.lum_input_thr" />
          </td>
          <td>{{ $t("BOARD_INFO.OUTPUT_OPT_POWER_ALARM_THR") }}（dBm）</td>
          <td>
            <Limit v-if="info.bdtype === 'OBA20G22'" :min="-11" :max="20.5" v-model="infoData.lum_output_thr" />
            <Limit v-else-if="info.bdtype === 'OPA20G32'" :min="-8" :max="20.5" v-model="infoData.lum_output_thr" />
            <Limit v-else-if="info.bdtype === 'OLA20G22'" :min="-14" :max="20.5" v-model="infoData.lum_output_thr" />
          </td>
        </tr>

        <tr>
          <td>{{ $t("BOARD_INFO.PUMP_CURRENT_THR") }}（mA）</td>
          <td>
            <!-- <input type="text" class="def-input" v-model.number="infoData.pump_cur_thr" /> -->
            {{ infoData.pump_cur_thr }}
          </td>
          <td>PUMP{{ $t("BOARD_INFO.UPPER_TEMP_THRESHOLD") }}（℃）</td>
          <td>
            <!-- <input type="text" class="def-input" v-model.number="infoData.pump_temp_high" /> -->
            {{ infoData.pump_temp_high }}
          </td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.LOWER_MODULE_TEMP_THRESHOLD") }}（℃）</td>
          <td>
            <Limit :min="-55" :max="70" v-model="infoData.mod_temp_low" />
          </td>
          <td>PUMP{{ $t("BOARD_INFO.LOWER_TEMP_THRESHOLD") }}（℃）</td>
          <td>
            <!-- <input type="text" class="def-input" v-model.number="infoData.pump_temp_low" /> -->
            {{ infoData.pump_temp_low }}
          </td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.UPPER_MODULE_TEMP_THRESHOLD") }}（℃）</td>
          <td>
            <Limit :min="-55" :max="70" v-model="infoData.mod_temp_high" />
          </td>
          <td>PUMP{{ $t("BOARD_INFO.SHUT_OFF_POWER") }}（dBm）</td>
          <td>
            <Limit v-if="info.bdtype === 'OBA20G22'" :min="-26" :max="4" v-model="infoData.sw_power" />
            <Limit v-else-if="info.bdtype === 'OPA20G32'" :min="-33" :max="5" v-model="infoData.sw_power" />
            <Limit v-else-if="info.bdtype === 'OLA20G22'" :min="-33" :max="5" v-model="infoData.sw_power" />
          </td>
        </tr>
      </table>
    </div>

    <div class="board-change-btns">
      <button class="def-btn" :disabled="refreshInfoDisabled" @click="refreshGetInfo">{{ $t("COMMON.REFRESH") }}</button>
      <div v-permission="'control'">
        <button class="def-btn" :disabled="setInfoDisabled" @click="setInfo">{{ $t("COMMON.APPLY") }}</button>
        <button class="def-btn" :disabled="restoreDefaultInfoDisabled" @click="restoreDefaultInfo">{{ $t("COMMON.RESTOR_DEF") }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from "@/utils/mixins";

/* 
info.bdtype OBA20G22 OPA20G32
*/

export default {
  name: "edfa",
  mixins: [mixins],
  data() {
    return {
      infoData: {
        boardname: "",
        type: "",
        post_reply: 0,
        pump_sw: 0,
        mode: 0,
        lum_input_thr: 0,
        lum_output_thr: 0,
        APC_output_power: 0,
        pump_cur_thr: 0,
        sw_power: 0,
        mod_temp_low: 0,
        mod_temp_high: 0,
        pump_temp_low: 0,
        pump_temp_high: 0,
        gain: 0,
        lum_input: 0,
        lum_output: 0,
        tec_cold_cur: "",
        mod_temp: "",
        pump_temp: "",
        pump_cur: "",
        input_power_alarm: 0,
        output_power_alarm: 0,
        pump_cur_alarm: 0,
        mod_temp_alarm: 0,
        pump_temp_alarm: 0,
      },
    };
  },
};
</script>

<style scoped></style>
