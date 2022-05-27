<template>
  <div class="otu4x10g-cps-wrapper cps-wrapper">
    <div class="board-table-container">
      <table class="board-table" border="1">
        <thead>
          <tr>
            <td></td>
            <td>
              <div class="coll-3">{{ $t("BOARD_INFO.AISLE") }}1</div>
            </td>
            <td></td>
            <td></td>
            <td>
              <div class="coll-3">{{ $t("BOARD_INFO.AISLE") }}2</div>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>{{ $t("COMMON.PORT") }}</td>
            <td>Client</td>
            <td>Sec-Line</td>
            <td>Pri-Line</td>
            <td>Client</td>
            <td>Sec-Line</td>
            <td>Pri-Line</td>
          </tr>
        </thead>

        <tr>
          <td>{{ $t("BOARD_INFO.IN_STATE") }}</td>
          <td>{{ infoData.channels[0].link_status.client ? $t("COMMON.IN_OFFICE") : $t("COMMON.DISLOCATION") }}</td>
          <td>{{ infoData.channels[0].link_status.Pri_Line ? $t("COMMON.IN_OFFICE") : $t("COMMON.DISLOCATION") }}</td>
          <td>{{ infoData.channels[0].link_status.Sec_Line ? $t("COMMON.IN_OFFICE") : $t("COMMON.DISLOCATION") }}</td>
          <td>{{ infoData.channels[1].link_status.client ? $t("COMMON.IN_OFFICE") : $t("COMMON.DISLOCATION") }}</td>
          <td>{{ infoData.channels[1].link_status.Pri_Line ? $t("COMMON.IN_OFFICE") : $t("COMMON.DISLOCATION") }}</td>
          <td>{{ infoData.channels[1].link_status.Sec_Line ? $t("COMMON.IN_OFFICE") : $t("COMMON.DISLOCATION") }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.LINK_STATE") }}</td>
          <td>{{ infoData.channels[0].link_status.client ? (infoData.channels[0].los.client ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.channels[0].link_status.Pri_Line ? (infoData.channels[0].los.Pri_Line ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.channels[0].link_status.Sec_Line ? (infoData.channels[0].los.Sec_Line ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.channels[1].link_status.client ? (infoData.channels[1].los.client ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.channels[1].link_status.Pri_Line ? (infoData.channels[1].los.Pri_Line ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.channels[1].link_status.Sec_Line ? (infoData.channels[1].los.Sec_Line ? "DOWN" : "UP") : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.WORK_STATE") }}</td>
          <td>
            <div class="coll-3">
              <!-- {{ infoData.channels[0].work_status ? $t("COMMON.PREPARE_REA") : $t("COMMON.MAIN_REA") }} -->
              {{ mapWorkState1 }}
            </div>
          </td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-3">
              <!-- {{ infoData.channels[1].work_status ? $t("COMMON.PREPARE_REA") : $t("COMMON.MAIN_REA") }} -->
              {{ mapWorkState2 }}
            </div>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.WAVE_LEN") }}（nm）</td>
          <td>{{ infoData.channels[0].link_status.client ? infoData.channels[0].wave_len.client : "NA" }}</td>
          <td>{{ infoData.channels[0].link_status.Pri_Line ? infoData.channels[0].wave_len.Pri_Line : "NA" }}</td>
          <td>{{ infoData.channels[0].link_status.Sec_Line ? infoData.channels[0].wave_len.Sec_Line : "NA" }}</td>
          <td>{{ infoData.channels[1].link_status.client ? infoData.channels[1].wave_len.client : "NA" }}</td>
          <td>{{ infoData.channels[1].link_status.Pri_Line ? infoData.channels[1].wave_len.Pri_Line : "NA" }}</td>
          <td>{{ infoData.channels[1].link_status.Sec_Line ? infoData.channels[1].wave_len.Sec_Line : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.DISTANCE") }}（km）</td>
          <td>{{ infoData.channels[0].link_status.client ? infoData.channels[0].launch_range.client : "NA" }}</td>
          <td>{{ infoData.channels[0].link_status.Pri_Line ? infoData.channels[0].launch_range.Pri_Line : "NA" }}</td>
          <td>{{ infoData.channels[0].link_status.Sec_Line ? infoData.channels[0].launch_range.Sec_Line : "NA" }}</td>
          <td>{{ infoData.channels[1].link_status.client ? infoData.channels[1].launch_range.client : "NA" }}</td>
          <td>{{ infoData.channels[1].link_status.Pri_Line ? infoData.channels[1].launch_range.Pri_Line : "NA" }}</td>
          <td>{{ infoData.channels[1].link_status.Sec_Line ? infoData.channels[1].launch_range.Sec_Line : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.TRANS_OPTICAL_POWER") }}（dBm）</td>
          <td>{{ infoData.channels[0].link_status.client ? infoData.channels[0].launch_power.client : "NA" }}</td>
          <td>{{ infoData.channels[0].link_status.Pri_Line ? infoData.channels[0].launch_power.Pri_Line : "NA" }}</td>
          <td>{{ infoData.channels[0].link_status.Sec_Line ? infoData.channels[0].launch_power.Sec_Line : "NA" }}</td>
          <td>{{ infoData.channels[1].link_status.client ? infoData.channels[1].launch_power.client : "NA" }}</td>
          <td>{{ infoData.channels[1].link_status.Pri_Line ? infoData.channels[1].launch_power.Pri_Line : "NA" }}</td>
          <td>{{ infoData.channels[1].link_status.Sec_Line ? infoData.channels[1].launch_power.Sec_Line : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.RECE_OPTICAL_POWER") }}（dBm）</td>
          <td>{{ infoData.channels[0].link_status.client ? infoData.channels[0].rcv_power.client : "NA" }}</td>
          <td>{{ infoData.channels[0].link_status.Pri_Line ? infoData.channels[0].rcv_power.Pri_Line : "NA" }}</td>
          <td>{{ infoData.channels[0].link_status.Sec_Line ? infoData.channels[0].rcv_power.Sec_Line : "NA" }}</td>
          <td>{{ infoData.channels[1].link_status.client ? infoData.channels[1].rcv_power.client : "NA" }}</td>
          <td>{{ infoData.channels[1].link_status.Pri_Line ? infoData.channels[1].rcv_power.Pri_Line : "NA" }}</td>
          <td>{{ infoData.channels[1].link_status.Sec_Line ? infoData.channels[1].rcv_power.Sec_Line : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.VOLTAGE") }}（V）</td>
          <td>{{ infoData.channels[0].link_status.client ? infoData.channels[0].voltage.client : "NA" }}</td>
          <td>{{ infoData.channels[0].link_status.Pri_Line ? infoData.channels[0].voltage.Pri_Line : "NA" }}</td>
          <td>{{ infoData.channels[0].link_status.Sec_Line ? infoData.channels[0].voltage.Sec_Line : "NA" }}</td>
          <td>{{ infoData.channels[1].link_status.client ? infoData.channels[1].voltage.client : "NA" }}</td>
          <td>{{ infoData.channels[1].link_status.Pri_Line ? infoData.channels[1].voltage.Pri_Line : "NA" }}</td>
          <td>{{ infoData.channels[1].link_status.Sec_Line ? infoData.channels[1].voltage.Sec_Line : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.BIAS_CURRENT") }}（mA）</td>
          <td>{{ infoData.channels[0].link_status.client ? infoData.channels[0].current.client : "NA" }}</td>
          <td>{{ infoData.channels[0].link_status.Pri_Line ? infoData.channels[0].current.Pri_Line : "NA" }}</td>
          <td>{{ infoData.channels[0].link_status.Sec_Line ? infoData.channels[0].current.Sec_Line : "NA" }}</td>
          <td>{{ infoData.channels[1].link_status.client ? infoData.channels[1].current.client : "NA" }}</td>
          <td>{{ infoData.channels[1].link_status.Pri_Line ? infoData.channels[1].current.Pri_Line : "NA" }}</td>
          <td>{{ infoData.channels[1].link_status.Sec_Line ? infoData.channels[1].current.Sec_Line : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.TEMPERATURE") }}（℃）</td>
          <td>{{ infoData.channels[0].link_status.client ? infoData.channels[0].temp.client : "NA" }}</td>
          <td>{{ infoData.channels[0].link_status.Pri_Line ? infoData.channels[0].temp.Pri_Line : "NA" }}</td>
          <td>{{ infoData.channels[0].link_status.Sec_Line ? infoData.channels[0].temp.Sec_Line : "NA" }}</td>
          <td>{{ infoData.channels[1].link_status.client ? infoData.channels[1].temp.client : "NA" }}</td>
          <td>{{ infoData.channels[1].link_status.Pri_Line ? infoData.channels[1].temp.Pri_Line : "NA" }}</td>
          <td>{{ infoData.channels[1].link_status.Sec_Line ? infoData.channels[1].temp.Sec_Line : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.LASER_SWITCH") }}</td>
          <td>
            <select v-if="infoData.channels[0].link_status.client" v-model="infoData.channels[0].tx_disable.client">
              <option :value="1">{{ $t("COMMON.OFF") }}</option>
              <option :value="0">{{ $t("COMMON.ON") }}</option>
            </select>

            <template v-else>NA</template>
          </td>
          <td>
            <select v-if="infoData.channels[0].link_status.Pri_Line" v-model="infoData.channels[0].tx_disable.Pri_Line">
              <option :value="1">{{ $t("COMMON.OFF") }}</option>
              <option :value="0">{{ $t("COMMON.ON") }}</option>
            </select>

            <template v-else>NA</template>
          </td>
          <td>
            <select v-if="infoData.channels[0].link_status.Sec_Line" v-model="infoData.channels[0].tx_disable.Sec_Line">
              <option :value="1">{{ $t("COMMON.OFF") }}</option>
              <option :value="0">{{ $t("COMMON.ON") }}</option>
            </select>

            <template v-else>NA</template>
          </td>
          <td>
            <select v-if="infoData.channels[1].link_status.client" v-model="infoData.channels[1].tx_disable.client">
              <option :value="1">{{ $t("COMMON.OFF") }}</option>
              <option :value="0">{{ $t("COMMON.ON") }}</option>
            </select>

            <template v-else>NA</template>
          </td>
          <td>
            <select v-if="infoData.channels[1].link_status.Pri_Line" v-model="infoData.channels[1].tx_disable.Pri_Line">
              <option :value="1">{{ $t("COMMON.OFF") }}</option>
              <option :value="0">{{ $t("COMMON.ON") }}</option>
            </select>

            <template v-else>NA</template>
          </td>
          <td>
            <select v-if="infoData.channels[1].link_status.Sec_Line" v-model="infoData.channels[1].tx_disable.Sec_Line">
              <option :value="1">{{ $t("COMMON.OFF") }}</option>
              <option :value="0">{{ $t("COMMON.ON") }}</option>
            </select>

            <template v-else>NA</template>
          </td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.SPEED") }}（Mbps）</td>
          <td>
            <div class="coll-3">
              <select v-if="info.bdtype === '10G-OCPL'" v-model="infoData.channels[0].speed">
                <option :value="1">FC(包含2G、4G、8G、10G)</option>
                <option :value="2">CPRIX(X值为2，3，5，7)</option>
                <option :value="3">CPRIX(X值为2，3，5，7，8)</option>
                <option :value="4">OTU1/OTU1e</option>
                <option :value="5">OTU2/OTU2e</option>
                <option :value="6">OTU1f</option>
                <option :value="7">GE/10GE</option>
                <option :value="8">STM-16/STM-64</option>
                <option :value="9">FE/STM-1/STM-4</option>
              </select>

              <select v-else-if="info.bdtype === '10G-OCPH'" v-model="infoData.channels[0].speed">
                <option :value="1">10G FC</option>
                <option :value="2">CPRI2/3/4/5/6/7</option>
                <option :value="3">CPRI2/3/5/7/8</option>
                <option :value="4">OTU1/OTU1e</option>
                <option :value="5">OTU1f/OTU2f</option>
                <option :value="6">OTU2/OTU2e</option>
                <option :value="7">GE/10GE</option>
                <option :value="8">STM-16/STM-64</option>
                <option :value="9">FE/STM-1/STM-4</option>
              </select>
            </div>
          </td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-3">
              <select v-if="info.bdtype === '10G-OCPL'" v-model="infoData.channels[1].speed">
                <option :value="1">FC(包含2G、4G、8G、10G)</option>
                <option :value="2">CPRIX(X值为2，3，5，7)</option>
                <option :value="3">CPRIX(X值为2，3，5，7，8)</option>
                <option :value="4">OTU1/OTU1e</option>
                <option :value="5">OTU2/OTU2e</option>
                <option :value="6">OTU1f</option>
                <option :value="7">GE/10GE</option>
                <option :value="8">STM-16/STM-64</option>
                <option :value="9">FE/STM-1/STM-4</option>
              </select>

              <select v-else-if="info.bdtype === '10G-OCPH'" v-model="infoData.channels[1].speed">
                <option :value="1">10G FC</option>
                <option :value="2">CPRI2/3/4/5/6/7</option>
                <option :value="3">CPRI2/3/5/7/8</option>
                <option :value="4">OTU1/OTU1e</option>
                <option :value="5">OTU1f/OTU2f</option>
                <option :value="6">OTU2/OTU2e</option>
                <option :value="7">GE/10GE</option>
                <option :value="8">STM-16/STM-64</option>
                <option :value="9">FE/STM-1/STM-4</option>
              </select>
            </div>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.INIT_POWER_DIFF_BET_STAND_LINE") }}（dB）</td>
          <td>
            <div class="coll-3">
              <input type="text" class="def-input" v-model.number="infoData.channels[0].init_power" />
            </div>
          </td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-3">
              <input type="text" class="def-input" v-model.number="infoData.channels[1].init_power" />
            </div>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.REVER_COND_DIFF") }}（dB）</td>
          <td>
            <div class="coll-3">
              <custom-select
                v-model="infoData.channels[0].Switch_channel"
                :options="[
                  { label: '3', value: 3 },
                  { label: '4', value: 4 },
                  { label: '5', value: 5 },
                ]"
              />
            </div>
          </td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-3">
              <custom-select
                v-model="infoData.channels[1].Switch_channel"
                :options="[
                  { label: '3', value: 3 },
                  { label: '4', value: 4 },
                  { label: '5', value: 5 },
                ]"
              />
            </div>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.PROTECTED_MODE") }}</td>
          <td>
            <div class="coll-3">
              <select v-model="infoData.channels[0].work_mode">
                <option :value="0">{{ $t("COMMON.AUTO") }}</option>
                <option :value="1">{{ $t("COMMON.MANUAL") }}</option>
              </select>
            </div>
          </td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-3">
              <select v-model="infoData.channels[1].work_mode">
                <option :value="0">{{ $t("COMMON.AUTO") }}</option>
                <option :value="1">{{ $t("COMMON.MANUAL") }}</option>
              </select>
            </div>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.MAN_REA") }}</td>
          <td>
            <div class="coll-3">
              <select :disabled="!infoData.channels[0].work_mode" v-model="infoData.channels[0].Switch">
                <option :value="0">{{ $t("COMMON.MAIN_REA") }}</option>
                <option :value="1">{{ $t("COMMON.PREPARE_REA") }}</option>
              </select>
            </div>
          </td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-3">
              <select :disabled="!infoData.channels[1].work_mode" v-model="infoData.channels[1].Switch">
                <option :value="0">{{ $t("COMMON.MAIN_REA") }}</option>
                <option :value="1">{{ $t("COMMON.PREPARE_REA") }}</option>
              </select>
            </div>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.WHETHER_SWITCH_AUTO") }}</td>
          <td>
            <div class="coll-3">
              <select :disabled="!!infoData.channels[0].work_mode" v-model="infoData.channels[0].enable_back">
                <option :value="0">{{ $t("COMMON.CUT_BACK") }}</option>
                <option :value="1">{{ $t("COMMON.UN_CUT_BACK") }}</option>
              </select>
            </div>
          </td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-3">
              <select :disabled="!!infoData.channels[1].work_mode" v-model="infoData.channels[1].enable_back">
                <option :value="0">{{ $t("COMMON.CUT_BACK") }}</option>
                <option :value="1">{{ $t("COMMON.UN_CUT_BACK") }}</option>
              </select>
            </div>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.WTR_TIME_SWITCH") }}（min）</td>
          <td>
            <div class="coll-3">
              <custom-select
                v-model="infoData.channels[0].enable_back_delay"
                :disabled="!!infoData.channels[0].work_mode || !!infoData.channels[0].enable_back"
                :options="[
                  { label: '5', value: 5 },
                  { label: '10', value: 10 },
                  { label: '15', value: 15 },
                ]"
              />
            </div>
          </td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-3">
              <custom-select
                v-model="infoData.channels[1].enable_back_delay"
                :disabled="!!infoData.channels[1].work_mode || !!infoData.channels[1].enable_back"
                :options="[
                  { label: '5', value: 5 },
                  { label: '10', value: 10 },
                  { label: '15', value: 15 },
                ]"
              />
            </div>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.RECE_LIGHT_POWER_LOWER_THRESHOLD") }}（dBm）</td>
          <td>
            <Limit :min="-18" :max="-10" v-if="infoData.channels[0].link_status.client" v-model="infoData.channels[0].rcv_thr_L.client" />
            <template v-else>NA</template>
          </td>
          <td>
            <Limit :min="-18" :max="-10" v-if="infoData.channels[0].link_status.Pri_Line" v-model="infoData.channels[0].rcv_thr_L.Pri_Line" />
            <template v-else>NA</template>
          </td>
          <td>
            <Limit :min="-18" :max="-10" v-if="infoData.channels[0].link_status.Sec_Line" v-model="infoData.channels[0].rcv_thr_L.Sec_Line" />
            <template v-else>NA</template>
          </td>
          <td>
            <Limit :min="-18" :max="-10" v-if="infoData.channels[1].link_status.client" v-model="infoData.channels[1].rcv_thr_L.client" />
            <template v-else>NA</template>
          </td>
          <td>
            <Limit :min="-18" :max="-10" v-if="infoData.channels[1].link_status.Pri_Line" v-model="infoData.channels[1].rcv_thr_L.Pri_Line" />
            <template v-else>NA</template>
          </td>
          <td>
            <Limit :min="-18" :max="-10" v-if="infoData.channels[1].link_status.Sec_Line" v-model="infoData.channels[1].rcv_thr_L.Sec_Line" />
            <template v-else>NA</template>
          </td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.RECE_LIGHT_POWER_UPPER_THRESHOLD") }}（dBm）</td>
          <td>
            <Limit :min="0" :max="5" v-if="infoData.channels[0].link_status.client" v-model="infoData.channels[0].rcv_thr_H.client" />
            <template v-else>NA</template>
          </td>
          <td>
            <Limit :min="0" :max="5" v-if="infoData.channels[0].link_status.Pri_Line" v-model="infoData.channels[0].rcv_thr_H.Pri_Line" />
            <template v-else>NA</template>
          </td>
          <td>
            <Limit :min="0" :max="5" v-if="infoData.channels[0].link_status.Sec_Line" v-model="infoData.channels[0].rcv_thr_H.Sec_Line" />
            <template v-else>NA</template>
          </td>
          <td>
            <Limit :min="0" :max="5" v-if="infoData.channels[1].link_status.client" v-model="infoData.channels[1].rcv_thr_H.client" />
            <template v-else>NA</template>
          </td>
          <td>
            <Limit :min="0" :max="5" v-if="infoData.channels[1].link_status.Pri_Line" v-model="infoData.channels[1].rcv_thr_H.Pri_Line" />
            <template v-else>NA</template>
          </td>
          <td>
            <Limit :min="0" :max="5" v-if="infoData.channels[1].link_status.Sec_Line" v-model="infoData.channels[1].rcv_thr_H.Sec_Line" />
            <template v-else>NA</template>
          </td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.SEND_LIGHT_POWER_LOWER_THRESHOLD") }}（dBm）</td>
          <td>
            <Limit :min="-8" :max="-5" v-if="infoData.channels[0].link_status.client" v-model="infoData.channels[0].tx_thr_L.client" />
            <template v-else>NA</template>
          </td>
          <td>
            <Limit :min="-8" :max="-5" v-if="infoData.channels[0].link_status.Pri_Line" v-model="infoData.channels[0].tx_thr_L.Pri_Line" />
            <template v-else>NA</template>
          </td>
          <td>
            <Limit :min="-8" :max="-5" v-if="infoData.channels[0].link_status.Sec_Line" v-model="infoData.channels[0].tx_thr_L.Sec_Line" />
            <template v-else>NA</template>
          </td>
          <td>
            <Limit :min="-8" :max="-5" v-if="infoData.channels[1].link_status.client" v-model="infoData.channels[1].tx_thr_L.client" />
            <template v-else>NA</template>
          </td>
          <td>
            <Limit :min="-8" :max="-5" v-if="infoData.channels[1].link_status.Pri_Line" v-model="infoData.channels[1].tx_thr_L.Pri_Line" />
            <template v-else>NA</template>
          </td>
          <td>
            <Limit :min="-8" :max="-5" v-if="infoData.channels[1].link_status.Sec_Line" v-model="infoData.channels[1].tx_thr_L.Sec_Line" />
            <template v-else>NA</template>
          </td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.SEND_LIGHT_POWER_UPPER_THRESHOLD") }}（dBm）</td>
          <td>
            <Limit :min="3" :max="5" v-if="infoData.channels[0].link_status.client" v-model="infoData.channels[0].tx_thr_H.client" />
            <template v-else>NA</template>
          </td>
          <td>
            <Limit :min="3" :max="5" v-if="infoData.channels[0].link_status.Pri_Line" v-model="infoData.channels[0].tx_thr_H.Pri_Line" />
            <template v-else>NA</template>
          </td>
          <td>
            <Limit :min="3" :max="5" v-if="infoData.channels[0].link_status.Sec_Line" v-model="infoData.channels[0].tx_thr_H.Sec_Line" />
            <template v-else>NA</template>
          </td>
          <td>
            <Limit :min="3" :max="5" v-if="infoData.channels[1].link_status.client" v-model="infoData.channels[1].tx_thr_H.client" />
            <template v-else>NA</template>
          </td>
          <td>
            <Limit :min="3" :max="5" v-if="infoData.channels[1].link_status.Pri_Line" v-model="infoData.channels[1].tx_thr_H.Pri_Line" />
            <template v-else>NA</template>
          </td>
          <td>
            <Limit :min="3" :max="5" v-if="infoData.channels[1].link_status.Sec_Line" v-model="infoData.channels[1].tx_thr_H.Sec_Line" />
            <template v-else>NA</template>
          </td>
        </tr>
      </table>
    </div>

    <div class="board-change-btns">
      <button class="def-btn" :disabled="refreshInfoDisabled" @click="refreshGetInfo">{{ $t("COMMON.REFRESH") }}</button>
      <div v-permission="'control'">
        <button class="def-btn" :disabled="setInfoDisabled" @click="setInfo">{{ $t("COMMON.APPLY") }}</button>
        <button class="def-btn" :disabled="restorInfoDisabled" @click="restorInfo">{{ $t("COMMON.RESET") }}</button>
        <button class="def-btn" :disabled="restoreDefaultInfoDisabled" @click="restoreDefaultInfo">{{ $t("COMMON.RESTOR_DEF") }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from "@/utils/mixins";
import CustomSelect from "@/components/custom-select";

export default {
  name: "ocp10g",
  mixins: [mixins],
  components: { CustomSelect },
  data() {
    return {
      infoData: {
        channels: new Array(2).fill({
          channel: 0,
          link_status: {
            client: 0,
            Pri_Line: 0,
            Sec_Line: 0,
          },
          los: {
            client: 0,
            Pri_Line: 0,
            Sec_Line: 0,
          },
          speed: 0,
          init_power: 0,
          Switch_channel: 0,
          Switch: 0,
          work_mode: 0,
          enable_back: 0,
          work_road: 0,
          enable_back_delay: 0,
          atu_to_hand_delay: 0,
          tx_disable: {
            client: 0,
            Pri_Line: 0,
            Sec_Line: 0,
          },
          launch_range: {
            client: 0,
            Pri_Line: 0,
            Sec_Line: 0,
          },
          rcv_thr_H: {
            client: 0,
            Pri_Line: 0,
            Sec_Line: 0,
          },
          rcv_thr_L: {
            client: 0,
            Pri_Line: 0,
            Sec_Line: 0,
          },
          tx_thr_H: {
            client: 0,
            Pri_Line: 0,
            Sec_Line: 0,
          },
          tx_thr_L: {
            client: 0,
            Pri_Line: 0,
            Sec_Line: 0,
          },
          wave_channel: {
            client: 0,
            Pri_Line: 0,
            Sec_Line: 0,
          },
          wave_len: {
            client: "",
            Pri_Line: "",
            Sec_Line: "",
          },
          launch_power: {
            client: "",
            Pri_Line: "",
            Sec_Line: "",
          },
          rcv_power: {
            client: "",
            Pri_Line: "",
            Sec_Line: "",
          },
          voltage: {
            client: "",
            Pri_Line: "",
            Sec_Line: "",
          },
          current: {
            client: "",
            Pri_Line: "",
            Sec_Line: "",
          },
          temp: {
            client: "",
            Pri_Line: "",
            Sec_Line: "",
          },
        }),
      },
    };
  },
  computed: {
    mapWorkState1() {
      try {
        const { client, Pri_Line, Sec_Line } = this.infoData.channels[0].link_status;
        const work_status = this.infoData.channels[0].work_status;

        if (!client || (!Pri_Line && !Sec_Line)) {
          return "NA";
        } else {
          return work_status ? this.$t("COMMON.PREPARE_REA") : this.$t("COMMON.MAIN_REA");
        }
      } catch (error) {
        return "NA";
      }
    },
    mapWorkState2() {
      try {
        const { client, Pri_Line, Sec_Line } = this.infoData.channels[1].link_status;
        const work_status = this.infoData.channels[1].work_status;

        if (!client || (!Pri_Line && !Sec_Line)) {
          return "NA";
        } else {
          return work_status ? this.$t("COMMON.PREPARE_REA") : this.$t("COMMON.MAIN_REA");
        }
      } catch (error) {
        return "NA";
      }
    },
  },
};
</script>
