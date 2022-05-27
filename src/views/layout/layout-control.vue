<template>
  <div class="aside-footer-wrapper">
    <div class="setting-btns-wrapper">
      <div v-if="isAdmin" class="setting-btn-wrapper" @click="restore">
        <div><i class="c-icon icon-back"></i></div>
        <div>{{ $t("LOYOUT.RESTART") }}</div>
      </div>

      <div v-if="isAdmin" class="vertical-line"></div>

      <div class="setting-btn-wrapper" @click="$router.push('/login')">
        <div><i class="c-icon icon-next"></i></div>
        <div>{{ $t("LOYOUT.EXIT") }}</div>
      </div>
    </div>

    <div class="progress-pupur-wrapper" v-show="isStart">
      <div class="progress-title">设备正在重新启动。</div>
      <div class="progress-bar-wrapper">
        <div class="progress-bar-inner" :class="isStart ? 'start' : ''"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { storages } from "@/utils";
export default {
  name: "LayoutControl",
  data() {
    return {
      isStart: false,
    };
  },
  computed: {
    isAdmin() {
      const role = storages.get("__role__");
      const isAdmin = role === "2";
      return isAdmin;
    },
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    restore() {
      this.$confirm(this.$t("COMMON.CONIFRM_RESTORE"))
        .then(() => {
          const data = { otn2000: { boardname: "NMU", type: "reboot" } };

          this.$http
            .post(data)
            .then(res => {
              console.log("reboot", res);
            })
            .catch(() => {})
            .finally(() => {});

          this.startReboot();
        })
        .catch(() => {
          // console.log('cancel');
        });
    },
    startReboot() {
      this.isStart = true;
      this.$bus.$emit("stopUpdateBoardView");
      this.$bus.$emit("stopUpdateSys");

      setTimeout(() => {
        this.$router.push("/login");
      }, 36000);
    },
  },
};
</script>

<style scoped lang="scss">
.aside-footer-wrapper {
  height: 60px;

  .setting-btns-wrapper {
    display: flex;
    justify-content: center;

    .setting-btn-wrapper {
      cursor: pointer;
      text-align: center;
    }

    .vertical-line {
      height: 50px;
      border-left: 1px solid #848484;
      margin: 0 30px;
    }
  }
}
</style>
