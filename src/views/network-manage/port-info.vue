<template>
  <div>
    <div class="inner-container-title">{{ $t("PORT_INFO.PORT_INFO") }}</div>

    <div class="port-info-wrapper">
      <div class="system-info-item">
        <span>{{ $t("PORT_INFO.BAUD_RATE") }}</span
        ><span>11520</span>
      </div>
      <div class="system-info-item">
        <span>{{ $t("PORT_INFO.DATA_BIT") }}</span
        ><span>3</span>
      </div>
      <div class="system-info-item">
        <span>{{ $t("PORT_INFO.ODD_EVEN_CHECK") }}</span
        ><span>none</span>
      </div>
      <div class="system-info-item">
        <span>{{ $t("PORT_INFO.STOP_BIT") }}</span
        ><span>1</span>
      </div>
      <div class="system-info-item">
        <span>{{ $t("PORT_INFO.FLOW_CONTROL") }}</span
        ><span>none</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "port-info",

  methods: {},
};
</script>

<style scoped lang="scss">
.port-info-wrapper {
  $color: #a2a2a2;
  border-top: 1px solid $color;
  border-left: 1px solid $color;
  margin-top: 10px;
  .system-info-item {
    display: flex;
    align-items: center;
    color: $color;

    span {
      width: 50%;
      height: 48px;
      line-height: 48px;
      border-right: 1px solid $color;
      border-bottom: 1px solid $color;
    }

    span:first-child {
      text-align: center;
    }
    span:last-child {
      padding-left: 50px;
    }
  }
}
</style>
