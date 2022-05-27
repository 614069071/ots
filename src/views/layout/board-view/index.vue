<template>
  <div class="board-view-wrapper">
    <div class="board-view-view-wrapper">
      <component v-if="info.boardname" :is="'board-' + info.boardname.toLowerCase()" :data="info || {}"></component>
    </div>

    <div class="board-view-form-wrapper">
      <table class="board-table" border="1">
        <tr>
          <td>{{ $t("COMMON.HARDWARE_VERSION") }}</td>
          <td>{{ `${titeData.h_rev ? "V" + titeData.h_rev : ""}` }}</td>
          <td>{{ $t("COMMON.SOFTWARE_VERSION") }}</td>
          <td>{{ `${titeData.s_rev ? "V" + titeData.s_rev : ""}` }}</td>
          <td>{{ $t("COMMON.PROTOL_VER") }}</td>
          <td>{{ `${titeData.p_rev ? "V" + titeData.p_rev : ""}` }}</td>
        </tr>
        <tr>
          <td>{{ $t("LIST.PRODUCTION_DATE") }}</td>
          <td>
            <el-date-picker v-if="isRole == '1'" v-model="titeData.mfgdate" size="mini" type="date" value-format="yyyy-MM-dd" />

            <template v-else>
              {{ titeData.mfgdate }}
            </template>
          </td>
          <td>{{ $t("COMMON.SN") }}</td>
          <td>
            <input class="def-input" v-if="isRole == '1'" type="text" v-model="titeData.sn" />

            <template v-else>
              {{ titeData.sn }}
            </template>
          </td>
          <td>{{ info.boardname | isNoBoardType }}</td>
          <td>{{ titeData.bdtype }}</td>
        </tr>
        <tr>
          <td>{{ $t("HOME.DEVICE_TYPE") }}</td>
          <td>{{ titeData.device_type }}</td>
          <td>{{ $t("COMMON.STATUS") }}</td>
          <td>{{ titeData.alarm_status ? $t("BOARD_INFO.HAVE_ALARM") : $t("BOARD_INFO.NO_ALARM") }}</td>
          <td>{{ $t("COMMON.DES") }}</td>
          <td><input class="def-input" type="text" maxlength="30" v-model="titeData.desc" /></td>
        </tr>
        <tr>
          <td>{{ $t("COMMON.MAC_ADDRESS") }}</td>
          <td>
            <input class="def-input" v-if="isRole == '1'" type="text" v-model="titeData.mac_address" />

            <template v-else>
              {{ titeData.mac_address }}
            </template>
          </td>
          <td>{{ $t("COMMON.SLOT_NUMBER") }}</td>
          <td>{{ info.slot }}</td>
          <td>
            <!-- 测试 -->
          </td>
          <td>
            <!-- <Limit :max="0" v-model="test.text" :check.sync="checks.name1"></Limit> -->
            <!-- <limit-select
              v-model="test.tex"
              :min="5"
              :max="30"
              :check.sync="checks.name1"
              :options="[
                { label: '5', value: 5 },
                { label: '10', value: 10 },
                { label: '15', value: 15 },
              ]"
            /> -->
            <!-- <input v-limit="{ min: 2, max: 120, data: test.text }" type="text" class="def-input" v-model="test.text" /> -->
          </td>
        </tr>
      </table>
    </div>

    <div class="board-change-btns">
      <button class="def-btn" :disabled="refreshTitleDisabled" @click="refreshGetTitle">{{ $t("COMMON.REFRESH") }}</button>
      <button v-permission="'control'" class="def-btn" :disabled="setTilteDisabled" @click="setTilte">{{ $t("COMMON.APPLY") }}</button>
    </div>

    <div class="board-type-container" v-if="isRole != '1' && info.boardname && ['m16', 'd16', 'md8', 'm40', 'd40', 'md16sfa', 'md16sfb', 'dcm'].indexOf(info.boardname) < 0">
      <component ref="board" :is="info.boardname.toLowerCase()" :info="{ ...titeData, ...info }"></component>
    </div>
  </div>
</template>

<script>
import Nmu from "./nmu";
import Edfa from "./edfa";
import Olp from "./olp";
import Otu10g from "./otu10g";
import Otu25g from "./otu25g";
import Otu100g from "./otu100g";
import Dco200g from "./dco200g";
import Ocp10g from "./ocp10g";
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
import LimitSelect from "@/components/limit-select";
import { storages, isSimilar, isNoBoardType } from "@/utils";
import { i18nToKey } from "@/locale";

export default {
  name: "board-view",
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    LimitSelect,
    BoardOtu10g,
    BoardNmu,
    BoardOlp,
    BoardD16,
    BoardD40,
    BoardM16,
    BoardM40,
    BoardMd8,
    BoardDcm,
    BoardEdfa,
    BoardOcp10g,
    BoardOtu25g,
    BoardOtu100g,
    BoardDco200g,
    BoardMd16sfa,
    BoardMd16sfb,
    Nmu,
    Edfa,
    Olp,
    Otu25g,
    Otu10g,
    Otu100g,
    Dco200g,
    Ocp10g,
  },
  data() {
    return {
      isRole: storages.get("__role__") || false,
      titeData: {
        sn: "",
        desc: "",
        h_rev: "",
        p_rev: "",
        s_rev: "",
        bdtype: "",
        status: "",
        mfgdate: "",
        device_type: "",
        mac_address: "",
      },
      refreshTitleDisabled: false,
      setTilteDisabled: false,
      test: {
        text: "",
      },
      checks: {},
    };
  },
  watch: {
    visible(n) {
      if (!n) return;
      console.log("board-view mixins");
      this.getDetail();
    },
  },
  filters: {
    isNoBoardType(v) {
      return isNoBoardType(v) ? "" : i18nToKey("COMMON.BOARD_TYPE");
    },
  },
  mounted() {
    // console.log("info", this.info);
    // console.log("board", this.$refs.board);
  },
  methods: {
    getTitle() {
      const { boardname, slot } = this.info;
      const data = { otn2000: { type: "get_title", boardname, slot } };

      this.setTilteDisabled = true;
      this.refreshTitleDisabled = true;

      return new Promise((resolve, reject) => {
        this.$http
          .post(data)
          .then(res => {
            if (res.otn2000_ack.boardname === "board_view") {
              return reject();
            }

            this.titeData = res.otn2000_ack;

            resolve(res.otn2000_ack);
          })
          .catch(err => {
            reject(err);
          })
          .finally(() => {
            this.setTilteDisabled = false;
            this.refreshTitleDisabled = false;
          });
      });
    },
    refreshGetTitle() {
      this.getTitle().catch(() => {
        alert(this.$t("COMMON.FAIL"));
      });
    },
    setTilte() {
      const { mfgdate, sn, desc } = this.titeData;
      const { boardname, slot } = this.info;
      const iSuperData = this.isRole == "1" ? { mfgdate, sn } : {};
      const data = { otn2000: { type: "post_title", boardname, desc, slot, ...iSuperData } };

      this.setTilteDisabled = true;
      this.refreshTitleDisabled = true;

      this.$http
        .post(data)
        .then(() => {
          this.setTilteDisabled = false;

          this.getTitle();
        })
        .catch(() => {
          this.setTilteDisabled = false;
          this.refreshTitleDisabled = false;
          alert(this.$t("COMMON.FAIL"));
        });
    },
    getDetail() {
      this.getTitle()
        .then(() => {
          const { boardname } = this.info;
          const isHave = isSimilar(boardname);

          return !isHave && this.$refs.board.getInfo();
        })
        .then(() => {})
        .catch(() => {});
    },
    testlook() {
      console.log(this.checks);
    },
  },
};
</script>

<style lang="scss">
$border-color: #aaa;

.board-view-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.board-view-view-wrapper {
  width: 521px;
  min-height: 60px;
  max-height: 120px;
  margin: 0 auto 10px;
  position: relative;
}

.board-type-container {
  flex: 1;
  overflow: hidden;
}

// 单板详情表格
.cps-wrapper {
  // background-color: #fff;
  // padding: 0 10px 10px 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
}
.board-header-wrapper {
  background-color: #fff;
  position: relative;
  height: 60px;

  // & > div {
  //   left: 50%;
  //   margin-left: -280px;
  // }
}

.board-inner-wrapper {
  width: 1000px;
  height: 84px;
  border: 1px solid #aaa;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 auto;
}

.board-table {
  width: 100%;
  border-collapse: collapse !important;
  display: flex;
  flex-direction: column;
  border: none;
  border-right: 1px solid $border-color;
  border-bottom: 1px solid $border-color;

  thead {
    position: sticky;
    top: 0;
    left: 0;
    background-color: #fff !important;
    z-index: 100;

    .coll-2,
    .coll-3,
    .coll-4 {
      text-align: center;
    }
  }

  tr,
  th {
    display: flex;
    border: none;
    font-weight: normal;
  }

  td {
    min-height: 26px;
    line-height: 26px;
    flex: 1;
    position: relative;
    padding: 0 3px;
    box-sizing: border-box;
    text-align: left;
    display: flex;
    box-sizing: border-box;
  }

  td > * {
    margin: auto 0;
  }

  .coll-2,
  .coll-3,
  .coll-4 {
    height: 100%;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    padding: 0 2px;
    text-align: left;
    box-sizing: border-box;
  }

  .coll-2 {
    width: 200%;
  }

  .coll-3 {
    width: 300%;
  }

  .coll-4 {
    width: 400%;
  }

  .coll-2 > .def-input,
  .coll-3 > .def-input,
  .coll-4 > .def-input,
  td > .def-input {
    width: 100%;
    max-width: 150px;
  }

  .el-date-editor.el-input {
    width: 100%;
  }
}

.board-change-btns {
  padding: 10px 10px;
  display: flex;
  justify-content: flex-end;
  background-color: #fff;

  & > div {
    margin-left: 10px;
  }
}

.board-table-container {
  flex: 1;
  overflow: auto;
  position: relative;
  // padding: 0 10px;
  background-color: #fff;
}

.board-table-title {
  background-color: #fff;
  padding: 10px 10px 0 10px;
}
</style>
