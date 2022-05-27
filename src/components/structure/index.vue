<template>
  <div class="structure-wrapper">
    <span class="power-hint"></span>
    <span class="alarm-hint"></span>
    <div class="structure-inner-wrapper">
      <div class="structure-item-wrapper" v-for="(item, index) in list" :key="index" @click="setBoard(item)">
        <div class="structure-board-inner">
          <component v-if="item.boardname && item.status" :is="`board-${item.boardname.toLowerCase()}`" :data="item"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BoardNmu from "@/components/board/nmu";
import BoardOlp from "@/components/board/olp";
import BoardD16 from "@/components/board/d16";
import BoardD40 from "@/components/board/d40";
import BoardM16 from "@/components/board/m16";
import BoardM40 from "@/components/board/m40";
import BoardMd8 from "@/components/board/md8";
import BoardDcm from "@/components/board/dcm";
import BoardEdfa from "@/components/board/edfa";
import BoardOcp10g from "@/components/board/ocp10g";
import BoardOtu10g from "@/components/board/otu10g";
import BoardOtu25g from "@/components/board/otu25g";
import BoardOtu100g from "@/components/board/otu100g";
import BoardDco200g from "@/components/board/dco200g";
import BoardMd16sfa from "@/components/board/md16sfa";
import BoardMd16sfb from "@/components/board/md16sfb";

export default {
  name: "structure",
  components: {
    BoardNmu,
    BoardOlp,
    BoardD16,
    BoardM16,
    BoardMd8,
    BoardDcm,
    BoardD40,
    BoardM40,
    BoardEdfa,
    BoardOcp10g,
    BoardOtu10g,
    BoardOtu25g,
    BoardOtu100g,
    BoardDco200g,
    BoardMd16sfa,
    BoardMd16sfb,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    setBoard(v) {
      this.$bus.$emit("onBoardView", v);
    },
  },
  beforeDestroy() {
    this.$bus.$off("onBoardView");
  },
};
</script>

<style scoped>
.structure-wrapper {
  width: 1200px;
  height: 284px;
  background-color: grey;
  background: url("../../assets/images/entirety.jpg") center/contain no-repeat;
  margin: 0 auto;
  position: relative;
}

.structure-inner-wrapper {
  width: 1042px;
  height: 240px;
  position: absolute;
  left: 32px;
  bottom: 2px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  align-content: flex-start;
}

.structure-item-wrapper {
  height: 60px;
  width: 50% !important;
  box-sizing: border-box;
  position: relative;
}

.structure-board-inner {
  position: absolute;
  left: 0;
  bottom: 0;
}

.power-hint,
.alarm-hint {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  position: absolute;
  background-color: #ececec;
  top: 165px;
}

.power-hint {
  right: 86px;
  background-color: #1ef087;
}

.alarm-hint {
  right: 73px;
}

.alarm-hint.war {
  background-color: #ff6262;
}
</style>
