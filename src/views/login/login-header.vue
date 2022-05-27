<template>
  <div class="login-header-wrapper">
    <div class="logo-wrapper">
      <img src="../../assets/images/logo-white.png" alt="" />
    </div>
    <div class="login-lang-set">
      <span>{{ $t("LOGIN.LANGUAGE") }}</span>
      <select class="lang-select" v-model="langType" @change="langChange">
        <option value="zh">中文</option>
        <option value="en">English</option>
      </select>
    </div>
  </div>
</template>

<script>
import { updateAlarmNameAssoc } from "@/utils";
import { setI18Locale } from "@/locale";
export default {
  name: "LoginHeader",
  data() {
    return {
      langType: "zh",
    };
  },
  created() {
    const lang = localStorage.getItem("otn-lang") || "zh";
    this.$i18n.locale = lang;
    this.langType = lang;
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    langChange(e) {
      const value = e.target.value;
      setI18Locale(value);

      updateAlarmNameAssoc();
    },
  },
};
</script>

<style scoped lang="scss">
.login-header-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 0 60px;
  margin-top: 20px;
}

.login-header-wrapper select {
  background-color: #003366;
  color: #fff;
}

.logo-wrapper {
  height: 54px;
  width: 110px;
}

.lang-select {
  border: none;
}
</style>
