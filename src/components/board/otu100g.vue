<template>
  <div class="board-otu100g-view-wrapper composite board-item-view-wrapper">
    <div class="board-item-name"><span>40&100G OTU</span></div>
    <div class="board-link-wrapper otu100g-link-wrapper">
      <div class="board-light"><span class="k-name">PWR</span><span class="k-item suc"></span></div>
      <div class="board-light"><span class="k-name">RUN</span><span class="k-item run-los"></span></div>
      <div class="board-light"><span class="k-name">LINK</span><span class="k-item" :class="light[2] ? 'suc' : 'run-link'"></span></div>
      <div class="board-light"><span class="k-name">STAT</span><span class="k-item" :class="light[2] ? 'war' : 'suc'"></span></div>
    </div>

    <div class="board-console-wrapper"><span>Console</span></div>

    <div class="board-trx-wrapper otu100g-trx-wrapper">
      <div class="trx-item">
        <div class="trx-item-footer"><span>Tx1</span><span>Rx1</span></div>
        <div class="trx-item-main"></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-footer"><span>Tx2</span><span>Rx2</span></div>
        <div class="trx-item-main"></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-footer"><span>Tx3</span><span>Rx3</span></div>
        <div class="trx-item-main"></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-footer"><span>Tx3</span><span>Rx3</span></div>
        <div class="trx-item-main"></div>
      </div>
    </div>

    <div class="board-link-column-wrapper otu100g-link-wrapper2">
      <div class="link-light">
        <div class="link-name">L1LOS</div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-name">L2LOS</div>
        <div class="link-name">L3LOS</div>
        <div class="link-name">L4LOS</div>
      </div>

      <div class="link-light">
        <div class="link-name">C1LOS</div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-name">C2LOS</div>
        <div class="link-name">C3LOS</div>
        <div class="link-name">C4LOS</div>
      </div>
    </div>

    <div class="board-qsfp-wrapper otu100g-qsfp-wrapper">
      <div class="board-qsfp-n"><span class="f-10">Tx</span><span class="f-10">Rx</span></div>
      <div class="board-qsfp-k">QSFP28</div>
    </div>

    <div class="board-rst-wrapper otu100g-rst-wrapper">
      <div class="rst-name">RST</div>
      <div class="rst-circle"></div>
    </div>
  </div>
</template>

<script>
import { decimalToBinary } from "@/utils";

export default {
  name: "board-otu100g",
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
.board-otu100g-view-wrapper {
  .otu100g-link-wrapper {
    left: 15px;
    top: 69px;
  }

  .otu100g-trx-wrapper {
    left: 115px;
  }

  .otu100g-link-wrapper2 {
    left: 305px;
    top: 39px;
  }

  .otu100g-qsfp-wrapper {
    left: 386px;
    top: 65px;
  }

  .otu100g-rst-wrapper {
    left: 471px;
  }
}
</style>
