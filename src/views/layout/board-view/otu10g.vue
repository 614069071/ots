<template>
  <div class="otu10g-cps-wrapper cps-wrapper">
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
                <template v-else>{{ infoData.channels[0].wave_channel.line ? infoData.channels[0].wave_channel.line : "NA" }}</template>
              </template>
              <template v-else>NA</template>
            </td>
            <td>NA</td>
            <td>
              <template v-if="infoData.channels[1].link_status.line">
                <input v-if="infoData.channels[1].rw_type.line" class="def-input" type="text" v-model.number="infoData.channels[1].wave_channel.line" />
                <template v-else>{{ infoData.channels[1].wave_channel.line ? infoData.channels[1].wave_channel.line : "NA" }}</template>
              </template>
              <template v-else>NA</template>
            </td>
            <td>NA</td>
            <td>
              <template v-if="infoData.channels[2].link_status.line">
                <input v-if="infoData.channels[2].rw_type.line" class="def-input" type="text" v-model.number="infoData.channels[2].wave_channel.line" />
                <template v-else>{{ infoData.channels[2].wave_channel.line ? infoData.channels[2].wave_channel.line : "NA" }}</template>
              </template>
              <template v-else>NA</template>
            </td>
            <td>NA</td>
            <td>
              <template v-if="infoData.channels[3].link_status.line">
                <input v-if="infoData.channels[3].rw_type.line" class="def-input" type="text" v-model.number="infoData.channels[3].wave_channel.line" />
                <template v-else>{{ infoData.channels[3].wave_channel.line ? infoData.channels[3].wave_channel.line : "NA" }}</template>
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
            <td>{{ $t("BOARD_INFO.BIAS_CURRENT") }}（mA）</td>
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
          <tr>
            <td>{{ $t("BOARD_INFO.SPEED") }}</td>
            <td>
              <div class="coll-2">
                <select v-if="info.bdtype === '10G-OTUL'" v-model="infoData.channels[0].speed">
                  <option :value="1">FC(包含2G、4G、8G、10G)</option>
                  <option :value="2">CPRIX(X值为3，5，6，7)</option>
                  <option :value="3">CPRIX(X值为3，5，7，8)</option>
                  <option :value="4">OTU1/OTU1e</option>
                  <option :value="5">OTU2/OTU2e</option>
                  <option :value="6">OTU1f/OTU2f</option>
                  <option :value="7">GE/10GE</option>
                  <option :value="8">STM-16/64</option>
                  <option :value="9">FE(旁路)</option>
                </select>

                <select v-else-if="info.bdtype === '10G-OTUH'" v-model="infoData.channels[0].speed">
                  <option :value="1">10G FC</option>
                  <option :value="2">CPRI2/3/4/5/6/7</option>
                  <option :value="3">CPRI2/3/5/7/8</option>
                  <option :value="4">OTU1/OTU1e</option>
                  <option :value="5">OTU2/OTU2e</option>
                  <option :value="6">OTU1f/OTU2f</option>
                  <option :value="7">GE/10GE</option>
                  <option :value="8">STM-16/STM-64</option>
                  <option :value="9">FE/STM-1/STM-4</option>
                </select>
              </div>
            </td>
            <td></td>
            <td>
              <div class="coll-2">
                <select v-if="info.bdtype === '10G-OTUL'" v-model="infoData.channels[1].speed">
                  <option :value="1">FC(包含2G、4G、8G、10G)</option>
                  <option :value="2">CPRIX(X值为3，5，6，7)</option>
                  <option :value="3">CPRIX(X值为3，5，7，8)</option>
                  <option :value="4">OTU1/OTU1e</option>
                  <option :value="5">OTU2/OTU2e</option>
                  <option :value="6">OTU1f/OTU2f</option>
                  <option :value="7">GE/10GE</option>
                  <option :value="8">STM-16/64</option>
                  <option :value="9">FE(旁路)</option>
                </select>

                <select v-else-if="info.bdtype === '10G-OTUH'" v-model="infoData.channels[1].speed">
                  <option :value="1">10G FC</option>
                  <option :value="2">CPRI2/3/4/5/6/7</option>
                  <option :value="3">CPRI2/3/5/7/8</option>
                  <option :value="4">OTU1/OTU1e</option>
                  <option :value="5">OTU2/OTU2e</option>
                  <option :value="6">OTU1f/OTU2f</option>
                  <option :value="7">GE/10GE</option>
                  <option :value="8">STM-16/STM-64</option>
                  <option :value="9">FE/STM-1/STM-4</option>
                </select>
              </div>
            </td>
            <td></td>
            <td>
              <div class="coll-2">
                <select v-if="info.bdtype === '10G-OTUL'" v-model="infoData.channels[2].speed">
                  <option :value="1">FC(包含2G、4G、8G、10G)</option>
                  <option :value="2">CPRIX(X值为3，5，6，7)</option>
                  <option :value="3">CPRIX(X值为3，5，7，8)</option>
                  <option :value="4">OTU1/OTU1e</option>
                  <option :value="5">OTU2/OTU2e</option>
                  <option :value="6">OTU1f/OTU2f</option>
                  <option :value="7">GE/10GE</option>
                  <option :value="8">STM-16/64</option>
                  <option :value="9">FE(旁路)</option>
                </select>

                <select v-else-if="info.bdtype === '10G-OTUH'" v-model="infoData.channels[2].speed">
                  <option :value="1">10G FC</option>
                  <option :value="2">CPRI2/3/4/5/6/7</option>
                  <option :value="3">CPRI2/3/5/7/8</option>
                  <option :value="4">OTU1/OTU1e</option>
                  <option :value="5">OTU2/OTU2e</option>
                  <option :value="6">OTU1f/OTU2f</option>
                  <option :value="7">GE/10GE</option>
                  <option :value="8">STM-16/STM-64</option>
                  <option :value="9">FE/STM-1/STM-4</option>
                </select>
              </div>
            </td>
            <td></td>
            <td>
              <div class="coll-2">
                <select v-if="info.bdtype === '10G-OTUL'" v-model="infoData.channels[3].speed">
                  <option :value="1">FC(包含2G、4G、8G、10G)</option>
                  <option :value="2">CPRIX(X值为3，5，6，7)</option>
                  <option :value="3">CPRIX(X值为3，5，7，8)</option>
                  <option :value="4">OTU1/OTU1e</option>
                  <option :value="5">OTU2/OTU2e</option>
                  <option :value="6">OTU1f/OTU2f</option>
                  <option :value="7">GE/10GE</option>
                  <option :value="8">STM-16/64</option>
                  <option :value="9">FE(旁路)</option>
                </select>

                <select v-else-if="info.bdtype === '10G-OTUH'" v-model="infoData.channels[3].speed">
                  <option :value="1">10G FC</option>
                  <option :value="2">CPRI2/3/4/5/6/7</option>
                  <option :value="3">CPRI2/3/5/7/8</option>
                  <option :value="4">OTU1/OTU1e</option>
                  <option :value="5">OTU2/OTU2e</option>
                  <option :value="6">OTU1f/OTU2f</option>
                  <option :value="7">GE/10GE</option>
                  <option :value="8">STM-16/STM-64</option>
                  <option :value="9">FE/STM-1/STM-4</option>
                </select>
              </div>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>{{ $t("BOARD_INFO.LOOP_CONTAROL") }}</td>
            <td>
              <div class="coll-2">
                <select v-model="infoData.channels[0].loop_mode">
                  <option :value="0">{{ $t("SUP.NO_LOOPBACK") }}</option>
                  <option :value="1">{{ $t("SUP.CLIENT") }}</option>
                  <option :value="2">{{ $t("SUP.LINE") }}</option>
                  <option :value="3">{{ $t("SUP.BOTH") }}</option>
                </select>
              </div>
            </td>
            <td></td>
            <td>
              <div class="coll-2">
                <select v-model="infoData.channels[1].loop_mode">
                  <option :value="0">{{ $t("SUP.NO_LOOPBACK") }}</option>
                  <option :value="1">{{ $t("SUP.CLIENT") }}</option>
                  <option :value="2">{{ $t("SUP.LINE") }}</option>
                  <option :value="3">{{ $t("SUP.BOTH") }}</option>
                </select>
              </div>
            </td>
            <td></td>
            <td>
              <div class="coll-2">
                <select v-model="infoData.channels[2].loop_mode">
                  <option :value="0">{{ $t("SUP.NO_LOOPBACK") }}</option>
                  <option :value="1">{{ $t("SUP.CLIENT") }}</option>
                  <option :value="2">{{ $t("SUP.LINE") }}</option>
                  <option :value="3">{{ $t("SUP.BOTH") }}</option>
                </select>
              </div>
            </td>
            <td></td>
            <td>
              <div class="coll-2">
                <select v-model="infoData.channels[3].loop_mode">
                  <option :value="0">{{ $t("SUP.NO_LOOPBACK") }}</option>
                  <option :value="1">{{ $t("SUP.CLIENT") }}</option>
                  <option :value="2">{{ $t("SUP.LINE") }}</option>
                  <option :value="3">{{ $t("SUP.BOTH") }}</option>
                </select>
              </div>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>{{ $t("BOARD_INFO.RECE_LIGHT_POWER_LOWER_THRESHOLD") }}（dBm）</td>
            <td>
              <Limit :min="-18" :max="-10" v-if="infoData.channels[0].link_status.client" v-model="infoData.channels[0].rcv_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="-18" :max="-10" v-if="infoData.channels[0].link_status.line" v-model="infoData.channels[0].rcv_thr_L.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="-18" :max="-10" v-if="infoData.channels[1].link_status.client" v-model="infoData.channels[1].rcv_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="-18" :max="-10" v-if="infoData.channels[1].link_status.line" v-model="infoData.channels[1].rcv_thr_L.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="-18" :max="-10" v-if="infoData.channels[2].link_status.client" v-model="infoData.channels[2].rcv_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="-18" :max="-10" v-if="infoData.channels[2].link_status.line" v-model="infoData.channels[2].rcv_thr_L.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="-18" :max="-10" v-if="infoData.channels[3].link_status.client" v-model="infoData.channels[3].rcv_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="-18" :max="-10" v-if="infoData.channels[3].link_status.line" v-model="infoData.channels[3].rcv_thr_L.line" />
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
              <Limit :min="0" :max="5" v-if="infoData.channels[0].link_status.line" v-model="infoData.channels[0].rcv_thr_H.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="0" :max="5" v-if="infoData.channels[1].link_status.client" v-model="infoData.channels[1].rcv_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="0" :max="5" v-if="infoData.channels[1].link_status.line" v-model="infoData.channels[1].rcv_thr_H.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="0" :max="5" v-if="infoData.channels[2].link_status.client" v-model="infoData.channels[2].rcv_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="0" :max="5" v-if="infoData.channels[2].link_status.line" v-model="infoData.channels[2].rcv_thr_H.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="0" :max="5" v-if="infoData.channels[3].link_status.client" v-model="infoData.channels[3].rcv_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="0" :max="5" v-if="infoData.channels[3].link_status.line" v-model="infoData.channels[3].rcv_thr_H.line" />
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
              <Limit :min="-8" :max="-5" v-if="infoData.channels[0].link_status.line" v-model="infoData.channels[0].tx_thr_L.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="-8" :max="-5" v-if="infoData.channels[1].link_status.client" v-model="infoData.channels[1].tx_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="-8" :max="-5" v-if="infoData.channels[1].link_status.line" v-model="infoData.channels[1].tx_thr_L.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="-8" :max="-5" v-if="infoData.channels[2].link_status.client" v-model="infoData.channels[2].tx_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="-8" :max="-5" v-if="infoData.channels[2].link_status.line" v-model="infoData.channels[2].tx_thr_L.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="-8" :max="-5" v-if="infoData.channels[3].link_status.client" v-model="infoData.channels[3].tx_thr_L.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="-8" :max="-5" v-if="infoData.channels[3].link_status.line" v-model="infoData.channels[3].tx_thr_L.line" />
              <template v-else>NA</template>
            </td>
          </tr>
          <tr>
            <td>{{ $t("BOARD_INFO.SEND_LIGHT_POWER_UPPER_THRESHOLD") }}（dBm）</td>
            <td>
              <Limit :min="0" :max="5" v-if="infoData.channels[0].link_status.client" v-model="infoData.channels[0].tx_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="3" :max="5" v-if="infoData.channels[0].link_status.line" v-model="infoData.channels[0].tx_thr_H.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="3" :max="5" v-if="infoData.channels[1].link_status.client" v-model="infoData.channels[1].tx_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="3" :max="5" v-if="infoData.channels[1].link_status.line" v-model="infoData.channels[1].tx_thr_H.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="3" :max="5" v-if="infoData.channels[2].link_status.client" v-model="infoData.channels[2].tx_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="3" :max="5" v-if="infoData.channels[2].link_status.line" v-model="infoData.channels[2].tx_thr_H.line" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="3" :max="5" v-if="infoData.channels[3].link_status.client" v-model="infoData.channels[3].tx_thr_H.client" />
              <template v-else>NA</template>
            </td>
            <td>
              <Limit :min="3" :max="5" v-if="infoData.channels[3].link_status.line" v-model="infoData.channels[3].tx_thr_H.line"></Limit>
              <!-- <input v-if="infoData.channels[3].link_status.line" type="text" class="def-input" v-model.number="infoData.channels[3].tx_thr_H.line" /> -->
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
  name: "otu10g",
  mixins: [mixins],
  components: {},
  data() {
    return {
      infoData: {
        channels: new Array(4).fill({
          channel: null,
          link_status: {
            client: null,
            line: null,
          },
          los: {
            client: null,
            line: null,
          },
          tx_disable: {
            client: null,
            line: null,
          },
          speed: null,
          loop_mode: null,
          launch_range: {
            client: null,
            line: null,
          },
          wave_channel: {
            client: null,
            line: null,
          },
          rw_type: {
            client: null,
            line: null,
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
        }),
      },
    };
  },
};
</script>

<style lang="scss">
.prbs-tr .def-btn + .def-btn {
  margin-left: 0;
}
</style>
