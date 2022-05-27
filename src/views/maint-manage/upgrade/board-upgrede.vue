<template>
  <div>
    <div class="chose-wrapper">
      <span>{{ $t("COMMON.BOARD") }}</span>
      <el-select size="mini" v-model="uploadSlot">
        <el-option :label="$t('COMMON.SLOT') + slot" :value="slot" v-for="{ slot } in onlineBoardList" :key="slot"></el-option>
      </el-select>
    </div>

    <div class="chose-wrapper">
      <span>{{ $t("COMMON.VERSION") }}</span>
      <div class="board-ver-wrapper">{{ uploadBoard.s_ver }}</div>
    </div>

    <div class="chose-wrapper">
      <span>{{ $t("UPGRADE.CHECK_UPGRADE_FILE") }}</span>
      <input ref="uploadRef" hidden type="file" accept=".bin" id="upload" @change="uploadChange" />
      <div class="upload-wrapper">
        <label for="upload" class="upload-check-button">{{ $t("UPGRADE.SELECT_FILE") }}</label>
        <div class="file-name-wrapper">{{ fileName }}</div>
      </div>
    </div>

    <div class="chose-wrapper">
      <span></span>
      <button class="def-btn" @click="uploadFileSubmit">{{ $t("UPGRADE.UPLOAD_FILE") }}</button>
      <button class="def-btn" style="margin-left:30px;" :disabled="!isCheckFile" @click="startUpgrade">{{ $t("UPGRADE.UPGRADE") }}</button>
    </div>

    <div class="progress-pupur-wrapper" v-show="isStart">
      <div class="progress-title">{{ pupurHint }}</div>
      <div class="progress-bar-wrapper" v-if="isUpgrade">
        <div class="progress-bar-inner" :class="isStart ? 'upload-start' : ''"></div>
      </div>
    </div>
  </div>
</template>

<script>
let pupurExcutorTimer = null;
let restoreTimer = null;

export default {
  name: "board-upgrede",
  data() {
    return {
      uploadFile: null,
      isStart: false,
      onlineBoardList: [], //[{ slot: 4, boardname: "olp" }],
      uploadSlot: null,
      isUpgrade: true,
      pupurHint: "单板升级中...",
      isCheckFile: false,
    };
  },
  computed: {
    fileName() {
      return this.uploadFile ? this.uploadFile.name : this.$t("SUP.NO_FILE_SELECT");
    },
    uploadBoard() {
      return this.onlineBoardList.find(e => e.slot === this.uploadSlot) || {};
    },
  },
  mounted() {
    this.$bus.$on("onBoardList", v => {
      this.onlineBoardList = v.filter(e => e.status && e.slot !== 8);
    });
  },
  beforeDestroy() {
    this.$bus.$off("onBoardList");
  },
  methods: {
    uploadChange(e) {
      const [file] = e.target.files;
      this.uploadFile = file;
    },
    uploadFileSubmit() {
      const file = this.uploadFile;

      if (!this.uploadSlot) {
        return alert(this.$t("UPGRADE.CHECK_UPGRADE_SLOT"));
      }

      if (!file) {
        return alert(this.$t("UPGRADE.CHECK_UPGRADE_FILE2"));
      }

      const fd = new FormData();
      fd.append("slot", this.uploadSlot);
      fd.append("file", file);

      this.$http
        .action("/action/upload", fd)
        .then(res => {
          if (res.otn2000_ack.retcode !== 0) {
            alert(this.$t("COMMON.FAIL"));
          } else {
            alert(this.$t("COMMON.SUCCESS"));
            this.isCheckFile = true;
          }
        })
        .catch(() => {
          alert(this.$t("COMMON.FAIL"));

          setTimeout(() => {
            this.isStart = false;
          }, 1000);
        });
    },
    startUpgrade() {
      if (!this.uploadSlot) {
        return alert(this.$t("UPGRADE.CHECK_UPGRADE_SLOT"));
      }

      const { boardname, slot } = this.uploadBoard;
      const data = { otn2000: { boardname, slot, type: "firmware_update" } };

      this.isStart = true;

      //  timeout: 1000,

      this.$http
        .action("/action/jsoncdt", data, { timeout: 10000 })
        .then(res => {
          console.log("start res", res);
          clearTimeout(pupurExcutorTimer);

          if (res.otn2000_ack.code === 0) {
            // 成功
            // alert(this.$t("UPGRADE.UPGRADE_SUC"));
            this.pupurHint = this.$t("UPGRADE.UPGRADE_SUC");

            setTimeout(() => {
              this.pupurHint = "单板重启中...";
              setTimeout(() => {
                this.getBoardList();
              }, 5000);
            }, 1000);
          } else {
            /* 
              @失败
              1 发送文件长度失败 
              2 发送MD5SUN失败 
              3 发送文件数据失败 
              4 接受单板响应失败 
              5 flash出错 
              6 md5sum校验出错 
              7 位置错误
             */
            // alert(this.$t("UPGRADE.UPGRADE_ERR"));
            this.pupurHint = this.$t("UPGRADE.UPGRADE_ERR");
          }
        })
        .catch(err => {
          console.log("start err", err);
          this.pupurHint = this.$t("UPGRADE.UPGRADE_ERR");
          setTimeout(() => {
            this.isStart = false;
          }, 1000);
        })
        .finally(() => {
          this.isUpgrade = false;
        });
    },
    getBoardList() {
      const data = { otn2000: { boardname: "board_view", type: "get_info" } };

      this.$http
        .post(data)
        .then(res => {
          if (!res) return;

          const list = res.otn2000_ack.channels || [];
          const ver = list.find(e => e.slot === this.uploadSlot).s_ver;
          this.pupurHint = "重启成功，当前版本为" + ver;

          setTimeout(() => {
            this.initConfig();
          }, 2000);
        })
        .catch(() => {})
        .finally(() => {});
    },
    initConfig() {
      this.isStart = false;
      this.isUpgrade = true;
      this.pupurHint = "单板升级中...";
      clearTimeout(restoreTimer);
    },
  },
};
</script>

<style scoped lang="css">
.board-upgrede-submit {
  margin-top: 20px;
  width: 140px;
}

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
.board-upgrade-submit-wrapper {
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

.board-upgrede-btns {
  margin: 30px 0 40px 0;
}
</style>

<style>
.board-check-wrapper .el-checkbox {
  margin-top: 24px;
}

.progress-bar-inner.upload-start {
  animation: width linear 5s forwards;
}
</style>
