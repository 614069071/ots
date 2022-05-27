<template>
  <div class="board-nmu-view-wrapper board-item-view-wrapper">
    <div class="board-item-name"><span>NMU</span></div>

    <div class="board-link-wrapper nmu-link-wrapper">
      <div class="board-light">
        <span class="k-name">PWR</span><span class="k-item suc"></span><span class="k-item" :class="light[4] ? 'suc' : 'run-link'"></span><span class="k-name">OLINK1</span>
      </div>
      <div class="board-light">
        <span class="k-name">RUN</span><span class="k-item run-los"></span><span class="k-item" :class="light[5] ? 'suc' : 'run-link'"></span><span class="k-name">OLINK2</span>
      </div>
      <div class="board-light">
        <span class="k-name">PROG</span><span class="k-item" :class="light[2] ? 'war' : 'suc'"></span><span class="k-item" :class="light[6] ? 'suc' : 'run-link'"></span
        ><span class="k-name">OLINK3</span>
      </div>
      <div class="board-light">
        <span class="k-name">STAT</span><span class="k-item" :class="light[3] ? 'war' : 'suc'"></span><span class="k-item" :class="light[7] ? 'suc' : 'run-link'"></span
        ><span class="k-name">BLINK</span>
      </div>
    </div>

    <div class="board-console-wrapper"><span>Console</span></div>

    <div class="board-rst-wrapper">
      <div class="rst-name">RST</div>
      <div class="rst-circle"></div>
    </div>

    <div class="board-trx-wrapper nmu-trx-wrapper">
      <div class="trx-item">
        <div class="trx-item-footer"><span>Tx1</span><span>Rx1</span></div>
        <div class="trx-item-main" :class="port[3] ? 'suc' : ''"></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-footer"><span>Tx2</span><span>Rx2</span></div>
        <div class="trx-item-main" :class="port[4] ? 'suc' : ''"></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-footer"><span>Tx3</span><span>Rx3</span></div>
        <div class="trx-item-main" :class="port[5] ? 'suc' : ''"></div>
      </div>
    </div>

    <div class="board-eth-wrapper nmu-eth-wrapper">
      <div class="eth-item">
        <div class="eth-item-main" :class="port[0] ? 'suc' : ''"></div>
        <div class="eth-item-title">ETH1</div>
      </div>
      <div class="eth-item">
        <div class="eth-item-main" :class="port[1] ? 'suc' : ''"></div>
        <div class="eth-item-title">ETH2</div>
      </div>
      <div class="eth-item">
        <div class="eth-item-main" :class="port[2] ? 'suc' : ''"></div>
        <div class="eth-item-title">ETH3</div>
      </div>
    </div>
    <div class="board-usb-wrapper nmu-usb-wrapper">
      <div class="usb-title">USB</div>
      <div class="usb-main"></div>
    </div>
  </div>
</template>

<script>
import { decimalToBinary } from "@/utils";

export default {
  name: "board-nmu",
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
.board-nmu-view-wrapper {
  .nmu-trx-wrapper {
    left: 148px;
    bottom: -5px;

    .trx-item + .trx-item {
      margin-left: 10px;
    }
  }

  .nmu-eth-wrapper {
    left: 300px;
    bottom: -8px;
  }

  .nmu-usb-wrapper {
    right: 34px;
    bottom: 4px;
  }
}
</style>
