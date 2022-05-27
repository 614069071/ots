export default {
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      clonData: {},
      infoData: {},
      refreshTitleDisabled: false,
      setTilteDisabled: false,
      refreshInfoDisabled: false,
      setInfoDisabled: false,
      restorInfoDisabled: false,
      restoreDefaultInfoDisabled: false,
    };
  },
  methods: {
    getInfo() {
      const { boardname, slot } = this.info;
      const data = { otn2000: { type: "get_info", boardname, slot } };

      this.refreshInfoDisabled = true;
      this.setInfoDisabled = true;
      this.restorInfoDisabled = true;
      this.restoreDefaultInfoDisabled = true;

      return new Promise((resolve, reject) => {
        this.$http
          .post(data)
          .then(res => {
            // if (res.otn2000_ack.code !== 0 || res.otn2000_ack.type !== "get_info" || res.otn2000_ack.boardname === "sys_view") {
            if (res.otn2000_ack.type !== "get_info" || res.otn2000_ack.boardname === "sys_view") {
              return reject();
            }
            this.infoData = res.otn2000_ack || {};
            this.clonData = this.$clone(res.otn2000_ack);
            resolve();
          })
          .catch(() => {
            // console.log("get info atch error", err);
            reject();
          })
          .finally(() => {
            this.refreshInfoDisabled = false;
            this.setInfoDisabled = false;
            this.restorInfoDisabled = false;
            this.restoreDefaultInfoDisabled = false;
          });
      });
    },
    refreshGetInfo() {
      this.getInfo().catch(() => {
        alert(this.$t("COMMON.FAIL"));
      });
    },
    setInfo() {
      const { slot, boardname } = this.info;
      const diffData = this.$difference(this.infoData, this.clonData);
      const data = { otn2000: { ...diffData, slot, boardname, type: "post_info" } };

      if (JSON.stringify(diffData) === "{}") {
        return alert(this.$t("COMMON.SELECT_CONFIG_HINT"));
      }

      this.setInfoDisabled = true;
      this.refreshInfoDisabled = true;
      this.restorInfoDisabled = true;
      this.restoreDefaultInfoDisabled = true;

      this.$http
        .post(data)
        .then(res => {
          if (res.otn2000_ack.code !== 0) {
            return alert(this.$t("COMMON.FAIL"));
          }

          this.getInfo().catch(() => {
            alert(this.$t("COMMON.FAIL"));
          });
        })
        .catch(() => {
          alert(this.$t("COMMON.FAIL"));
        })
        .finally(() => {
          this.setInfoDisabled = false;
          this.refreshInfoDisabled = false;
          this.restorInfoDisabled = false;
          this.restoreDefaultInfoDisabled = false;
        });
    },
    restoreDefaultInfo() {
      const { boardname, slot } = this.info;
      const data = { otn2000: { type: "default", boardname, slot } };

      this.restoreDefaultInfoDisabled = true;

      this.$http
        .post(data)
        .then(() => {
          this.getInfo();
        })
        .catch(() => {
          alert(this.$t("COMMON.FAIL"));
        });
    },
    restorInfo() {
      const { boardname, slot } = this.info;
      const data = { otn2000: { type: "reset", boardname, slot } };
      this.restorInfoDisabled = true;

      this.$http
        .post(data)
        .then(() => {
          this.getInfo();
        })
        .catch(() => {
          alert(this.$t("COMMON.FAIL"));
        });
    },
  },
};
