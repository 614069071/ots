<template>
  <div class="otu25g-cps-wrapper cps-wrapper">
    <div class="board-table-container">
      <table class="board-table" border="1">
        <thead>
          <tr>
            <td></td>
            <td>
              <div class="coll-2">{{ $t("BOARD_INFO.AISLE") }}1</div>
            </td>
            <td></td>
            <td>
              <div class="coll-2">{{ $t("BOARD_INFO.AISLE") }}2</div>
            </td>
            <td></td>
            <td>
              <div class="coll-2">{{ $t("BOARD_INFO.AISLE") }}3</div>
            </td>
            <td></td>
            <td>
              <div class="coll-2">{{ $t("BOARD_INFO.AISLE") }}4</div>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>{{ $t("COMMON.PORT") }}</td>
            <td>Client</td>
            <td>Line</td>
            <td>Client</td>
            <td>Line</td>
            <td>Client</td>
            <td>Line</td>
            <td>Client</td>
            <td>Line</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{{ $t("BOARD_INFO.IN_STATE") }}</td>
            <td>{{ infoData.channels[0].link_status.client ? $t("COMMON.IN_OFFICE") : $t("COMMON.DISLOCATION") }}</td>
            <td>{{ infoData.channels[0].link_status.line ? $t("COMMON.IN_OFFICE") : $t("COMMON.DISLOCATION") }}</td>
            <td>{{ infoData.channels[1].link_status.client ? $t("COMMON.IN_OFFICE") : $t("COMMON.DISLOCATION") }}</td>
            <td>{{ infoData.channels[1].link_status.line ? $t("COMMON.IN_OFFICE") : $t("COMMON.DISLOCATION") }}</td>
            <td>{{ infoData.channels[2].link_status.client ? $t("COMMON.IN_OFFICE") : $t("COMMON.DISLOCATION") }}</td>
            <td>{{ infoData.channels[2].link_status.line ? $t("COMMON.IN_OFFICE") : $t("COMMON.DISLOCATION") }}</td>
            <td>{{ infoData.channels[3].link_status.client ? $t("COMMON.IN_OFFICE") : $t("COMMON.DISLOCATION") }}</td>
            <td>{{ infoData.channels[3].link_status.line ? $t("COMMON.IN_OFFICE") : $t("COMMON.DISLOCATION") }}</td>
          </tr>
          <tr>
            <td>{{ $t("BOARD_INFO.LINK_STATE") }}</td>
            <td>{{ infoData.channels[0].link_status.client ? (infoData.channels[0].los.client ? "DOWN" : "UP") : "NA" }}</td>
            <td>{{ infoData.channels[0].link_status.line ? (infoData.channels[0].los.line ? "DOWN" : "UP") : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.client ? (infoData.channels[1].los.client ? "DOWN" : "UP") : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.line ? (infoData.channels[1].los.line ? "DOWN" : "UP") : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.client ? (infoData.channels[2].los.client ? "DOWN" : "UP") : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.line ? (infoData.channels[2].los.line ? "DOWN" : "UP") : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.client ? (infoData.channels[3].los.client ? "DOWN" : "UP") : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.line ? (infoData.channels[3].los.line ? "DOWN" : "UP") : "NA" }}</td>
          </tr>
          <tr>
            <td>{{ $t("BOARD_INFO.PROPERTY") }}</td>
            <td>{{ infoData.channels[0].link_status.client ? (infoData.channels[0].rw_type.client ? $t("COMMON.READ_WRITE") : $t("COMMON.READ_ONLY")) : "NA" }}</td>
            <td>{{ infoData.channels[0].link_status.line ? (infoData.channels[0].rw_type.line ? $t("COMMON.READ_WRITE") : $t("COMMON.READ_ONLY")) : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.client ? (infoData.channels[1].rw_type.client ? $t("COMMON.READ_WRITE") : $t("COMMON.READ_ONLY")) : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.line ? (infoData.channels[1].rw_type.line ? $t("COMMON.READ_WRITE") : $t("COMMON.READ_ONLY")) : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.client ? (infoData.channels[2].rw_type.client ? $t("COMMON.READ_WRITE") : $t("COMMON.READ_ONLY")) : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.line ? (infoData.channels[2].rw_type.line ? $t("COMMON.READ_WRITE") : $t("COMMON.READ_ONLY")) : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.client ? (infoData.channels[3].rw_type.client ? $t("COMMON.READ_WRITE") : $t("COMMON.READ_ONLY")) : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.line ? (infoData.channels[3].rw_type.line ? $t("COMMON.READ_WRITE") : $t("COMMON.READ_ONLY")) : "NA" }}</td>
          </tr>
          <tr>
            <td>{{ $t("BOARD_INFO.CHANNEL") }}</td>
            <td>NA</td>
            <td>
              <template v-if="infoData.channels[0].link_status.line">
                <input v-if="infoData.channels[0].rw_type.line" class="def-input" type="text" v-model.number="infoData.channels[0].wave_channel.line" />
                <template v-else>{{ infoData.channels[0].wave_channel.line }}</template>
              </template>
              <template v-else>NA</template>
            </td>
            <td>NA</td>
            <td>
              <template v-if="infoData.channels[1].link_status.line">
                <input v-if="infoData.channels[1].rw_type.line" class="def-input" type="text" v-model.number="infoData.channels[1].wave_channel.line" />
                <template v-else>{{ infoData.channels[1].wave_channel.line }}</template>
              </template>
              <template v-else>NA</template>
            </td>
            <td>NA</td>
            <td>
              <template v-if="infoData.channels[2].link_status.line">
                <input v-if="infoData.channels[2].rw_type.line" class="def-input" type="text" v-model.number="infoData.channels[2].wave_channel.line" />
                <template v-else>{{ infoData.channels[2].wave_channel.line }}</template>
              </template>
              <template v-else>NA</template>
            </td>
            <td>NA</td>
            <td>
              <template v-if="infoData.channels[3].link_status.line">
                <input v-if="infoData.channels[3].rw_type.line" class="def-input" type="text" v-model.number="infoData.channels[3].wave_channel.line" />
                <template v-else>{{ infoData.channels[3].wave_channel.line }}</template>
              </template>
              <template v-else>NA</template>
            </td>
          </tr>
          <tr>
            <td>{{ $t("BOARD_INFO.WAVE_LEN") }}（nm）</td>
            <td>{{ infoData.channels[0].link_status.client ? infoData.channels[0].wave_len.client : "NA" }}</td>
            <td>{{ infoData.channels[0].link_status.line ? infoData.channels[0].wave_len.line : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.client ? infoData.channels[1].wave_len.client : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.line ? infoData.channels[1].wave_len.line : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.client ? infoData.channels[2].wave_len.client : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.line ? infoData.channels[2].wave_len.line : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.client ? infoData.channels[3].wave_len.client : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.line ? infoData.channels[3].wave_len.line : "NA" }}</td>
          </tr>
          <tr>
            <td>{{ $t("BOARD_INFO.DISTANCE") }}（km）</td>
            <td>{{ infoData.channels[0].link_status.client ? infoData.channels[0].launch_range.client : "NA" }}</td>
            <td>{{ infoData.channels[0].link_status.line ? infoData.channels[0].launch_range.line : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.client ? infoData.channels[1].launch_range.client : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.line ? infoData.channels[1].launch_range.line : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.client ? infoData.channels[2].launch_range.client : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.line ? infoData.channels[2].launch_range.line : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.client ? infoData.channels[3].launch_range.client : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.line ? infoData.channels[3].launch_range.line : "NA" }}</td>
          </tr>
          <tr>
            <td>{{ $t("BOARD_INFO.TRANS_OPTICAL_POWER") }}（dBm）</td>
            <td>{{ infoData.channels[0].link_status.client ? infoData.channels[0].launch_power.client : "NA" }}</td>
            <td>{{ infoData.channels[0].link_status.line ? infoData.channels[0].launch_power.line : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.client ? infoData.channels[1].launch_power.client : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.line ? infoData.channels[1].launch_power.line : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.client ? infoData.channels[2].launch_power.client : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.line ? infoData.channels[2].launch_power.line : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.client ? infoData.channels[3].launch_power.client : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.line ? infoData.channels[3].launch_power.line : "NA" }}</td>
          </tr>
          <tr>
            <td>{{ $t("BOARD_INFO.RECE_OPTICAL_POWER") }}（dBm）</td>
            <td>{{ infoData.channels[0].link_status.client ? infoData.channels[0].rcv_power.client : "NA" }}</td>
            <td>{{ infoData.channels[0].link_status.line ? infoData.channels[0].rcv_power.line : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.client ? infoData.channels[1].rcv_power.client : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.line ? infoData.channels[1].rcv_power.line : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.client ? infoData.channels[2].rcv_power.client : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.line ? infoData.channels[2].rcv_power.line : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.client ? infoData.channels[3].rcv_power.client : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.line ? infoData.channels[3].rcv_power.line : "NA" }}</td>
          </tr>
          <tr>
            <td>{{ $t("BOARD_INFO.VOLTAGE") }}（V）</td>
            <td>{{ infoData.channels[0].link_status.client ? infoData.channels[0].voltage.client : "NA" }}</td>
            <td>{{ infoData.channels[0].link_status.line ? infoData.channels[0].voltage.line : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.client ? infoData.channels[1].voltage.client : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.line ? infoData.channels[1].voltage.line : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.client ? infoData.channels[2].voltage.client : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.line ? infoData.channels[2].voltage.line : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.client ? infoData.channels[3].voltage.client : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.line ? infoData.channels[3].voltage.line : "NA" }}</td>
          </tr>

          <tr>
            <td>{{ $t("BOARD_INFO.BIAS_CURRENT") }}（dBm）</td>
            <td>{{ infoData.channels[0].link_status.client ? infoData.channels[0].current.client : "NA" }}</td>
            <td>{{ infoData.channels[0].link_status.line ? infoData.channels[0].current.line : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.client ? infoData.channels[1].current.client : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.line ? infoData.channels[1].current.line : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.client ? infoData.channels[2].current.client : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.line ? infoData.channels[2].current.line : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.client ? infoData.channels[3].current.client : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.line ? infoData.channels[3].current.line : "NA" }}</td>
          </tr>
          <tr>
            <td>{{ $t("BOARD_INFO.TEMPERATURE") }}（℃）</td>
            <td>{{ infoData.channels[0].link_status.client ? infoData.channels[0].temp.client : "NA" }}</td>
            <td>{{ infoData.channels[0].link_status.line ? infoData.channels[0].temp.line : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.client ? infoData.channels[1].temp.client : "NA" }}</td>
            <td>{{ infoData.channels[1].link_status.line ? infoData.channels[1].temp.line : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.client ? infoData.channels[2].temp.client : "NA" }}</td>
            <td>{{ infoData.channels[2].link_status.line ? infoData.channels[2].temp.line : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.client ? infoData.channels[3].temp.client : "NA" }}</td>
            <td>{{ infoData.channels[3].link_status.line ? infoData.channels[3].temp.line : "NA" }}</td>
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
              <select v-if="infoData.channels[0].link_status.line" v-model="infoData.channels[0].tx_disable.line">
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
              <select v-if="infoData.channels[1].link_status.line" v-model="infoData.channels[1].tx_disable.line">
                <option :value="1">{{ $t("COMMON.OFF") }}</option>
                <option :value="0">{{ $t("COMMON.ON") }}</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[2].link_status.client" v-model="infoData.channels[2].tx_disable.client">
                <option :value="1">{{ $t("COMMON.OFF") }}</option>
                <option :value="0">{{ $t("COMMON.ON") }}</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[2].link_status.line" v-model="infoData.channels[2].tx_disable.line">
                <option :value="1">{{ $t("COMMON.OFF") }}</option>
                <option :value="0">{{ $t("COMMON.ON") }}</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[3].link_status.client" v-model="infoData.channels[3].tx_disable.client">
                <option :value="1">{{ $t("COMMON.OFF") }}</option>
                <option :value="0">{{ $t("COMMON.ON") }}</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[3].link_status.line" v-model="infoData.channels[3].tx_disable.line">
                <option :value="1">{{ $t("COMMON.OFF") }}</option>
                <option :value="0">{{ $t("COMMON.ON") }}</option>
              </select>

              <template v-else>NA</template>
            </td>
          </tr>
          <tr class="prbs-tr">
            <td>{{ $t("BOARD_INFO.ERROR_DETECTION") }}</td>
            <td>
              <div v-if="infoData.channels[0].link_status.client">
                <button class="def-btn" :disabled="detection[0]['client']" @click="detectionPrbs(0, 'client')">
                  {{ infoData.channels[0].prbs_en.client ? $t("COMMON.STOP") : $t("COMMON.START") }}
                </button>
                <span>{{ $t("COMMON.RESULT") }}：{{ detection[0].clientEnd ? (infoData.channels[0].prbs.client ? "有误码" : "无误码") : "" }}</span>
              </div>

              <template v-else>NA</template>
            </td>
            <td>
              <div v-if="infoData.channels[0].link_status.line">
                <button class="def-btn" :disabled="detection[0]['line']" @click="detectionPrbs(0, 'line')">{{ infoData.channels[0].prbs_en.line ? $t("COMMON.STOP") : $t("COMMON.START") }}</button>
                <span>{{ $t("COMMON.RESULT") }}：{{ detection[0].lineEnd ? (infoData.channels[0].prbs.line ? "有误码" : "无误码") : "" }}</span>
              </div>

              <template v-else>NA</template>
            </td>
            <td>
              <div v-if="infoData.channels[1].link_status.client">
                <button class="def-btn" :disabled="detection[1]['client']" @click="detectionPrbs(1, 'client')">
                  {{ infoData.channels[1].prbs_en.client ? $t("COMMON.STOP") : $t("COMMON.START") }}
                </button>
                <span>{{ $t("COMMON.RESULT") }}：{{ detection[1].clientEnd ? (infoData.channels[1].prbs.client ? "有误码" : "无误码") : "" }}</span>
              </div>

              <template v-else>NA</template>
            </td>
            <td>
              <div v-if="infoData.channels[1].link_status.line">
                <button class="def-btn" :disabled="detection[1]['line']" @click="detectionPrbs(1, 'line')">{{ infoData.channels[1].prbs_en.line ? $t("COMMON.STOP") : $t("COMMON.START") }}</button>
                <span>{{ $t("COMMON.RESULT") }}：{{ detection[1].lineEnd ? (infoData.channels[1].prbs.client ? "有误码" : "无误码") : "" }}</span>
              </div>

              <template v-else>NA</template>
            </td>
            <td>
              <div v-if="infoData.channels[2].link_status.client">
                <button class="def-btn" :disabled="detection[2]['client']" @click="detectionPrbs(2, 'client')">
                  {{ infoData.channels[2].prbs_en.client ? $t("COMMON.STOP") : $t("COMMON.START") }}
                </button>
                <span>{{ $t("COMMON.RESULT") }}：{{ detection[2].clientEnd ? (infoData.channels[2].prbs.client ? "有误码" : "无误码") : "" }}</span>
              </div>

              <template v-else>NA</template>
            </td>
            <td>
              <div v-if="infoData.channels[2].link_status.line">
                <button class="def-btn" :disabled="detection[2]['line']" @click="detectionPrbs(2, 'line')">{{ infoData.channels[2].prbs_en.line ? $t("COMMON.STOP") : $t("COMMON.START") }}</button>
                <span>{{ $t("COMMON.RESULT") }}：{{ detection[2].lineEnd ? (infoData.channels[2].prbs.client ? "有误码" : "无误码") : "" }}</span>
              </div>

              <template v-else>NA</template>
            </td>
            <td>
              <div v-if="infoData.channels[3].link_status.client">
                <button class="def-btn" :disabled="detection[3]['client']" @click="detectionPrbs(3, 'client')">
                  {{ infoData.channels[3].prbs_en.client ? $t("COMMON.STOP") : $t("COMMON.START") }}
                </button>
                <span>{{ $t("COMMON.RESULT") }}：{{ detection[3].clientEnd ? (infoData.channels[3].prbs.client ? "有误码" : "无误码") : "" }}</span>
              </div>

              <template v-else>NA</template>
            </td>
            <td>
              <div v-if="infoData.channels[3].link_status.line">
                <button class="def-btn" :disabled="detection[3]['line']" @click="detectionPrbs(3, 'line')">{{ infoData.channels[3].prbs_en.line ? $t("COMMON.STOP") : $t("COMMON.START") }}</button>
                <span>{{ $t("COMMON.RESULT") }}：{{ detection[3].lineEnd ? (infoData.channels[3].prbs.client ? "有误码" : "无误码") : "" }}</span>
              </div>

              <template v-else>NA</template>
            </td>
          </tr>
          <tr>
            <td>{{ $t("BOARD_INFO.SPEED") }}</td>
            <td>
              <div class="coll-2">
                <select v-if="info.bdtype === '25G-OTUL'" v-model="infoData.channels[0].speed">
                  <option :value="1">eCPRI-25GE</option>
                  <option :value="0">Other</option>
                </select>

                <select v-else v-model="infoData.channels[0].speed">
                  <option :value="1">25GE-28GE</option>
                  <option :value="0">Other</option>
                </select>
              </div>
            </td>
            <td></td>
            <td>
              <div class="coll-2">
                <select v-if="info.bdtype === '25G-OTUL'" v-model="infoData.channels[1].speed">
                  <option :value="1">eCPRI-25GE</option>
                  <option :value="0">Other</option>
                </select>
                <select v-else v-model="infoData.channels[1].speed">
                  <option :value="1">25GE-28GE</option>
                  <option :value="0">Other</option>
                </select>
              </div>
            </td>
            <td></td>
            <td>
              <div class="coll-2">
                <select v-if="info.bdtype === '25G-OTUL'" v-model="infoData.channels[2].speed">
                  <option :value="1">eCPRI-25GE</option>
                  <option :value="0">Other</option>
                </select>
                <select v-else v-model="infoData.channels[2].speed">
                  <option :value="1">25GE-28GE</option>
                  <option :value="0">Other</option>
                </select>
              </div>
            </td>
            <td></td>
            <td>
              <div class="coll-2">
                <select v-if="info.bdtype === '25G-OTUL'" v-model="infoData.channels[3].speed">
                  <option :value="1">eCPRI-25GE</option>
                  <option :value="0">Other</option>
                </select>
                <select v-else v-model="infoData.channels[3].speed">
                  <option :value="1">25GE-28GE</option>
                  <option :value="0">Other</option>
                </select>
              </div>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>{{ $t("BOARD_INFO.ENTER_EQ") }}（dB）</td>
            <td>
              <select v-if="infoData.channels[0].link_status.client" v-model="infoData.channels[0].input_eq.client">
                <option v-for="item in eqoptions" :key="item.value" :value="item.value">{{ item.lable }}</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[0].link_status.line" v-model="infoData.channels[0].input_eq.line">
                <option v-for="item in eqoptions" :key="item.value" :value="item.value">{{ item.lable }}</option>
              </select>

              <template v-else>NA</template>
            </td>

            <td>
              <select v-if="infoData.channels[1].link_status.client" v-model="infoData.channels[1].input_eq.client">
                <option v-for="item in eqoptions" :key="item.value" :value="item.value">{{ item.lable }}</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[1].link_status.line" v-model="infoData.channels[1].input_eq.line">
                <option v-for="item in eqoptions" :key="item.value" :value="item.value">{{ item.lable }}</option>
              </select>

              <template v-else>NA</template>
            </td>

            <td>
              <select v-if="infoData.channels[2].link_status.client" v-model="infoData.channels[2].input_eq.client">
                <option v-for="item in eqoptions" :key="item.value" :value="item.value">{{ item.lable }}</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[2].link_status.line" v-model="infoData.channels[2].input_eq.line">
                <option v-for="item in eqoptions" :key="item.value" :value="item.value">{{ item.lable }}</option>
              </select>

              <template v-else>NA</template>
            </td>

            <td>
              <select v-if="infoData.channels[3].link_status.client" v-model="infoData.channels[3].input_eq.client">
                <option v-for="item in eqoptions" :key="item.value" :value="item.value">{{ item.lable }}</option>
              </select>

              <template v-else>NA</template>
            </td>
            <td>
              <select v-if="infoData.channels[3].link_status.line" v-model="infoData.channels[3].input_eq.line">
                <option v-for="item in eqoptions" :key="item.value" :value="item.value">{{ item.lable }}</option>
              </select>

              <template v-else>NA</template>
            </td>
          </tr>
          <tr>
            <td>{{ $t("BOARD_INFO.OUTPU_AMP") }}（mVpp）</td>
            <td>
              <Limit v-if="infoData.channels[0].link_status.client" :min="400" :max="900" v-model="infoData.channels[0].output_amplitude.client" />
              <!-- <el-input-number v-if="infoData.channels[0].link_status.client" v-model.number="infoData.channels[0].output_amplitude.client" size="mini" :min="400" :max="900" :step="5" step-strictly /> -->
              <template v-else>NA</template>
            </td>
            <td>
              <Limit v-if="infoData.channels[0].link_status.line" :min="400" :max="900" v-model="infoData.channels[0].output_amplitude.line" />

              <!-- <el-input-number v-if="infoData.channels[0].link_status.line" v-model.number="infoData.channels[0].output_amplitude.line" size="mini" :min="400" :max="900" :step="5" step-strictly /> -->
              <template v-else>NA</template>
            </td>
            <td>
              <Limit v-if="infoData.channels[1].link_status.client" :min="400" :max="900" v-model="infoData.channels[1].output_amplitude.client" />
              <!-- <el-input-number v-if="infoData.channels[1].link_status.client" v-model.number="infoData.channels[1].output_amplitude.client" size="mini" :min="400" :max="900" :step="5" step-strictly /> -->
              <template v-else>NA</template>
            </td>
            <td>
              <Limit v-if="infoData.channels[1].link_status.line" :min="400" :max="900" v-model="infoData.channels[1].output_amplitude.line" />

              <!-- <el-input-number v-if="infoData.channels[1].link_status.line" v-model.number="infoData.channels[1].output_amplitude.line" size="mini" :min="400" :max="900" :step="5" step-strictly /> -->
              <template v-else>NA</template>
            </td>
            <td>
              <Limit v-if="infoData.channels[2].link_status.client" :min="400" :max="900" v-model="infoData.channels[2].output_amplitude.client" />

              <!-- <el-input-number v-if="infoData.channels[2].link_status.client" v-model.number="infoData.channels[2].output_amplitude.client" size="mini" :min="400" :max="900" :step="5" step-strictly /> -->
              <template v-else>NA</template>
            </td>
            <td>
              <Limit v-if="infoData.channels[2].link_status.line" :min="400" :max="900" v-model="infoData.channels[2].output_amplitude.line" />

              <!-- <el-input-number v-if="infoData.channels[2].link_status.line" v-model.number="infoData.channels[2].output_amplitude.line" size="mini" :min="400" :max="900" :step="5" step-strictly /> -->
              <template v-else>NA</template>
            </td>
            <td>
              <Limit v-if="infoData.channels[3].link_status.client" :min="400" :max="900" v-model="infoData.channels[3].output_amplitude.client" />

              <!-- <el-input-number v-if="infoData.channels[3].link_status.client" v-model.number="infoData.channels[3].output_amplitude.client" size="mini" :min="400" :max="900" :step="5" step-strictly /> -->
              <template v-else>NA</template>
            </td>
            <td>
              <Limit v-if="infoData.channels[3].link_status.line" :min="400" :max="900" v-model="infoData.channels[3].output_amplitude.line" />

              <!-- <el-input-number v-if="infoData.channels[3].link_status.line" v-model.number="infoData.channels[3].output_amplitude.line" size="mini" :min="400" :max="900" :step="5" step-strictly /> -->
              <template v-else>NA</template>
            </td>
          </tr>
          <tr>
            <td>{{ $t("BOARD_INFO.RECE_LIGHT_POWER_LOWER_THRESHOLD") }}（dBm）</td>
            <td>
              <input v-if="infoData.channels[0].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[0].rcv_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[0].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[0].rcv_thr_L.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[1].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[1].rcv_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[1].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[1].rcv_thr_L.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[2].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[2].rcv_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[2].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[2].rcv_thr_L.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[3].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[3].rcv_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[3].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[3].rcv_thr_L.line" />
              <template v-else>NA</template>
            </td>
          </tr>
          <tr>
            <td>{{ $t("BOARD_INFO.RECE_LIGHT_POWER_UPPER_THRESHOLD") }}（dBm）</td>
            <td>
              <input v-if="infoData.channels[0].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[0].rcv_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[0].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[0].rcv_thr_H.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[1].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[1].rcv_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[1].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[1].rcv_thr_H.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[2].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[2].rcv_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[2].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[2].rcv_thr_H.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[3].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[3].rcv_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[3].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[3].rcv_thr_H.line" />
              <template v-else>NA</template>
            </td>
          </tr>
          <tr>
            <td>{{ $t("BOARD_INFO.SEND_LIGHT_POWER_UPPER_THRESHOLD") }}（dBm）</td>
            <td>
              <input v-if="infoData.channels[0].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[0].tx_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[0].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[0].tx_thr_H.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[1].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[1].tx_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[1].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[1].tx_thr_H.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[2].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[2].tx_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[2].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[2].tx_thr_H.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[3].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[3].tx_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[3].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[3].tx_thr_H.line" />
              <template v-else>NA</template>
            </td>
          </tr>
          <tr>
            <td>{{ $t("BOARD_INFO.SEND_LIGHT_POWER_LOWER_THRESHOLD") }}（dBm）</td>
            <td>
              <input v-if="infoData.channels[0].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[0].tx_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[0].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[0].tx_thr_L.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[1].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[1].tx_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[1].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[1].tx_thr_L.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[2].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[2].tx_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[2].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[2].tx_thr_L.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[3].link_status.client" type="text" class="def-input" v-model.number="infoData.channels[3].tx_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <input v-if="infoData.channels[3].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[3].tx_thr_L.line" />
              <template v-else>NA</template>
            </td>
          </tr>
        </tbody>
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

export default {
  name: "otu25g",
  mixins: [mixins],
  data() {
    return {
      eqoptions: Object.freeze([
        { value: 1, lable: 0 },
        { value: 2, lable: 0.6 },
        { value: 3, lable: 1.2 },
        { value: 4, lable: 1.8 },
        { value: 5, lable: 2.4 },
        { value: 6, lable: 3.0 },
        { value: 7, lable: 3.6 },
        { value: 8, lable: 4.2 },
        { value: 9, lable: 4.8 },
        { value: 10, lable: 5.4 },
        { value: 11, lable: 6.0 },
        { value: 12, lable: 6.6 },
        { value: 13, lable: 7.2 },
        { value: 14, lable: 7.8 },
        { value: 15, lable: 8.4 },
        { value: 16, lable: 9.0 },
        { value: 17, lable: 9.6 },
        { value: 18, lable: 10.2 },
        { value: 19, lable: 10.8 },
        { value: 20, lable: 11.4 },
        { value: 21, lable: 12.0 },
        { value: 255, lable: "自适应" },
      ]),
      infoData: {
        channels: new Array(4).fill({
          channel: 0,
          link_status: {
            client: null,
            line: null,
          },
          los: {
            client: null,
            line: null,
          },
          speed: null,
          freq: {
            client: null,
            line: null,
          },
          wave_len: {
            client: null,
            line: null,
          },
          launch_power: {
            client: null,
            line: null,
          },
          rcv_power: {
            client: null,
            line: null,
          },
          rcv_thr: {
            client: null,
            line: null,
          },
          voltage: {
            client: null,
            line: null,
          },
          current: {
            client: null,
            line: null,
          },
          temp: {
            client: null,
            line: null,
          },
          launch_range: {
            client: 10,
            line: 10,
          },
          rw_type: {
            client: null,
            line: null,
          },
          tx_disable: {
            client: false,
            line: false,
          },
          rcv_thr_H: {
            client: null,
            line: null,
          },
          rcv_thr_L: {
            client: null,
            line: null,
          },
          tx_thr_H: {
            client: null,
            line: null,
          },
          tx_thr_L: {
            client: null,
            line: null,
          },
          wave_channel: {
            client: null,
            line: null,
          },
        }),
      },
      detection: [
        { client: false, line: false, clientEnd: false, lineEnd: false },
        { client: false, line: false, clientEnd: false, lineEnd: false },
        { client: false, line: false, clientEnd: false, lineEnd: false },
        { client: false, line: false, clientEnd: false, lineEnd: false },
      ],
    };
  },
  methods: {
    // $t('BOARD_INFO.ERROR_DETECTION')
    detectionPrbs(i, status) {
      const val = (this.infoData.channels[i].prbs_en[status] + 1) % 2;
      this.infoData.channels[i].prbs_en[status] = val;

      const { boardname, slot } = this.info;
      const diffData = this.$difference(this.infoData, this.clonData);
      const data = { otn2000: { ...diffData, type: "post_info", boardname, slot } };

      this.setInfoDisabled = true;
      this.detection[i][`${status}End`] = false;
      this.detection[i][status] = true;

      this.$http
        .post(data)
        .then(res => {
          console.log("setInfos", res);

          this.setInfoDisabled = false;
          this.detection[i][status] = false;

          if (!val) {
            // 停止检测并获取状态
            console.log("停止检测", val);
            this.getInfo()
              .then(() => {
                this.detection[i][`${status}End`] = true;
                alert(this.$t("COMMON.SUCCESS"));
              })
              .catch(() => {
                this.detection[i][`${status}End`] = true;
                alert(this.$t("COMMON.FAIL"));
              });
          } else {
            this.detection[i][`${status}End`] = false;
            this.detection[i][status] = false;
          }
        })
        .catch(err => {
          console.log(err);
          alert(this.$t("COMMON.FAIL"));
          this.setInfoDisabled = false;
        });
    },
  },
};
</script>

<style lang="scss">
.otu25g-cps-wrapper {
  .el-input-number--mini {
    width: 100px;
  }

  .el-input-number__decrease,
  .el-input-number__increase {
    width: 18px;
  }
}

.prbs-tr .def-btn + .def-btn {
  margin-left: 0;
}
</style>
