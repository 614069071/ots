<template>
  <div class="pupur-wrapper" v-show="visible">
    <div class="pupur-container-wrapper">
      <div class="pupur-title-wrapper">
        <span class="close-button" @click="$emit('update:visible', false)"><i class="el-icon-close"></i></span>
      </div>
      <div class="pupur-content-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pupur",
  props: {
    visible: {
      type: Boolean,
    },
  },
};
</script>

<style scoped lang="scss">
.pupur-wrapper {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  z-index: 100;

  .pupur-container-wrapper {
    width: 90%;
    min-width: 1450px;
    height: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: #fff;
    padding: 0 10px 10px 10px;
  }

  .pupur-title-wrapper {
    display: flex;
    justify-content: flex-end;
    background-color: #fff;
    // padding: 10px 10px 0 0;

    .close-button {
      width: 30px;
      height: 20px;
      text-align: center;
      line-height: 30px;
      // margin: -10px -10px 0 0;
      cursor: pointer;
      text-align: center;
    }
  }

  .pupur-content-wrapper {
    flex: 1;
    overflow: hidden;
  }
}
</style>
