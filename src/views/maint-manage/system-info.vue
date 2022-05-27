<template>
  <div>
    <div class="inner-container-title">{{ $t("SYSTEM_INFO.SET_TIME") }}</div>

    <div class="system-info-wrapper">
      <div class="system-info-item-other">
        <span class="item-before"
          ><el-radio v-model="isAutoConfigTime" :label="false">{{ $t("SYSTEM_INFO.MANUAL") }}</el-radio></span
        >
        <span class="item-after"> <el-date-picker v-model="configManualTime" value-format="timestamp" type="datetime"/></span>
      </div>
      <div class="system-info-item-other">
        <span class="item-before"
          ><el-radio v-model="isAutoConfigTime" :label="true">{{ $t("SYSTEM_INFO.AUTO_GET_TIME") }}</el-radio></span
        >
        <span class="item-after">{{ configAutoTime | formatTime }}</span>
      </div>
      <!-- <div class="system-info-item-other"><span class="item-before">系统运行时间</span><span class="item-after">21分钟</span></div> -->

      <div class="system-info-btns">
        <div v-permission="'control'">
          <button class="def-btn" @click="getTimeConfig">{{ $t("COMMON.REFRESH") }}</button>
          <button class="def-btn" @click="setTimeConfig">{{ $t("COMMON.APPLY") }}</button>
        </div>
      </div>

      <!-- <div class="inner-container-title">{{ $t("SYSTEM_INFO.CASE_TEMP") }}</div>
      <div class="system-info-item-other">
        <span class="item-before">{{ $t("SYSTEM_INFO.LOW_TEMP") }}</span>
        <span class="item-after"><input type="text" class="def-input" /> ℃</span>
      </div>

      <div class="system-info-item-other">
        <span class="item-before">{{ $t("SYSTEM_INFO.HIG_TEMP") }}</span
        ><span class="item-after"><input type="text" class="def-input" /> ℃</span>
      </div> -->
    </div>

    <!-- <div class="system-info-btns">
      <div v-permission="'control'">
        <button class="def-btn" @click="getTempConfig">{{ $t("COMMON.REFRESH") }}</button>
        <button class="def-btn" @click="setTempConfig">{{ $t("COMMON.APPLY") }}</button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "system-info",
  data() {
    return {
      isAutoConfigTime: true,
      configManualTime: Date.now(),
      configAutoTime: Date.now(),
      configAutoTimeTimer: null,
    };
  },
  watch: {
    isAutoConfigTime: {
      handler(v) {
        if (!v) return;
        this.getConfigManualTime();
      },
      immediate: true,
    },
  },
  beforeDestroy() {
    clearInterval(this.configAutoTimeTimer);
    this.configAutoTimeTimer = null;
  },
  methods: {
    getTimeConfig() {},
    setTimeConfig() {
      const { isAutoConfigTime, configManualTime, configAutoTime } = this;
      const utctime = isAutoConfigTime ? configAutoTime : configManualTime;
      const data = { otn2000: { boardname: "NMU", utctime: parseInt(utctime / 1000), type: "set_systime" } };

      this.$http
        .post(data)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getConfigManualTime() {
      this.configAutoTimeTimer = setInterval(() => {
        this.configAutoTime = Date.now();
      }, 1000);
    },
    getTempConfig() {},
    setTempConfig() {},
  },
};
</script>

<style scoped lang="scss">
.system-info-btns {
  text-align: right;
  margin-bottom: 20px;
}

.system-info-wrapper {
  .system-info-item-other {
    display: flex;
    align-items: center;
    color: #919191;

    & > span {
      width: 50%;
      height: 48px;
      line-height: 48px;
    }
  }
}
</style>
