<template>
  <div class="board-ocp-view-wrapper board-item-view-wrapper">
    <div class="board-item-name"><span>2*10G OCP</span></div>
    <div class="board-link-wrapper ocp-link-wrapper1">
      <div class="board-light"><span class="k-name">PWR</span><span class="k-item suc"></span></div>
      <div class="board-light"><span class="k-name">RUN</span><span class="k-item run-los"></span></div>
      <div class="board-light"><span class="k-name">LINK</span><span class="k-item" :class="light[2] ? 'suc' : 'run-link'"></span></div>
      <div class="board-light"><span class="k-name">STAT</span><span class="k-item" :class="light[3] ? 'war' : 'suc'"></span></div>
    </div>

    <div class="board-trx-wrapper ocp-trx-wrapper1">
      <div class="trx-item">
        <div class="trx-item-line"><span>Cin</span><i></i><span>L2in</span><i></i><span>L1in</span></div>
        <div class="trx-item-main" :class="port[0] ? 'suc' : ''"></div>
        <div class="trx-item-footer"><span>Tx</span><span>Rx</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"></div>
        <div class="trx-item-main" :class="port[1] ? 'suc' : ''"></div>
        <div class="trx-item-footer"><span>Tx2</span><span>Rx2</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"></div>
        <div class="trx-item-main" :class="port[2] ? 'suc' : ''"></div>
        <div class="trx-item-footer"><span>Tx1</span><span>Rx1</span></div>
      </div>
    </div>

    <div class="board-link-wrapper ocp-link-wrapper2">
      <div class="board-light">
        <span class="k-name">1L1LOS</span><span class="k-item" :class="light[5] ? '' : 'suc'"></span><span class="k-item" :class="light[8] ? '' : 'suc'"></span><span class="k-name">2L1LOS</span>
      </div>
      <div class="board-light">
        <span class="k-name">1L2LOS</span><span class="k-item" :class="light[6] ? '' : 'suc'"></span><span class="k-item" :class="light[9] ? '' : 'suc'"></span><span class="k-name">2L2LOS</span>
      </div>
      <div class="board-light">
        <span class="k-name">1CLOS</span><span class="k-item" :class="light[4] ? '' : 'suc'"></span><span class="k-item" :class="light[7] ? '' : 'suc'"></span><span class="k-name">2CLOS</span>
      </div>
    </div>

    <div class="board-trx-wrapper ocp-trx-wrapper2">
      <div class="trx-item">
        <div class="trx-item-line"><span>Cin</span><i></i><span>L2in</span><i></i><span>L1in</span></div>
        <div class="trx-item-main" :class="port[3] ? 'suc' : ''"></div>
        <div class="trx-item-footer"><span>Tx</span><span>Rx</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"></div>
        <div class="trx-item-main" :class="port[4] ? 'suc' : ''"></div>
        <div class="trx-item-footer"><span>Tx2</span><span>Rx2</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"></div>
        <div class="trx-item-main" :class="port[5] ? 'suc' : ''"></div>
        <div class="trx-item-footer"><span>Tx1</span><span>Rx1</span></div>
      </div>
    </div>

    <div class="board-rst-wrapper ocp-rst-wrapper">
      <div class="rst-name">RST</div>
      <div class="rst-circle"></div>
    </div>
  </div>
</template>

<script>
import { decimalToBinary } from "@/utils";

export default {
  name: "board-ocp10g",
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

<style scoped lang="scss">
.board-ocp-view-wrapper {
  .ocp-link-wrapper1 {
    left: 14px;
  }

  .ocp-link-wrapper2 {
    left: 216px;
    top: 15px;
  }

  .ocp-rst-wrapper {
    left: 470px;
  }

  .ocp-trx-wrapper1 {
    left: 88px;
  }

  .ocp-trx-wrapper2 {
    left: 310px;
  }
}
</style>
