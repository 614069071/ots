<template>
  <div class="board-otu10g-view-wrapper board-item-view-wrapper">
    <div class="board-item-name"><span>4*10G OTU</span></div>
    <div class="board-link-wrapper otu10g-link-wrapper1">
      <div class="board-light"><span class="k-name">PWR</span><span class="k-item suc"></span></div>
      <div class="board-light"><span class="k-name">RUN</span><span class="k-item run-los"></span></div>
      <div class="board-light"><span class="k-name">LINK</span><span class="k-item" :class="light[2] ? 'suc' : 'run-link'"></span></div>
      <div class="board-light"><span class="k-name">STAT</span><span class="k-item" :class="light[3] ? 'war' : 'suc'"></span></div>
    </div>

    <div class="board-trx-wrapper otu10g-trx-wrapper1">
      <div class="trx-item">
        <div class="trx-item-line-small"><span>Cin</span><i></i>1<i></i><span>Lin</span></div>
        <div class="trx-item-main" :class="port[0] ? 'suc' : ''"></div>
        <div class="trx-item-footer"><span>Tx1</span><span>Rx1</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"></div>
        <div class="trx-item-main" :class="port[1] ? 'suc' : ''"></div>
        <div class="trx-item-footer"><span>Tx2</span><span>Rx2</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-line-small"><span>Cin</span><i></i>2<i></i><span>Lin</span></div>
        <div class="trx-item-main" :class="port[2] ? 'suc' : ''"></div>
        <div class="trx-item-footer"><span>Tx3</span><span>Rx3</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"></div>
        <div class="trx-item-main" :class="port[3] ? 'suc' : ''"></div>
        <div class="trx-item-footer"><span>Tx4</span><span>Rx4</span></div>
      </div>
    </div>

    <div class="board-link-column-wrapper otu10g-link-wrapper2">
      <div class="link-light">
        <div class="link-name">C1LOS</div>
        <div class="link-square" :class="light[4] ? '' : 'suc'"></div>
        <div class="link-square" :class="light[5] ? '' : 'suc'"></div>
        <div class="link-square" :class="light[6] ? '' : 'suc'"></div>
        <div class="link-square" :class="light[7] ? '' : 'suc'"></div>
        <div class="link-name">L1LOS</div>
        <div class="link-name">C2LOS</div>
        <div class="link-name">L2LOS</div>
      </div>

      <div class="link-light">
        <div class="link-name">C3LOS</div>
        <div class="link-square" :class="light[8] ? '' : 'suc'"></div>
        <div class="link-square" :class="light[9] ? '' : 'suc'"></div>
        <div class="link-square" :class="light[10] ? '' : 'suc'"></div>
        <div class="link-square" :class="light[11] ? '' : 'suc'"></div>
        <div class="link-name">L3LOS</div>
        <div class="link-name">C4LOS</div>
        <div class="link-name">L4LOS</div>
      </div>
    </div>

    <div class="board-trx-wrapper otu10g-trx-wrapper2">
      <div class="trx-item">
        <div class="trx-item-line-small"><span>Cin</span><i></i>3<i></i><span>Lin</span></div>
        <div class="trx-item-main" :class="port[4] ? 'suc' : ''"></div>
        <div class="trx-item-footer"><span>Tx5</span><span>Rx5</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"></div>
        <div class="trx-item-main" :class="port[5] ? 'suc' : ''"></div>
        <div class="trx-item-footer"><span>Tx6</span><span>Rx6</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-line-small"><span>Cin</span><i></i>4<i></i><span>Lin</span></div>
        <div class="trx-item-main" :class="port[6] ? 'suc' : ''"></div>
        <div class="trx-item-footer"><span>Tx7</span><span>Rx7</span></div>
      </div>
      <div class="trx-item">
        <div class="trx-item-guide"></div>
        <div class="trx-item-main" :class="port[7] ? 'suc' : ''"></div>
        <div class="trx-item-footer"><span>Tx8</span><span>Rx8</span></div>
      </div>
    </div>

    <div class="board-rst-wrapper otu10g-rst-wrapper">
      <div class="rst-name">RST</div>
      <div class="rst-circle"></div>
    </div>
  </div>
</template>

<script>
import { decimalToBinary } from "@/utils";

export default {
  name: "board-otu10g",
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
.board-otu10g-view-wrapper {
  .otu10g-link-wrapper1 {
    left: 14px;
    top: 10px;
  }

  .otu10g-trx-wrapper1 {
    left: 47px;
    bottom: -9px;
  }

  .otu10g-trx-wrapper2 {
    left: 283px;
    bottom: -9px;
  }

  .otu10g-link-wrapper2 {
    left: 238px;
    bottom: -19px;
  }

  .otu10g-rst-wrapper {
    left: 487px;
    bottom: 6px;
  }
}
</style>
