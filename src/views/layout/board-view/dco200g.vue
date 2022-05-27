<template>
  <div class="otucfpdco200g-cps-wrapper cps-wrapper">
    <div class="board-table-container">
      <table class="board-table" border="1">
        <thead>
          <tr>
            <td></td>
            <td>
              <div class="coll-4">QSFP28 {{ $t("BOARD_INFO.MODULE") }} 1</div>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div class="coll-4">QSFP28 {{ $t("BOARD_INFO.MODULE") }} 2</div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>{{ $t("BOARD_INFO.AISLE") }}</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
        </thead>

        <tr>
          <td>{{ $t("BOARD_INFO.IN_STATE") }}</td>
          <td>
            <div class="coll-4">{{ infoData.QSFP1.link_status ? $t("COMMON.IN_OFFICE") : $t("COMMON.DISLOCATION") }}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">{{ infoData.QSFP2.link_status ? $t("COMMON.IN_OFFICE") : $t("COMMON.DISLOCATION") }}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.LINK_STATE") }}</td>
          <td>{{ infoData.QSFP1.link_status ? (infoData.QSFP1.channel1.los ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? (infoData.QSFP1.channel2.los ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? (infoData.QSFP1.channel3.los ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? (infoData.QSFP1.channel4.los ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? (infoData.QSFP2.channel1.los ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? (infoData.QSFP2.channel2.los ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? (infoData.QSFP2.channel3.los ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? (infoData.QSFP2.channel4.los ? "DOWN" : "UP") : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.DISTANCE") }}（km）</td>
          <td>
            <div class="coll-4">{{ infoData.QSFP1.link_status ? infoData.QSFP1.launch_range : "NA" }}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">{{ infoData.QSFP2.link_status ? infoData.QSFP2.launch_range : "NA" }}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.WAVE_LEN") }}（nm）</td>
          <td>
            <div class="coll-4">{{ infoData.QSFP1.link_status ? infoData.QSFP1.wave_len : "NA" }}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">{{ infoData.QSFP2.link_status ? infoData.QSFP2.wave_len : "NA" }}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.TRANS_OPTICAL_POWER") }}（dBm）</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel1.launch_power : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel2.launch_power : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel3.launch_power : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel4.launch_power : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel1.launch_power : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel2.launch_power : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel3.launch_power : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel4.launch_power : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.RECE_OPTICAL_POWER") }}（dBm）</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel1.rcv_power : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel2.rcv_power : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel3.rcv_power : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel4.rcv_power : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel1.rcv_power : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel2.rcv_power : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel3.rcv_power : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel4.rcv_power : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.BIAS_CURRENT") }}（mA）</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel1.current : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel2.current : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel3.current : "NA" }}</td>
          <td>{{ infoData.QSFP1.link_status ? infoData.QSFP1.channel4.current : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel1.current : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel2.current : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel3.current : "NA" }}</td>
          <td>{{ infoData.QSFP2.link_status ? infoData.QSFP2.channel4.current : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.VOLTAGE") }}（V）</td>
          <td>
            <div class="coll-4">{{ infoData.QSFP1.link_status ? infoData.QSFP1.voltage : "NA" }}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">{{ infoData.QSFP2.link_status ? infoData.QSFP2.voltage : "NA" }}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.TEMPERATURE") }}（℃）</td>
          <td>
            <div class="coll-4">{{ infoData.QSFP1.link_status ? infoData.QSFP1.temp : "NA" }}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">{{ infoData.QSFP2.link_status ? infoData.QSFP2.temp : "NA" }}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.BUS_TYPE") }}</td>
          <td>
            <div class="coll-4">
              <select v-if="infoData.QSFP1.link_status" v-model="infoData.QSFP1.Business_type" @change="changeBusTypeQsfp1">
                <option :value="0">100GE</option>
                <option :value="1">OTU4.4</option>
              </select>

              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">
              <select v-if="infoData.QSFP2.link_status" v-model="infoData.QSFP2.Business_type" @change="changeBusTypeQsfp2">
                <option :value="0">100GE</option>
                <option :value="1">OTU4.4</option>
              </select>

              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>FEC{{ $t("BOARD_INFO.MODEL") }}</td>
          <td>
            <div class="coll-4">
              <select v-if="infoData.QSFP1.link_status" :disabled="infoData.QSFP1.Business_type === 1" v-model="infoData.QSFP1.FEC_mode" @change="changeModeQsfp1">
                <option :value="0">{{ $t("COMMON.NO") }}</option>
                <option :value="1">GFEC</option>
              </select>

              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">
              <select v-if="infoData.QSFP2.link_status" :disabled="infoData.QSFP2.Business_type === 1" v-model="infoData.QSFP2.FEC_mode" @change="changeModeQsfp2">
                <option :value="0">{{ $t("COMMON.NO") }}</option>
                <option :value="1">GFEC</option>
              </select>

              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.LASER_SWITCH") }}</td>
          <td>
            <div class="coll-4">
              <select v-if="infoData.QSFP1.link_status" v-model="infoData.QSFP1.tx_disable">
                <option :value="1">关</option>
                <option :value="0">开</option>
              </select>

              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">
              <select v-if="infoData.QSFP2.link_status" v-model="infoData.QSFP2.tx_disable">
                <option :value="1">关</option>
                <option :value="0">开</option>
              </select>

              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.RECE_LIGHT_POWER_LOWER_THRESHOLD") }}（dBm）</td>
          <td>
            <div class="coll-4">
              <Limit v-if="infoData.QSFP1.link_status" :min="-12" :max="3" v-model="infoData.QSFP1.rcv_thr_L" :check.sync="validate.QSFP1.rcv_thr_L" />

              <!-- <input v-if="infoData.QSFP1.link_status" type="text" class="def-input" v-model.number="infoData.QSFP1.rcv_thr_L" /> -->
              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">
              <Limit v-if="infoData.QSFP2.link_status" :min="-12" :max="3" v-model="infoData.QSFP2.rcv_thr_L" :check.sync="validate.QSFP2.rcv_thr_L" />
              <!-- <input v-if="infoData.QSFP2.link_status" type="text" class="def-input" v-model.number="infoData.QSFP2.rcv_thr_L" /> -->
              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.RECE_LIGHT_POWER_UPPER_THRESHOLD") }}（dBm）</td>
          <td>
            <div class="coll-4">
              <Limit v-if="infoData.QSFP1.link_status" :min="-12" :max="3" v-model="infoData.QSFP1.rcv_thr_H" :check.sync="validate.QSFP1.rcv_thr_H" />
              <!-- <input v-if="infoData.QSFP1.link_status" type="text" class="def-input" v-model.number="infoData.QSFP1.rcv_thr_H" /> -->
              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">
              <Limit v-if="infoData.QSFP2.link_status" :min="-12" :max="3" v-model="infoData.QSFP2.rcv_thr_H" :check.sync="validate.QSFP2.rcv_thr_H" />
              <!-- <input v-if="infoData.QSFP2.link_status" type="text" class="def-input" v-model.number="infoData.QSFP2.rcv_thr_H" /> -->
              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.SEND_LIGHT_POWER_LOWER_THRESHOLD") }}（dBm）</td>
          <td>
            <div class="coll-4">
              <Limit v-if="infoData.QSFP1.link_status" :min="-7" :max="3" v-model="infoData.QSFP1.tx_thr_L" :check.sync="validate.QSFP1.tx_thr_L" />
              <!-- <input v-if="infoData.QSFP1.link_status" type="text" class="def-input" v-model.number="infoData.QSFP1.tx_thr_L" /> -->
              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">
              <Limit v-if="infoData.QSFP2.link_status" :min="-7" :max="3" v-model="infoData.QSFP2.tx_thr_L" :check.sync="validate.QSFP2.tx_thr_L" />
              <!-- <input v-if="infoData.QSFP2.link_status" type="text" class="def-input" v-model.number="infoData.QSFP2.tx_thr_L" /> -->
              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.SEND_LIGHT_POWER_UPPER_THRESHOLD") }}（dBm）</td>
          <td>
            <div class="coll-4">
              <Limit v-if="infoData.QSFP1.link_status" :min="-7" :max="3" v-model="infoData.QSFP1.tx_thr_H" :check.sync="validate.QSFP1.tx_thr_H" />
              <!-- <input v-if="infoData.QSFP1.link_status" type="text" class="def-input" v-model.number="infoData.QSFP1.tx_thr_H" /> -->
              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">
              <Limit v-if="infoData.QSFP2.link_status" :min="-7" :max="3" v-model="infoData.QSFP2.tx_thr_H" :check.sync="validate.QSFP2.tx_thr_H" />
              <!-- <input v-if="infoData.QSFP2.link_status" type="text" class="def-input" v-model.number="infoData.QSFP2.tx_thr_H" /> -->
              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>

      <div class="cfp2-title">CFP2</div>

      <table class="board-table board-title-table board-cfp2-table" border="1">
        <tr>
          <td>{{ $t("BOARD_INFO.IN_STATE") }}</td>
          <td>{{ infoData.CFP2.link_status ? $t("COMMON.IN_OFFICE") : $t("COMMON.DISLOCATION") }}</td>
          <!-- 新增字段 待设备添加 -->
          <td>CFP2 {{ $t("COMMON.STATUS") }}</td>
          <td>
            <template v-if="infoData.CFP2.link_status">
              {{ infoData.CFP2.cfp2_states | mapCfpState }}
            </template>
            <template v-else>NA</template>
            <!-- 初始化状态 低功耗状态 高功耗打开状态 高功耗关闭状态 发送禁止状态 发送打开状态 发送关闭状态 失效状态 Ready状态 -->
          </td>
          <!-- 新增字段 待设备添加 -->
          <td>OSNR(dB)</td>
          <td>{{ infoData.CFP2.link_status ? infoData.CFP2.signal_bit : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.TRANS_OPTICAL_POWER") }}（dBm)</td>
          <td>
            <Limit v-if="infoData.CFP2.link_status" :min="-8" :max="5" :disabled="cfp2Disable" v-model="infoData.CFP2.launch_power" :check.sync="validate.CFP2.launch_power" />
            <template v-else>NA</template>
            <!-- <input v-if="infoData.CFP2.link_status" type="text" class="def-input" v-model.number="infoData.CFP2.launch_power" /><template v-else>NA</template> -->
          </td>
          <td>{{ $t("BOARD_INFO.RECE_OPTICAL_POWER") }}（dBm)</td>
          <td>{{ infoData.CFP2.link_status ? infoData.CFP2.rcv_power : "NA" }}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.TEMPERATURE") }}（℃)</td>
          <td>{{ infoData.CFP2.link_status ? infoData.CFP2.temp : "NA" }}</td>
          <td>{{ $t("BOARD_INFO.VOLTAGE") }}（V)</td>
          <td>{{ infoData.CFP2.link_status ? infoData.CFP2.voltage : "NA" }}</td>
          <td>{{ $t("BOARD_INFO.BIAS_CURRENT") }}（mA)</td>
          <td>{{ infoData.CFP2.link_status ? infoData.CFP2.current : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.RECE_LIGHT_POWER_LOWER_THRESHOLD") }}（dBm)</td>
          <td>
            <Limit v-if="infoData.CFP2.link_status" :min="-23" :max="8" :disabled="cfp2Disable" v-model="infoData.CFP2.rcv_thr_L" :check.sync="validate.CFP2.rcv_thr_L" />
            <!-- <input v-if="infoData.CFP2.link_status" type="text" class="def-input" v-model.number="infoData.CFP2.rcv_thr_L" /> -->
            <template v-else>NA</template>
          </td>
          <td>{{ $t("BOARD_INFO.RECE_LIGHT_POWER_UPPER_THRESHOLD") }}（dBm)</td>
          <td>
            <Limit v-if="infoData.CFP2.link_status" :min="-23" :max="8" :disabled="cfp2Disable" v-model="infoData.CFP2.rcv_thr_H" :check.sync="validate.CFP2.rcv_thr_H" />
            <!-- <input v-if="infoData.CFP2.link_status" type="text" class="def-input" v-model.number="infoData.CFP2.rcv_thr_H" /> -->
            <template v-else>NA</template>
          </td>
          <td>{{ $t("BOARD_INFO.SEND_LIGHT_POWER_LOWER_THRESHOLD") }}（dBm)</td>
          <td>
            <Limit v-if="infoData.CFP2.link_status" :min="-8" :max="6" :disabled="cfp2Disable" v-model="infoData.CFP2.tx_thr_L" :check.sync="validate.CFP2.tx_thr_L" />
            <!-- <input v-if="infoData.CFP2.link_status" type="text" class="def-input" v-model.number="infoData.CFP2.tx_thr_L" /> -->
            <template v-else>NA</template>
          </td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.SEND_LIGHT_POWER_UPPER_THRESHOLD") }}（dBm)</td>
          <td>
            <Limit v-if="infoData.CFP2.link_status" :min="-8" :max="6" :disabled="cfp2Disable" v-model="infoData.CFP2.tx_thr_H" :check.sync="validate.CFP2.tx_thr_H" />
            <!-- <input v-if="infoData.CFP2.link_status" type="text" class="def-input" v-model.number="infoData.CFP2.tx_thr_H" /> -->
            <template v-else>NA</template>
          </td>
          <td>{{ $t("BOARD_INFO.LASER_SWITCH") }}</td>
          <td>
            <select v-if="infoData.CFP2.link_status" :disabled="cfp2Disable" v-model="infoData.CFP2.tx_disable">
              <option :value="1">关</option>
              <option :value="0">开</option>
            </select>

            <template v-else>NA</template>
          </td>
          <td>{{ $t("BOARD_INFO.OPTICAL_CHANNEL") }}</td>
          <td>
            <!-- <select >
              <option :value="0">C21-C60</option>
            </select> -->

            <input type="text" class="def-input" :disabled="cfp2Disable" v-if="infoData.CFP2.link_status" v-model.number="infoData.CFP2.light_channel" />

            <template v-else>NA</template>
          </td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.MODU_MODE") }}</td>
          <td>
            <select v-if="infoData.CFP2.link_status" :disabled="cfp2Disable" v-model="infoData.CFP2.Modulation_mode">
              <!-- 先默认一个 -->
              <option :value="3">DP-16QAM</option>

              <!-- 待根据不同模块做判断修改 -->
              <!-- <template v-if="infoData.CFP2.cfp2_type === 10"> </template>

              <template v-if="infoData.CFP2.cfp2_type == 0">
                <option :value="0">DP-QPSK</option>
                <option :value="1">16QAM</option>
                <option :value="2">DP-8QAM</option>
                <option :value="4">DP-64QAM</option>
              </template> -->
            </select>

            <template v-else>NA</template>
          </td>
          <td>FEC{{ $t("BOARD_INFO.MODEL") }}</td>
          <td>
            <select v-if="infoData.CFP2.link_status" :disabled="cfp2Disable" v-model="infoData.CFP2.FEC_mode">
              <!-- 先默认一个 -->
              <option :value="0">{{ $t("COMMON.NO") }}</option>
              <option :value="3">O-FEC</option>

              <!-- 待根据不同模块做判断修改 -->
              <!-- <template v-if="infoData.CFP2.cfp2_type === 10"></template>
              <template v-if="infoData.CFP2.cfp2_type === 0"></template>

              <option :value="1">SD-FEC</option>
              <option :value="2">HD-FEC</option>
              <option :value="4">C-FEC</option>
              <option :value="5">SC-FEC</option> -->
            </select>

            <template v-else>NA</template>
          </td>
          <td>{{ $t("BOARD_INFO.LOOP_CONTAROL") }}</td>
          <td>
            <select v-if="infoData.CFP2.link_status" :disabled="cfp2Disable" v-model="infoData.CFP2.loop">
              <!-- 待根据不同模块做判断修改 -->
              <!-- <template v-if="infoData.CFP2.cfp2_type === 10"></template>
              <template v-if="infoData.CFP2.cfp2_type == 0"></template> -->

              <option :value="0">{{ $t("COMMON.NO") }}</option>
              <option :value="1">host环回</option>
              <option :value="2">Line环回</option>
              <option :value="3">host和Line同时环回</option>
            </select>

            <template v-else>NA</template>
          </td>
        </tr>
      </table>
    </div>

    <div class="board-change-btns">
      <button class="def-btn" :disabled="refreshInfoDisabled" @click="refreshGetInfo">{{ $t("COMMON.REFRESH") }}</button>

      <div v-permission="'control'">
        <button class="def-btn" :disabled="!isValidatePass || setInfoDisabled" @click="setInfo">{{ $t("COMMON.APPLY") }}</button>
        <button class="def-btn" :disabled="restorInfoDisabled" @click="restorInfo">{{ $t("COMMON.RESET") }}</button>
        <button class="def-btn" :disabled="restoreDefaultInfoDisabled" @click="restoreDefaultInfo">{{ $t("COMMON.RESTOR_DEF") }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from "@/utils/mixins";
import { isChecks } from "@/utils";

export default {
  name: "dco200g",
  mixins: [mixins],
  data() {
    return {
      infoData: {
        boardname: "",
        type: "",
        QSFP1: {
          link_status: 0,
          launch_range: 0,
          wave_len: 0,
          voltage: 0,
          temp: 0,
          Business_type: 0,
          FEC_mode: 0,
          rcv_thr_H: 0,
          rcv_thr_L: 0,
          tx_thr_H: 0,
          tx_thr_L: 0,
          channel1: {
            los: 0,
            tx_disable: 0,
            launch_power: "",
            rcv_power: "",
            current: "",
          },
          channel2: {
            los: 0,
            tx_disable: 0,
            launch_power: "",
            rcv_power: "",
            current: "",
          },
          channel3: {
            los: 0,
            tx_disable: 0,
            launch_power: "",
            rcv_power: "",
            current: "",
          },
          channel4: {
            los: 0,
            tx_disable: 0,
            launch_power: "",
            rcv_power: "",
            current: "",
          },
        },
        QSFP2: {
          link_status: 0,
          launch_range: 0,
          wave_len: 0,
          voltage: 0,
          temp: 0,
          Business_type: 0,
          FEC_mode: 0,
          rcv_thr_H: 0,
          rcv_thr_L: 0,
          tx_thr_H: 0,
          tx_thr_L: 0,
          channel1: {
            los: 0,
            tx_disable: 0,
            launch_power: "",
            rcv_power: "",
            current: "",
          },
          channel2: {
            los: 0,
            tx_disable: 0,
            launch_power: "",
            rcv_power: "",
            current: "",
          },
          channel3: {
            los: 0,
            tx_disable: 0,
            launch_power: "",
            rcv_power: "",
            current: "",
          },
          channel4: {
            los: 0,
            tx_disable: 0,
            launch_power: "",
            rcv_power: "",
            current: "",
          },
        },
        CFP2: {
          link_status: 0,
          temp: "",
          voltage: "",
          current: "",
          launch_power: "",
          rcv_power: "",
          tx_disable: 0,
          light_channel: 0,
          Modulation_mode: 0,
          FEC_mode: 0,
          loop: 0,
        },
      },
      validate: {
        QSFP1: {},
        QSFP2: {},
        CFP2: {},
      },
    };
  },
  filters: {
    mapCfpState(v) {
      const state = [null, "初始化状态", "低功耗状态", "高功耗打开状态", "发送禁止状态", "发送打开状态", "Ready状态", "失效状态", "发送关闭状态", "高功耗关闭状态"];

      return state[v] || v;
    },
  },
  computed: {
    cfp2Disable() {
      return this.infoData.CFP2.cfp2_states === 2;
    },
    isValidatePass() {
      return isChecks(this.validate);
    },
  },
  methods: {
    changeBusTypeQsfp1() {
      this.infoData.QSFP2.Business_type = this.infoData.QSFP1.Business_type;

      if (this.infoData.QSFP1.Business_type === 1) {
        this.infoData.QSFP1.FEC_mode = 0;
        this.infoData.QSFP2.FEC_mode = 0;
      }
    },
    changeBusTypeQsfp2() {
      this.infoData.QSFP1.Business_type = this.infoData.QSFP2.Business_type;

      if (this.infoData.QSFP2.Business_type === 1) {
        this.infoData.QSFP1.FEC_mode = 0;
        this.infoData.QSFP2.FEC_mode = 0;
      }
    },
    changeModeQsfp1() {
      this.infoData.QSFP2.FEC_mode = this.infoData.QSFP1.FEC_mode;
    },
    changeModeQsfp2() {
      this.infoData.QSFP1.FEC_mode = this.infoData.QSFP2.FEC_mode;
    },
    validateForm() {
      console.log(this.isValidatePass);
    },
  },
};
</script>

<style scoped lang="css">
.cfp2-title {
  height: 34px;
  line-height: 34px;
  border-left: 1px solid #e8e8e8;
  border-right: 1px solid #e8e8e8;
  text-align: center;
}

.board-cfp2-table {
  margin-top: 0;
}
</style>
