<template>
  <div>
    <div class="inner-container-title">{{ $t("IP_CONFIG.IP_CONFIG") }}</div>
    <div class="ip-config-form-wrapper">
      <div class="config-form-item">
        <span>{{ $t("COMMON.IP_ADDRESS") }}</span
        ><input class="def-input" type="text" />
      </div>
      <div class="config-form-item">
        <span>{{ $t("COMMON.SUBNET_MASK") }}</span
        ><input class="def-input" type="text" />
      </div>
      <div class="config-form-item">
        <span>{{ $t("COMMON.GATEWAY") }}</span
        ><input class="def-input" type="text" />
      </div>
      <div class="config-form-item">
        <span>{{ $t("COMMON.PORT") }}</span
        ><span>9091</span>
      </div>
      <div class="config-form-item">
        <span>{{ $t("COMMON.MAC_ADDRESS") }}</span
        ><span>3a:3a:3a:3a:3a:3a</span>
      </div>
    </div>

    <div class="ip-config-form-submit">
      <button class="def-btn">{{ $t("COMMON.CHANGE") }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ip-config",
  data() {
    return {
      dataForm: {},
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.ip-config-form-wrapper .config-form-item {
  margin-top: 18px;
  display: flex;

  span:first-child {
    width: 50%;
    height: 32px;
    line-height: 32px;
    text-align: center;
  }
}

.ip-config-form-submit {
  text-align: right;
}
</style>
