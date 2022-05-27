<template>
  <div class="otu40g100g-cps-wrapper cps-wrapper">
    <div class="board-table-container">
      <table class="board-table" border="1">
        <thead>
          <tr>
            <td></td>
            <td>
              <div class="coll-4">SFP28 {{ $t("BOARD_INFO.LIGHT_MODULE") }}</div>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div class="coll-4">QSFP28 {{ $t("BOARD_INFO.LIGHT_MODULE") }}</div>
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
          <td>{{ infoData.sfp28_info.channels[0].status ? $t("COMMON.IN_OFFICE") : $t("COMMON.DISLOCATION") }}</td>
          <td>{{ infoData.sfp28_info.channels[1].status ? $t("COMMON.IN_OFFICE") : $t("COMMON.DISLOCATION") }}</td>
          <td>{{ infoData.sfp28_info.channels[2].status ? $t("COMMON.IN_OFFICE") : $t("COMMON.DISLOCATION") }}</td>
          <td>{{ infoData.sfp28_info.channels[3].status ? $t("COMMON.IN_OFFICE") : $t("COMMON.DISLOCATION") }}</td>
          <td>
            <div class="coll-4">{{ infoData.qsfp28_info.status ? $t("COMMON.IN_OFFICE") : $t("COMMON.DISLOCATION") }}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.LINK_STATE") }}</td>
          <td>{{ infoData.sfp28_info.channels[0].status ? (infoData.sfp28_info.los ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[1].status ? (infoData.sfp28_info.los ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[2].status ? (infoData.sfp28_info.los ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[3].status ? (infoData.sfp28_info.los ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? (infoData.qsfp28_info.los ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? (infoData.qsfp28_info.los ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? (infoData.qsfp28_info.los ? "DOWN" : "UP") : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? (infoData.qsfp28_info.los ? "DOWN" : "UP") : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.PROPERTY") }}</td>
          <td>{{ infoData.sfp28_info.channels[0].status ? (infoData.sfp28_info.channels[0].rw_type ? $t("COMMON.READ_WRITE") : $t("COMMON.READ_ONLY")) : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[1].status ? (infoData.sfp28_info.channels[1].rw_type ? $t("COMMON.READ_WRITE") : $t("COMMON.READ_ONLY")) : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[2].status ? (infoData.sfp28_info.channels[2].rw_type ? $t("COMMON.READ_WRITE") : $t("COMMON.READ_ONLY")) : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[3].status ? (infoData.sfp28_info.channels[3].rw_type ? $t("COMMON.READ_WRITE") : $t("COMMON.READ_ONLY")) : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? (infoData.qsfp28_info.rw_type ? $t("COMMON.READ_WRITE") : $t("COMMON.READ_ONLY")) : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? (infoData.qsfp28_info.rw_type ? $t("COMMON.READ_WRITE") : $t("COMMON.READ_ONLY")) : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? (infoData.qsfp28_info.rw_type ? $t("COMMON.READ_WRITE") : $t("COMMON.READ_ONLY")) : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? (infoData.qsfp28_info.rw_type ? $t("COMMON.READ_WRITE") : $t("COMMON.READ_ONLY")) : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.CHANNEL") }}</td>
          <td>
            <template v-if="infoData.sfp28_info.channels[0].status">
              <input v-if="infoData.sfp28_info.channels[0].rw_type" class="def-input" type="text" v-model.number="infoData.sfp28_info.channels[0].wave_channel" />
              <template v-else>{{ infoData.sfp28_info.channels[0].wave_channel }}</template>
            </template>
            <template v-else>NA</template>
          </td>
          <td>
            <template v-if="infoData.sfp28_info.channels[1].status">
              <input v-if="infoData.sfp28_info.channels[1].rw_type" class="def-input" type="text" v-model.number="infoData.sfp28_info.channels[1].wave_channel" />
              <template v-else>{{ infoData.sfp28_info.channels[1].wave_channel }}</template>
            </template>
            <template v-else>NA</template>
          </td>
          <td>
            <template v-if="infoData.sfp28_info.channels[2].status">
              <input v-if="infoData.sfp28_info.channels[2].rw_type" class="def-input" type="text" v-model.number="infoData.sfp28_info.channels[2].wave_channel" />
              <template v-else>{{ infoData.sfp28_info.channels[2].wave_channel }}</template>
            </template>
            <template v-else>NA</template>
          </td>
          <td>
            <template v-if="infoData.sfp28_info.channels[3].status">
              <input v-if="infoData.sfp28_info.channels[3].rw_type" class="def-input" type="text" v-model.number="infoData.sfp28_info.channels[3].wave_channel" />
              <template v-else>{{ infoData.sfp28_info.channels[3].wave_channel }}</template>
            </template>
            <template v-else>NA</template>
          </td>
          <td>NA</td>
          <td>NA</td>
          <td>NA</td>
          <td>NA</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.WAVE_LEN") }}（nm）</td>
          <td>{{ infoData.sfp28_info.channels[0].status ? infoData.sfp28_info.channels[0].wave_len : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[1].status ? infoData.sfp28_info.channels[1].wave_len : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[2].status ? infoData.sfp28_info.channels[2].wave_len : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[3].status ? infoData.sfp28_info.channels[3].wave_len : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? infoData.qsfp28_info.channels[0].wave_len : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? infoData.qsfp28_info.channels[1].wave_len : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? infoData.qsfp28_info.channels[2].wave_len : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? infoData.qsfp28_info.channels[3].wave_len : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.DISTANCE") }}（km）</td>
          <td>{{ infoData.sfp28_info.channels[0].status ? infoData.sfp28_info.channels[0].launch_range : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[1].status ? infoData.sfp28_info.channels[1].launch_range : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[2].status ? infoData.sfp28_info.channels[2].launch_range : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[3].status ? infoData.sfp28_info.channels[3].launch_range : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? infoData.qsfp28_info.channels[0].launch_range : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? infoData.qsfp28_info.channels[1].launch_range : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? infoData.qsfp28_info.channels[2].launch_range : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? infoData.qsfp28_info.channels[3].launch_range : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.TRANS_OPTICAL_POWER") }}（dBm）</td>
          <td>{{ infoData.sfp28_info.channels[0].status ? infoData.sfp28_info.channels[0].launch_power : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[1].status ? infoData.sfp28_info.channels[1].launch_power : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[2].status ? infoData.sfp28_info.channels[2].launch_power : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[3].status ? infoData.sfp28_info.channels[3].launch_power : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? infoData.qsfp28_info.channels[0].launch_power : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? infoData.qsfp28_info.channels[1].launch_power : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? infoData.qsfp28_info.channels[2].launch_power : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? infoData.qsfp28_info.channels[3].launch_power : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.RECE_OPTICAL_POWER") }}（dBm）</td>
          <td>{{ infoData.sfp28_info.channels[0].status ? infoData.sfp28_info.channels[0].rcv_power : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[1].status ? infoData.sfp28_info.channels[1].rcv_power : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[2].status ? infoData.sfp28_info.channels[2].rcv_power : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[3].status ? infoData.sfp28_info.channels[3].rcv_power : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? infoData.qsfp28_info.channels[0].rcv_power : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? infoData.qsfp28_info.channels[1].rcv_power : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? infoData.qsfp28_info.channels[2].rcv_power : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? infoData.qsfp28_info.channels[3].rcv_power : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.BIAS_CURRENT") }}（mA）</td>
          <td>{{ infoData.sfp28_info.channels[0].status ? infoData.sfp28_info.channels[0].current : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[1].status ? infoData.sfp28_info.channels[1].current : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[2].status ? infoData.sfp28_info.channels[2].current : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[3].status ? infoData.sfp28_info.channels[3].current : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? infoData.qsfp28_info.channels[0].current : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? infoData.qsfp28_info.channels[1].current : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? infoData.qsfp28_info.channels[2].current : "NA" }}</td>
          <td>{{ infoData.qsfp28_info.status ? infoData.qsfp28_info.channels[3].current : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.VOLTAGE") }}（V）</td>
          <td>{{ infoData.sfp28_info.channels[0].status ? infoData.sfp28_info.channels[0].voltage : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[1].status ? infoData.sfp28_info.channels[0].voltage : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[2].status ? infoData.sfp28_info.channels[0].voltage : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[3].status ? infoData.sfp28_info.channels[0].voltage : "NA" }}</td>
          <td>
            <div class="coll-4">{{ infoData.qsfp28_info.status ? infoData.sfp28_info.voltage : "NA" }}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.TEMPERATURE") }}（℃）</td>
          <td>{{ infoData.sfp28_info.channels[0].status ? infoData.sfp28_info.channels[0].temp : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[1].status ? infoData.sfp28_info.channels[0].temp : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[2].status ? infoData.sfp28_info.channels[0].temp : "NA" }}</td>
          <td>{{ infoData.sfp28_info.channels[3].status ? infoData.sfp28_info.channels[0].temp : "NA" }}</td>
          <td>
            <div class="coll-4">{{ infoData.qsfp28_info.status ? infoData.sfp28_info.temp : "NA" }}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.LASER") }}</td>
          <td>
            <select v-if="infoData.sfp28_info.channels[0].status" v-model="infoData.sfp28_info.channels[0].tx_disable">
              <option :value="1">{{ $t("COMMON.OFF") }}</option>
              <option :value="0">{{ $t("COMMON.ON") }}</option>
            </select>

            <template v-else>NA</template>
          </td>
          <td>
            <select v-if="infoData.sfp28_info.channels[1].status" v-model="infoData.sfp28_info.channels[1].tx_disable">
              <option :value="1">{{ $t("COMMON.OFF") }}</option>
              <option :value="0">{{ $t("COMMON.ON") }}</option>
            </select>

            <template v-else>NA</template>
          </td>
          <td>
            <select v-if="infoData.sfp28_info.channels[2].status" v-model="infoData.sfp28_info.channels[2].tx_disable">
              <option :value="1">{{ $t("COMMON.OFF") }}</option>
              <option :value="0">{{ $t("COMMON.ON") }}</option>
            </select>

            <template v-else>NA</template>
          </td>
          <td>
            <select v-if="infoData.sfp28_info.channels[3].status" v-model="infoData.sfp28_info.channels[3].tx_disable">
              <option :value="1">{{ $t("COMMON.OFF") }}</option>
              <option :value="0">{{ $t("COMMON.ON") }}</option>
            </select>

            <template v-else>NA</template>
          </td>
          <td>
            <select v-if="infoData.qsfp28_info.channels[0].status" v-model="infoData.qsfp28_info.channels[0].tx_disable">
              <option :value="1">{{ $t("COMMON.OFF") }}</option>
              <option :value="0">{{ $t("COMMON.ON") }}</option>
            </select>

            <template v-else>NA</template>
          </td>
          <td>
            <select v-if="infoData.qsfp28_info.channels[1].status" v-model="infoData.qsfp28_info.channels[1].tx_disable">
              <option :value="1">{{ $t("COMMON.OFF") }}</option>
              <option :value="0">{{ $t("COMMON.ON") }}</option>
            </select>

            <template v-else>NA</template>
          </td>
          <td>
            <select v-if="infoData.qsfp28_info.channels[2].status" v-model="infoData.qsfp28_info.channels[2].tx_disable">
              <option :value="1">{{ $t("COMMON.OFF") }}</option>
              <option :value="0">{{ $t("COMMON.ON") }}</option>
            </select>

            <template v-else>NA</template>
          </td>
          <td>
            <select v-if="infoData.qsfp28_info.channels[3].status" v-model="infoData.qsfp28_info.channels[3].tx_disable">
              <option :value="1">{{ $t("COMMON.OFF") }}</option>
              <option :value="0">{{ $t("COMMON.ON") }}</option>
            </select>

            <template v-else>NA</template>
          </td>
        </tr>
        <!-- <tr>
          <td>{{$t('BOARD_INFO.ERROR_DETECTION')}}</td>
          <td>
            <div v-if="infoData.sfp28_info.channels[0].status">
              <button class="def-btn" :disabled="detection[0]['client']" @click="detectionPrbs(0, 'client')">{{ infoData.sfp28_info.channels[0].prbs_en ? $t('COMMON.STOP') : $t('COMMON.START') }}</button>
              <span>{{$t('COMMON.RESULT')}}：{{ detection[0].clientEnd ? (infoData.sfp28_info.channels[0].prbs ? "有误码" : "无误码") : "" }}</span>
            </div>

            <template v-else>NA</template>
          </td>
          <td>
            <div v-if="infoData.channels[0].link_status.line">
              <button class="def-btn" :disabled="detection[0]['line']" @click="detectionPrbs(0, 'line')">{{ infoData.channels[0].prbs_en.line ? $t('COMMON.STOP') : $t('COMMON.START') }}</button>
              <span>{{$t('COMMON.RESULT')}}：{{ detection[0].lineEnd ? (infoData.channels[0].prbs.line ? "有误码" : "无误码") : "" }}</span>
            </div>

            <template v-else>NA</template>
          </td>
          <td>
            <div v-if="infoData.channels[1].link_status.client">
              <button class="def-btn" :disabled="detection[1]['client']" @click="detectionPrbs(1, 'client')">{{ infoData.channels[1].prbs_en.client ? $t('COMMON.STOP') : $t('COMMON.START') }}</button>
              <span>{{$t('COMMON.RESULT')}}：{{ detection[1].clientEnd ? (infoData.channels[1].prbs.client ? "有误码" : "无误码") : "" }}</span>
            </div>

            <template v-else>NA</template>
          </td>
          <td>
            <div v-if="infoData.channels[1].link_status.line">
              <button class="def-btn" :disabled="detection[1]['line']" @click="detectionPrbs(1, 'line')">{{ infoData.channels[1].prbs_en.line ? $t('COMMON.STOP') : $t('COMMON.START') }}</button>
              <span>{{$t('COMMON.RESULT')}}：{{ detection[1].lineEnd ? (infoData.channels[1].prbs.client ? "有误码" : "无误码") : "" }}</span>
            </div>

            <template v-else>NA</template>
          </td>
          <td>
            <div v-if="infoData.channels[2].link_status.client">
              <button class="def-btn" :disabled="detection[2]['client']" @click="detectionPrbs(2, 'client')">{{ infoData.channels[2].prbs_en.client ? $t('COMMON.STOP') : $t('COMMON.START') }}</button>
              <span>{{$t('COMMON.RESULT')}}：{{ detection[2].clientEnd ? (infoData.channels[2].prbs.client ? "有误码" : "无误码") : "" }}</span>
            </div>

            <template v-else>NA</template>
          </td>
          <td>
            <div v-if="infoData.channels[2].link_status.line">
              <button class="def-btn" :disabled="detection[2]['line']" @click="detectionPrbs(2, 'line')">{{ infoData.channels[2].prbs_en.line ? $t('COMMON.STOP') : $t('COMMON.START') }}</button>
              <span>{{$t('COMMON.RESULT')}}：{{ detection[2].lineEnd ? (infoData.channels[2].prbs.client ? "有误码" : "无误码") : "" }}</span>
            </div>

            <template v-else>NA</template>
          </td>
          <td>
            <div v-if="infoData.channels[3].link_status.client">
              <button class="def-btn" :disabled="detection[3]['client']" @click="detectionPrbs(3, 'client')">{{ infoData.channels[3].prbs_en.client ? $t('COMMON.STOP') : $t('COMMON.START') }}</button>
              <span>{{$t('COMMON.RESULT')}}：{{ detection[3].clientEnd ? (infoData.channels[3].prbs.client ? "有误码" : "无误码") : "" }}</span>
            </div>

            <template v-else>NA</template>
          </td>
          <td>
            <div v-if="infoData.channels[3].link_status.line">
              <button class="def-btn" :disabled="detection[3]['line']" @click="detectionPrbs(3, 'line')">{{ infoData.channels[3].prbs_en.line ? $t('COMMON.STOP') : $t('COMMON.START') }}</button>
              <span>{{$t('COMMON.RESULT')}}：{{ detection[3].lineEnd ? (infoData.channels[3].prbs.client ? "有误码" : "无误码") : "" }}</span>
            </div>

            <template v-else>NA</template>
          </td>
        </tr> -->
        <tr>
          <td>{{ $t("BOARD_INFO.SPEED") }}</td>
          <td>
            <div class="coll-4">
              <select v-model="infoData.sfp28_info.speed">
                <option :value="0">100GE</option>
                <option :value="1">OTU4.4</option>
              </select>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="coll-4">
              <select v-model="infoData.qsfp28_info.speed">
                <option :value="0">25G</option>
                <option :value="1">28G</option>
              </select>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.RECE_LIGHT_POWER_LOWER_THRESHOLD") }}（dBm）</td>
          <td>
            <input v-if="infoData.sfp28_info.channels[0].status" type="text" class="def-input" v-model.number="infoData.sfp28_info.channels[0].rcv_thr_L" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="infoData.sfp28_info.channels[1].status" type="text" class="def-input" v-model.number="infoData.sfp28_info.channels[1].rcv_thr_L" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="infoData.sfp28_info.channels[2].status" type="text" class="def-input" v-model.number="infoData.sfp28_info.channels[2].rcv_thr_L" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="infoData.sfp28_info.channels[3].status" type="text" class="def-input" v-model.number="infoData.sfp28_info.channels[3].rcv_thr_L" />
            <template v-else>NA</template>
          </td>
          <td>
            <div class="coll-4">
              <input v-if="infoData.qsfp28_info.status" type="text" class="def-input" v-model.number="infoData.qsfp28_info.rcv_thr_L" />
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
            <input v-if="infoData.sfp28_info.channels[0].status" type="text" class="def-input" v-model.number="infoData.sfp28_info.channels[0].rcv_thr_H" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="infoData.sfp28_info.channels[1].status" type="text" class="def-input" v-model.number="infoData.sfp28_info.channels[1].rcv_thr_H" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="infoData.sfp28_info.channels[2].status" type="text" class="def-input" v-model.number="infoData.sfp28_info.channels[2].rcv_thr_H" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="infoData.sfp28_info.channels[3].status" type="text" class="def-input" v-model.number="infoData.sfp28_info.channels[3].rcv_thr_H" />
            <template v-else>NA</template>
          </td>
          <td>
            <div class="coll-4">
              <input v-if="infoData.qsfp28_info.status" type="text" class="def-input" v-model.number="infoData.qsfp28_info.rcv_thr_H" />
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
            <input v-if="infoData.sfp28_info.channels[0].status" type="text" class="def-input" v-model.number="infoData.sfp28_info.channels[0].tx_thr_L" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="infoData.sfp28_info.channels[1].status" type="text" class="def-input" v-model.number="infoData.sfp28_info.channels[1].tx_thr_L" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="infoData.sfp28_info.channels[2].status" type="text" class="def-input" v-model.number="infoData.sfp28_info.channels[2].tx_thr_L" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="infoData.sfp28_info.channels[3].status" type="text" class="def-input" v-model.number="infoData.sfp28_info.channels[3].tx_thr_L" />
            <template v-else>NA</template>
          </td>
          <td>
            <div class="coll-4">
              <input v-if="infoData.qsfp28_info.status" type="text" class="def-input" v-model.number="infoData.qsfp28_info.tx_thr_L" />
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
            <input v-if="infoData.sfp28_info.channels[0].status" type="text" class="def-input" v-model.number="infoData.sfp28_info.channels[0].tx_thr_H" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="infoData.sfp28_info.channels[1].status" type="text" class="def-input" v-model.number="infoData.sfp28_info.channels[1].tx_thr_H" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="infoData.sfp28_info.channels[2].status" type="text" class="def-input" v-model.number="infoData.sfp28_info.channels[2].tx_thr_H" />
            <template v-else>NA</template>
          </td>
          <td>
            <input v-if="infoData.sfp28_info.channels[3].status" type="text" class="def-input" v-model.number="infoData.sfp28_info.channels[3].tx_thr_H" />
            <template v-else>NA</template>
          </td>
          <td>
            <div class="coll-4">
              <input v-if="infoData.qsfp28_info.status" type="text" class="def-input" v-model.number="infoData.qsfp28_info.tx_thr_H" />
              <template v-else>NA</template>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
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

export default {
  name: "otu100g",
  mixins: [mixins],
  data() {
    return {
      infoData: {
        boardname: "otu100g",
        type: "get_info",
        sfp28_info: {
          speed: 0,
          channels: [
            {
              channel: 1,
              status: 0,
              los: 0,
              rw_type: 0,
              wave_channel: 0,
              launch_range: 10,
              launch_power: "0.57",
              rcv_power: "0.00",
              current: "36.99",
              rcv_thr_H: 4,
              rcv_thr_L: -16,
              tx_thr_H: 8,
              tx_thr_L: -5.99,
              tx_disable: 0,
              voltage: "3.35",
              temp: "31.00",
            },
            {
              channel: 2,
              status: 0,
              los: 0,
              rw_type: 0,
              wave_channel: 0,
              launch_range: 10,
              launch_power: "0.48",
              rcv_power: "0.00",
              current: "33.23",
              rcv_thr_H: 4,
              rcv_thr_L: -16,
              tx_thr_H: 8,
              tx_thr_L: -5.99,
              tx_disable: 0,
              voltage: "3.30",
              temp: "30.00",
            },
            {
              channel: 3,
              status: 0,
              los: 0,
              rw_type: 0,
              wave_channel: 0,
              launch_range: 0,
              launch_power: "0.00",
              rcv_power: "0.00",
              current: "0.00",
              rcv_thr_H: 9,
              rcv_thr_L: -10,
              tx_thr_H: 9,
              tx_thr_L: -10,
              tx_disable: 0,
              voltage: "0.00",
              temp: "0.00",
            },
            {
              channel: 4,
              status: 0,
              los: 0,
              rw_type: 0,
              wave_channel: 0,
              launch_range: 0,
              launch_power: "0.00",
              rcv_power: "0.00",
              rcv_thr_H: 9,
              rcv_thr_L: -10,
              tx_thr_H: 9,
              tx_thr_L: -10,
              tx_disable: 0,
              voltage: "0.00",
              temp: "0.00",
            },
          ],
        },
        qsfp28_info: {
          status: 0,
          speed: 0,
          wave_len: "0.00",
          launch_range: 0,
          voltage: "0.00",
          temp: "0.00",
          rcv_thr_H: 0,
          rcv_thr_L: 0,
          tx_thr_H: 0,
          tx_thr_L: 0,
          channels: [
            {
              channel: 1,
              los: 0,
              rw_type: 0,
              launch_power: "0.00",
              rcv_power: "0.00",
              current: "0.00",
              tx_disable: 0,
            },
            {
              channel: 2,
              los: 0,
              rw_type: 0,
              launch_power: "0.00",
              rcv_power: "0.00",
              current: "0.00",
              tx_disable: 0,
            },
            {
              channel: 3,
              los: 0,
              rw_type: 0,
              launch_power: "0.00",
              rcv_power: "0.00",
              current: "0.00",
              tx_disable: 0,
            },
            {
              channel: 4,
              los: 0,
              rw_type: 0,
              launch_power: "0.00",
              rcv_power: "0.00",
              current: "0.00",
              tx_disable: 0,
            },
          ],
        },
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
    // detectionPrbs(i, status) {
    //   const val = (this.infoData.channels[i].prbs_en[status] + 1) % 2;
    //   this.infoData.channels[i].prbs_en[status] = val;
    //   const { boardname, slot } = this.info;
    //   const diffData = this.$difference(this.infoData, this.clonData);
    //   const data = { otn2000: { ...diffData, type: "post_info", boardname, slot } };
    //   this.setInfoDisabled = true;
    //   this.detection[i][`${status}End`] = false;
    //   this.detection[i][status] = true;
    //   this.$http
    //     .post(data)
    //     .then((res) => {
    //       console.log("setInfos", res);
    //       this.$message("成功");
    //       this.setInfoDisabled = false;
    //       this.detection[i][status] = false;
    //       if (!val) {
    //         // 停止检测并获取状态
    //         console.log("停止检测", val);
    //         this.getInfo()
    //           .then(() => {
    //             this.detection[i][`${status}End`] = true;
    //             this.$message("检测成功");
    //           })
    //           .catch(() => {
    //             this.detection[i][`${status}End`] = true;
    //             this.$message("检测失败");
    //           });
    //       } else {
    //         this.detection[i][`${status}End`] = false;
    //         this.detection[i][status] = false;
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       this.$message("失败");
    //       this.setInfoDisabled = false;
    //     });
    // },
  },
};
</script>

<style scoped></style>
