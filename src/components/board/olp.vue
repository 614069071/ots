<template>
  <div class="board-olp-view-wrapper board-item-view-wrapper">
    <div class="board-item-name"><span>OLP</span></div>
    <div class="board-link-wrapper olp-link-wrapper">
      <div class="board-light"><span class="k-name">PWR</span><span class="k-item suc"></span><span class="k-item" :class="light[5] ? 'war' : 'suc'"></span><span class="k-name">Rx1</span></div>
      <div class="board-light"><span class="k-name">RUN</span><span class="k-item run-los"></span><span class="k-item" :class="light[6] ? 'war' : 'suc'"></span><span class="k-name">Rx2</span></div>
      <div class="board-light">
        <span class="k-name">LINK</span><span class="k-item" :class="light[2] ? 'suc' : 'run-link'"></span><span class="k-item" :class="light[7] ? 'war' : 'suc'"></span><span class="k-name">Rx</span>
      </div>
      <div class="board-light">
        <span class="k-name">Pri</span><span class="k-item" :class="light[3] ? 'suc' : ''"></span><span class="k-item" :class="light[4] ? 'suc' : ''"></span><span class="k-name">Sec</span>
      </div>
    </div>

    <div class="board-console-wrapper"><span>Console</span></div>

    <div class="board-rst-wrapper">
      <div class="rst-name">RST</div>
      <div class="rst-circle"></div>
    </div>

    <div class="tx-rx-wrapper olp-tx-rx-wrapper">
      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>Tx</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>Rx</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>Tx2</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>Rx2</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>Tx1</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>Rx1</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { decimalToBinary } from "@/utils";

export default {
  name: "board-olp",
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
.board-olp-view-wrapper {
  .olp-tx-rx-wrapper {
    left: 222px;
    top: -6px;

    .tx-rx-inner-item + .tx-rx-inner-item {
      margin-left: 50px;
    }
  }
}
</style>
