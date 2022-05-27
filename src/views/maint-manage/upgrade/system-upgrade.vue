<template>
  <!-- <div class="chose-wrapper">
    <span>{{ $t("UPGRADE.CHECK_UPGRADE_FILE") }}</span>
    <input ref="uploadRef" type="file" accept=".bin" name="" id="" />
    <button class="def-btn" @click="upload">{{ $t("UPGRADE.UPGRADE") }}</button>
  </div> -->

  <div class="chose-wrapper">
    <span>{{ $t("UPGRADE.CHECK_UPGRADE_FILE") }}</span>
    <input ref="uploadRef" hidden type="file" accept=".bin" id="upload" @change="uploadChange" />
    <div class="upload-wrapper">
      <label for="upload" class="upload-check-button">{{ $t("UPGRADE.SELECT_FILE") }}</label>
      <div class="file-name-wrapper">{{ fileName }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "system-upgrade",
  data() {
    return {
      uploadFile: null,
    };
  },
  computed: {
    fileName() {
      return this.uploadFile ? this.uploadFile.name : this.$t("SUP.NO_FILE_SELECT");
    },
  },
  methods: {
    uploadChange(e) {
      const [file] = e.target.files;
      this.uploadFile = file;
    },
  },
};
</script>

<style scoped lang="css">
.chose-wrapper {
  margin: 15px 0;
  display: flex;
}

.chose-wrapper > span {
  display: inline-block;
  text-align: center;
  color: #959595;
  width: 180px;
  padding-right: 30px;
  text-align: right;
}

.upload-wrapper {
  display: flex;
  margin-right: 20px;
}

.upload-check-button {
  display: block;
  padding: 0 7px;
  height: 22px;
  line-height: 24px;
  border-radius: 4px;
  white-space: nowrap;
  margin-right: 20px;
  border: 1px solid #999;
  cursor: pointer;
}
</style>
