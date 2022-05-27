<template>
  <div>
    <div class="inner-container-title custom-title">{{ $t("HOME.DEVICE_INFO") }}</div>

    <div class="system-info-main">
      <div class="system-info-wrapper">
        <div class="system-info-item">
          <span>{{ $t("HOME.DEVICE_TYPE") }}</span>
          <span>{{ systemInfo.device_type }} </span>
        </div>
        <!-- <div class="system-info-item">
          <span>{{ $t("HOME.DEVICE_SN") }}</span>
          <span>
            <template v-if="isTatic || isRole != '1'">{{ systemInfo.sn }}</template>
            <input v-if="!isTatic && isRole == '1'" class="def-input" type="text" v-model="systemInfo.sn" />
          </span>
        </div> -->
        <div class="system-info-item">
          <span>{{ $t("COMMON.FIRMWARE_VERSION") }}</span
          ><span>{{ systemInfo.s_rev ? `V${systemInfo.s_rev}` : "" }}</span>
        </div>

        <div class="system-info-item">
          <span>{{ $t("HOME.DEVICE_ID") }}</span>
          <span>
            <template v-if="isTatic">{{ systemInfo.dev_sign }}</template>
            <input v-else class="def-input" type="text" v-model="systemInfo.dev_sign" maxlength="32" />
          </span>
        </div>
        <div class="system-info-item">
          <span>{{ $t("HOME.DEVICE_LOCALTION") }}</span>
          <span>
            <template v-if="isTatic">{{ systemInfo.location }}</template>
            <input v-else class="def-input" type="text" v-model="systemInfo.location" maxlength="32" />
          </span>
        </div>
        <div class="system-info-item">
          <span>{{ $t("HOME.CONCART") }}</span>
          <span>
            <template v-if="isTatic">{{ systemInfo.contacts }}</template>
            <input v-else class="def-input" type="text" v-model="systemInfo.contacts" maxlength="32" />
          </span>
        </div>
        <div class="system-info-change-wrapper">
          <button v-if="isTatic && isRole != '0'" class="def-btn" @click="changeSys">{{ $t("COMMON.CHANGE") }}</button>

          <template v-else-if="isRole != '0'">
            <button class="def-btn" @click="submitChangeFrom">{{ $t("COMMON.SUBMIT") }}</button>
            <button class="def-btn" @click="cancelChangeForm">{{ $t("COMMON.CANCEL") }}</button>
          </template>
        </div>
      </div>

      <div class="system-info-wrapper">
        <div class="system-info-item">
          <span>{{ $t("HOME.POWER_TYPE_1") }}</span>
          <span>
            {{
              systemInfo.source_1.on_off
                ? (systemInfo.source_1.type ? $t("COMMON.DC") : $t("COMMON.AC")) + `${$t("COMMON.ON")} ${$t("COMMON.OUTPUT")} ${systemInfo.source_1.output.toFixed(2)}（V）`
                : $t("COMMON.NO_OUTPUT")
            }}
          </span>
        </div>
        <div class="system-info-item">
          <span>{{ $t("HOME.POWER_TYPE_2") }}</span>
          <span>
            {{
              systemInfo.source_2.on_off
                ? (systemInfo.source_2.type ? $t("COMMON.DC") : $t("COMMON.AC")) + `${$t("COMMON.ON")} ${$t("COMMON.OUTPUT")} ${systemInfo.source_2.output.toFixed(2)}（V）`
                : $t("COMMON.NO_OUTPUT")
            }}
          </span>
        </div>
        <div class="system-info-item">
          <span>{{ $t("COMMON.HARDWARE_VERSION") }}</span>
          <span>{{ systemInfo.h_rev ? `V${systemInfo.h_rev}` : "" }} </span>
        </div>
        <div class="system-info-item">
          <span>{{ $t("HOME.SYSTEM_TIME") }}</span
          ><span>{{ systemInfo.sys_time }}</span>
        </div>
        <div class="system-info-item">
          <span>{{ $t("HOME.RUN_TIME") }}</span>
          <span>{{ systemInfo.run_time | formatSeconds }}</span>
        </div>
        <!-- <div class="system-info-item">
          <span>{{ $t("COMMON.WEB_VERSION") }}</span
          ><span>{{ systemInfo.web_ver ? `V${systemInfo.web_ver}` : "" }}</span>
        </div> -->
      </div>
    </div>

    <div class="inner-container-title">{{ $t("HOME.DEVICE_PERFOR") }}</div>
    <div class="system-performance-wrapper">
      <div class="fan-state-wrapper">
        <div class="state-title"><i class="c-icon icon-setting"></i>{{ $t("HOME.FAN_STATE") }}</div>
        <div class="state-inner-wrapper">
          <div class="fan-wrapper" :class="systemInfo.fan_status ? '' : 'error'">
            <div class="fan-blade" :class="systemInfo.fan_status ? 'run' : ''"></div>
          </div>
          <div class="state-footer">{{ systemInfo.fan_status || 0 }}rpm</div>
        </div>
      </div>
      <div class="cpu-state-wrapper">
        <div class="state-title"><i class="c-icon icon-cpu"></i>{{ $t("HOME.CPU_STATE") }}</div>
        <div class="state-inner-wrapper">
          <el-progress type="dashboard" :percentage="Math.ceil(systemInfo.cpu_rate)" color="#003466"></el-progress>
        </div>
      </div>
      <div class="memory-state-wrapper">
        <div class="state-title"><i class="c-icon icon-memory"></i>{{ $t("HOME.MEMORY_STATE") }}</div>
        <div class="state-inner-wrapper">
          <el-progress type="dashboard" :percentage="Math.ceil(systemInfo.mem_rate)" color="#003466"></el-progress>
        </div>
      </div>
      <div class="temperature-state-wrapper">
        <div class="state-title"><i class="c-icon icon-temper"></i>{{ $t("HOME.DEVICE_TEMP") }}</div>
        <div class="state-inner-wrapper">
          <div class="temperature-wrapper">
            <div class="temperature-inner-wrapper" :style="{ height: ((systemInfo.temp >= 100 ? 100 : systemInfo.temp) / 100) * 60 + 'px' }"></div>
            <!-- <div class="temperature-value">{{ systemInfo.temp }}℃</div> -->
          </div>
          <div class="state-footer">{{ systemInfo.temp || 0 }}℃</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { storages } from "@/utils";

let timerCount = 0;
let timer = null;

export default {
  name: "equip-overview",
  data() {
    return {
      isTatic: true,
      isRole: storages.get("__role__") || "2",
      systemInfo: {
        boardname: "",
        device_type: "",
        source_1: {
          type: 0,
          on_off: 0,
          output: 0,
        },
        source_2: {
          type: 0,
          on_off: 0,
          output: 0,
        },
        sn: "",
        h_rev: "",
        sys_time: "",
        run_time: 0,
        web_ver: "",
        fan_status: "",
        cpu_rate: "",
        mem_rate: "",
        temp: "",
        location: "",
        contacts: "",
        dev_sign: "",
        s_rev: "",
      },
    };
  },
  created() {},
  mounted() {
    this.getSystemInfo();

    this.$bus.$on("stopUpdateSys", () => {
      this.clearTimer();
    });
  },
  beforeDestroy() {
    this.clearTimer();
  },
  methods: {
    // 首页概览
    getSystemInfo() {
      const data = { otn2000: { type: "get_info", boardname: "sys_view" } };

      this.$http
        .post(data)
        .then(res => {
          if (!res.otn2000_ack || res.otn2000_ack.boardname !== "sys_view") return;

          this.systemInfo = res.otn2000_ack;
        })
        .catch(() => {
          timerCount++;
        })
        .finally(() => {
          this.startTimer();
        });
    },
    submitChangeFrom() {
      const { dev_sign, contacts, location, sn } = this.systemInfo;
      const asin = this.isRole == "1" ? { sn } : {};
      const data = { otn2000: { boardname: "sys_view", type: "post_info", dev_sign, contacts, location, ...asin } };

      this.$http
        .post(data)
        .then(res => {
          this.systemInfo = res.otn2000_ack;
          this.isTatic = true;
        })
        .catch(err => {
          console.log(err);
          alert(this.$t("COMMON.FAIL"));
        })
        .finally(() => {
          this.getSystemInfo();
        });
    },
    cancelChangeForm() {
      this.isTatic = true;
      this.getSystemInfo();
    },
    startTimer() {
      this.clearTimer();

      timer = setTimeout(() => {
        if (timerCount >= 5) return;

        this.getSystemInfo();
      }, 1000);
    },
    clearTimer() {
      clearInterval(timer);

      timer = null;
      timerCount = 0;
    },
    changeSys() {
      this.isTatic = false;
      this.clearTimer();
    },
  },
};
</script>

<style scoped lang="scss">
.system-info-cahnge-btn {
  font-size: 16px;
}

.system-info-main {
  display: flex;
}

.system-info-wrapper {
  width: 50%;
  min-width: 400px;
  .system-info-item {
    display: flex;
    align-items: center;
    margin-top: 5px;
    white-space: nowrap;

    span {
      height: 28px;
      line-height: 28px;
      font-size: 15px;
    }

    span:first-child {
      width: 30%;
      min-width: 110px;
      max-width: 138px;
      padding-left: 23px;
    }
    span:last-child {
      flex: 1;
      padding-left: 15px;
    }
  }

  .system-info-change-wrapper {
    padding: 10px 0 10px 0;
    button:first-child {
      margin-left: 246px;
    }
  }
}

.system-performance-wrapper {
  display: flex;

  & > div {
    width: 25%;
  }

  .state-title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    font-size: 18px;

    .c-icon {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
  }

  .state-inner-wrapper {
    width: 120px;
    height: 120px;
    margin: 10px auto 0;
  }

  .fan-wrapper {
    width: 100%;
    height: 100%;
    background: url("../../assets/images/fans.png") center/contain no-repeat, url("../../assets/images/icons/right.png") 85px 84px/24px 24px no-repeat;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .fan-blade {
      width: 60px;
      height: 60px;
      background: url("../../assets/images/fan-bo.jpg") center/contain no-repeat;
    }

    .fan-blade.run {
      animation: rotate linear 1.4s infinite;
    }
  }

  .state-footer {
    text-align: center;
    font-size: 16px;
  }

  .fan-wrapper.error {
    background-image: url("../../assets/images/fans.png"), url("../../assets/images/icons/error.png");
  }

  .temperature-wrapper {
    width: 100%;
    height: 100%;
    background: url("../../assets/images/temperature.png") center/contain no-repeat;
    position: relative;
  }

  .temperature-inner-wrapper {
    width: 7px;
    height: 43px;
    background-color: var(--dft-color);
    position: absolute;
    left: 57px;
    bottom: 44px;
    border-radius: 3px 3px 0 0;
  }
  .temperature-value {
    position: absolute;
    left: 95px;
    bottom: 55px;
    font-size: 18px;
  }
}

@keyframes rotate {
  from {
    transform: rotate(360deg);
  }
}
</style>
