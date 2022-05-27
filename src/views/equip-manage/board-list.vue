<template>
  <div>
    <div class="inner-container-title">
      {{ $t("LIST.BOARD_LIST") }}<button class="button-refresh-board-list" @click="refresh">{{ $t("COMMON.REFRESH") }}</button>
    </div>

    <el-table border size="mini" :data="dataTable" tooltip-effect="dark" style="width: 100%">
      <el-table-column prop="slot" width="100" :label="$t('COMMON.SLOT_NUMBER')">
        <template v-slot="{ row }">
          {{ `SLOT ${row.slot}` }}
        </template>
      </el-table-column>
      <el-table-column prop="status" :label="$t('LIST.SLOT_STATUS')">
        <template v-slot="{ row }">
          {{ row.status ? $t("COMMON.UP") : $t("COMMON.DOWN") }}
        </template>
      </el-table-column>
      <el-table-column prop="boardname" :label="$t('COMMON.BOARD_TYPE')">
        <template v-slot="{ row }">
          <template v-if="row.status">
            {{ row.boardname | unifiedBoardName }}
          </template>
        </template>
      </el-table-column>
      <el-table-column prop="h_ver" :label="$t('COMMON.HARDWARE_VERSION')">
        <template v-slot="{ row }">
          <template v-if="row.status">
            {{ row.h_ver }}
          </template>
        </template>
      </el-table-column>
      <el-table-column prop="s_ver" :label="$t('COMMON.SOFTWARE_VERSION')">
        <template v-slot="{ row }">
          <template v-if="row.status">
            {{ row.s_ver }}
          </template>
        </template>
      </el-table-column>
      <el-table-column prop="mfgdate" :label="$t('LIST.PRODUCTION_DATE')">
        <template v-slot="{ row }">
          <template v-if="row.status">
            {{ row.mfgdate }}
          </template>
        </template>
      </el-table-column>
      <el-table-column :label="$t('LIST.DETAIL')" width="100">
        <template v-slot="{ row }">
          <button v-if="row.status" @click="lookDetail(row)">{{ $t("LIST.CLICK_LOOK") }}</button>
        </template>
      </el-table-column>
    </el-table>

    <!-- <pupur :visible.sync="dialogVisible">
      <board-view :info="boardData" :visible.sync="dialogVisible"></board-view>
    </pupur> -->
  </div>
</template>

<script>
export default {
  name: "board-list",
  data() {
    return {
      dataForm: {},
      inquireLoading: false,
      dataTable: [],
      dialogVisible: false,
      boardType: "",
      boardTilte: "",
      boardData: {},
    };
  },
  mounted() {
    this.$bus.$on("onBoardList", v => {
      this.dataTable = v;
    });
  },
  beforeDestroy() {
    this.$bus.$off("onBoardList");
  },
  filters: {
    unifiedBoardName(v) {
      const boardNames = {
        otu10g: "4*10G OTU",
        otu25g: "4*25G OTU",
        ocp10g: "2*10G OCP",
        otu100g: "40&100G OTU",
        dco200g: "200G CFP2 DCO",
        m16: "M16",
        d16: "D16",
        md8: "MD8",
        m40: "M40",
        d40: "D40",
        md16sfa: "MD16SFA",
        md16sfb: "MD16SFB",
        dcm: "DCM",
        edfa: "EDFA",
        NMU: "NMU",
        olp: "OLP",
      };

      return boardNames[v] || v;
    },
  },
  methods: {
    lookDetail(data) {
      // const { boardname, status } = data;

      // if (!status) return;

      // const boardName = boardname.toLowerCase();

      // this.boardType = boardName;
      // this.boardTilte = boardName;
      // this.boardData = data;
      // this.dialogVisible = true;

      this.$bus.$emit("onBoardView", data);
    },
    refresh() {
      this.$bus.$emit("updateBoardView");
    },
  },
};
</script>
