<template>
  <div class="board-edfa-view-wrapper board-item-view-wrapper">
    <div class="board-item-name"><span>EDFA</span></div>
    <div class="board-link-wrapper">
      <div class="board-light"><span class="k-name">PWR</span><span class="k-item suc"></span><span class="k-item" :class="light[4] ? 'war' : 'suc'"></span><span class="k-name">Ptemp</span></div>
      <div class="board-light"><span class="k-name">RUN</span><span class="k-item run-los"></span><span class="k-item" :class="light[5] ? 'war' : 'suc'"></span><span class="k-name">Pcur</span></div>
      <div class="board-light">
        <span class="k-name">LINK</span><span class="k-item" :class="light[2] ? 'suc' : 'run-link'"></span><span class="k-item" :class="light[6] ? 'war' : 'suc'"></span><span class="k-name">In</span>
      </div>
      <div class="board-light">
        <span class="k-name">Temp</span><span class="k-item" :class="light[3] ? 'war' : 'suc'"></span><span class="k-item" :class="light[7] ? 'war' : 'suc'"></span><span class="k-name">Out</span>
      </div>
    </div>

    <div class="board-console-wrapper"><span>Console</span></div>

    <div class="board-rst-wrapper edfa-rst-wrapper">
      <div class="rst-name">RST</div>
      <div class="rst-circle"></div>
    </div>

    <div class="tx-rx-wrapper edfa-tx-rx-wrapper">
      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>OUT</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>IN</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>MON</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>NA</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { decimalToBinary } from "@/utils";

export default {
  name: "board-edfa",
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
.board-edfa-view-wrapper {
  .edfa-tx-rx-wrapper {
    left: 245px;
    top: -5px;

    .tx-rx-inner-item + .tx-rx-inner-item {
      margin-left: 50px;
    }
  }
}
</style>
