<template>
  <div class="layout-wrapper">
    <LayoutHeader :user="userProfile" />

    <div class="layout-main">
      <div class="layout-aside">
        <div class="aside-header-wrapper clear-scroll-bar">
          <SideBar />
        </div>

        <LayoutControl />
      </div>

      <main class="layout-content scrollbar">
        <div class="board-overall-wrapper">
          <!-- <div class="refresh-header-wrapper">
            <div class="refresh-wrapper">自动刷新剩余时间：{{ timerCount }}秒 <button class="def-btn" @click="refreshSystem">立即刷新</button></div>
          </div> -->

          <structure :list="dataTable" />
        </div>

        <div class="page-wrapper">
          <router-view></router-view>
        </div>
      </main>
    </div>

    <pupur :visible.sync="dialogVisible">
      <board-view :info="boardData" :visible.sync="dialogVisible"></board-view>
    </pupur>
  </div>
</template>

<script>
import Structure from "@/components/structure";
import SideBar from "@/components/side-bar";
import BoardView from "./board-view";
import LayoutHeader from "./layout-header";
import LayoutControl from "./layout-control";
import { storages } from "@/utils";

let timerCount = 0;
let boardTimer = null;

export default {
  name: "Layout",
  components: { SideBar, Structure, LayoutHeader, LayoutControl, BoardView },
  data() {
    return {
      userProfile: {
        user: "webadmin",
        role: "管理员",
      },
      dataTable: [
        // { status: 1, boardname: "otu10g" },
        // { status: 1, boardname: "ocp10g" },
        // { status: 1, boardname: "edfa" },
        // { status: 1, boardname: "olp" },
        // { status: 1, boardname: "otu25g" },
        // { status: 1, boardname: "nmu" },
        // { status: 1, boardname: "md16sfa" },
        // { status: 1, boardname: "md16sfb" },
        // { status: 1, boardname: "dcm" },
        // { status: 1, boardname: "m16" },
        // { status: 1, boardname: "d16" },
        // { status: 1, boardname: "md8" },
        // { status: 1, boardname: "dco200g" },
        // { status: 1, boardname: "otu100g" },
        // { status: 1, boardname: "d40" },
        // { status: 1, boardname: "m40" },
      ],
      boardData: {},
      dialogVisible: false,
      currentBoard: 0,
    };
  },
  beforeRouteEnter(to, form, next) {
    const __user__ = storages.get("__user__");

    if (__user__) {
      next();
    } else {
      next({ path: "/login", replace: true });
    }
  },
  watch: {
    // $route: {
    //   handler() {
    //     this.getBoardList();
    //   },
    //   immediate: true,
    // },
  },
  created() {
    this.getBoardList();
  },
  mounted() {
    this.initUserinfo();

    this.$bus.$on("updateBoardView", () => {
      this.getBoardList();
    });

    this.$bus.$on("onBoardView", v => {
      if (!v.status) return;
      this.currentBoard = v.slot - 1;
      this.boardData = v;
      this.dialogVisible = true;
    });

    this.$bus.$emit("autoUpdateBoardView", 1);

    this.$bus.$on("stopUpdateBoardView", () => {
      this.clearTimer();
      this.dataTable = [];
    });
  },
  beforeDestroy() {
    this.$bus.$off("updateBoardView");
    this.$bus.$off("onBoardView");
    this.clearTimer();
  },
  methods: {
    initUserinfo() {
      const __user__ = storages.get("__user__");
      const __role__ = storages.get("__role__");
      this.userProfile = Object.freeze({ user: __user__, role: __role__ });
    },
    getBoardList() {
      const data = { otn2000: { boardname: "board_view", type: "get_info" } };

      this.$http
        .post(data)
        .then(res => {
          if (!res) return;

          const list = res.otn2000_ack.channels || [];

          this.dataTable = list;
          this.boardData = list[this.currentBoard];
          this.$bus.$emit("onBoardList", list);
          timerCount = 0;
        })
        .catch(() => {
          timerCount++;

          this.dataTable = [];
        })
        .finally(() => {
          this.startTimer();
        });
    },
    startTimer() {
      if (timerCount >= 5) {
        this.clearTimer();
        return;
      }
      boardTimer = setTimeout(() => {
        this.getBoardList();
      }, 2000);
    },
    clearTimer() {
      clearInterval(boardTimer);

      boardTimer = null;
      timerCount = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.layout-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 90%;
  min-width: 1280px;

  .layout-main {
    flex: 1;
    overflow: hidden;
    position: relative;
    display: flex;
    border-radius: 10px 10px 0 0;
  }

  .layout-aside {
    background-color: #fff;
    display: flex;
    height: 100%;
    flex-direction: column;
    margin-right: 7px;
    justify-content: space-between;
  }

  .layout-content {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    overflow: hidden;
  }
}

.layout-content {
  .board-overall-wrapper {
    padding: 10px;
    overflow-y: hidden;
    overflow-x: auto;
    // height: 520px;
  }

  .page-wrapper {
    box-sizing: border-box;
    padding: 0 10px 50px 10px;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .refresh-header-wrapper {
    height: 36px;
    padding: 10px 0 0 0;
    display: flex;
    justify-content: right;

    .refresh-wrapper {
      font-size: 16px;
      .button {
        margin-left: 10px;
      }
    }
  }
}

.layout-aside {
  .aside-header-wrapper {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
