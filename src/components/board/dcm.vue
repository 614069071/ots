<template>
  <div class="board-dcm-view-wrapper board-item-view-wrapper">
    <div class="board-item-name"><span>DCM</span></div>

    <div class="board-link-wrapper">
      <div class="board-light"><span class="k-name">PWR</span><span class="k-item suc"></span></div>
      <div class="board-light"><span class="k-name">RUN</span><span class="k-item run-los"></span></div>
      <div class="board-light"><span class="k-name">LINK</span><span class="k-item" :class="light[2] ? 'suc' : 'run-link'"></span></div>
      <div class="board-light"><span class="k-name">STAT</span><span class="k-item" :class="light[3] ? 'war' : 'suc'"></span></div>
    </div>

    <div class="board-console-wrapper"><span>Console</span></div>

    <div class="board-rst-wrapper">
      <div class="rst-name">RST</div>
      <div class="rst-circle"></div>
    </div>

    <div class="tx-rx-wrapper">
      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <div class="tx-rx-item-main"></div>
          <i>L1</i>
        </div>
        <div class="tx-rx-item">
          <div class="tx-rx-item-main"></div>
          <i>L2</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { decimalToBinary } from "@/utils";

export default {
  name: "board-dcm",
  props: ["data"],
  computed: {
    port() {
      return decimalToBinary(this.data.port_status);
    },
    light() {
      return decimalToBinary(this.data.light_status);
    },
  },
};
</script>

<style lang="scss">
.board-dcm-view-wrapper {
  .board-link-wrapper {
    left: 14px;
    top: 15px;
  }

  .tx-rx-wrapper {
    left: 382px;
    top: -6px;
  }
}
</style>
