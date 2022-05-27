<template>
  <div class="board-otu25g-view-wrapper board-item-view-wrapper">
    <div class="board-item-name"><span>4*25G OTU</span></div>
    <div class="board-link-wrapper otu25g-link-wrapper">
      <div class="board-light"><span class="k-name">PWR</span><span class="k-item suc"></span></div>
      <div class="board-light"><span class="k-name">RUN</span><span class="k-item run-los"></span></div>
      <div class="board-light"><span class="k-name">LINK</span><span class="k-item" :class="light[2] ? 'suc' : 'run-link'"></span></div>
      <div class="board-light"><span class="k-name">STAT</span><span class="k-item" :class="light[3] ? 'war' : 'suc'"></span></div>
    </div>

    <div class="board-trx-wrapper otu25g-trx-wrapper1">
      <div class="trx-item">
        <div class="trx-item-line-small"><span>Cin</span><i></i>1<i></i><span>Lin</span></div>
        <div class="trx-item-main"></div>
        <div class="trx-item-footer"><span>Tx1</span><span>Rx1</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"></div>
        <div class="trx-item-main"></div>
        <div class="trx-item-footer"><span>Tx2</span><span>Rx2</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-line-small"><span>Cin</span><i></i>2<i></i><span>Lin</span></div>
        <div class="trx-item-main"></div>
        <div class="trx-item-footer"><span>Tx3</span><span>Rx3</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"></div>
        <div class="trx-item-main"></div>
        <div class="trx-item-footer"><span>Tx4</span><span>Rx4</span></div>
      </div>
    </div>

    <div class="board-link-column-wrapper otu25g-link-wrapper2">
      <div class="link-light">
        <div class="link-name">C1LOS</div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-name">L1LOS</div>
        <div class="link-name">C2LOS</div>
        <div class="link-name">L2LOS</div>
      </div>

      <div class="link-light">
        <div class="link-name">C3LOS</div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-square"></div>
        <div class="link-name">L3LOS</div>
        <div class="link-name">C4LOS</div>
        <div class="link-name">L4LOS</div>
      </div>
    </div>

    <div class="board-trx-wrapper otu25g-trx-wrapper2">
      <div class="trx-item">
        <div class="trx-item-line-small"><span>Cin</span><i></i>3<i></i><span>Lin</span></div>
        <div class="trx-item-main"></div>
        <div class="trx-item-footer"><span>Tx5</span><span>Rx5</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"></div>
        <div class="trx-item-main"></div>
        <div class="trx-item-footer"><span>Tx6</span><span>Rx6</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-line-small"><span>Cin</span><i></i>4<i></i><span>Lin</span></div>
        <div class="trx-item-main"></div>
        <div class="trx-item-footer"><span>Tx7</span><span>Rx7</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"></div>
        <div class="trx-item-main"></div>
        <div class="trx-item-footer"><span>Tx8</span><span>Rx8</span></div>
      </div>
    </div>

    <div class="board-rst-wrapper otu25g-rst-wrapper">
      <div class="rst-name">RST</div>
      <div class="rst-circle"></div>
    </div>
  </div>
</template>

<script>
import { decimalToBinary } from "@/utils";

export default {
  name: "board-otu25g",
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
.board-otu25g-view-wrapper {
  .otu25g-link-wrapper {
    left: 14px;
  }

  .otu25g-trx-wrapper1 {
    left: 62px;
  }

  .otu25g-trx-wrapper2 {
    left: 293px;
  }

  .otu25g-link-wrapper2 {
    left: 250px;
    top: -17px;
  }

  .otu25g-rst-wrapper {
    left: 491px;
    top: 10px;
  }
}
</style>
