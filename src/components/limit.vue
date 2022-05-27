<template>
  <div class="input-limit-wrapper">
    <div class="input-text-hint" v-show="display">{{ hint }}</div>
    <input class="def-input" type="text" :disabled="disabled" :value="value" @input="change($event)" />
  </div>
</template>

<script>
export default {
  name: "Limit",
  props: { min: Number, max: Number, value: [String, Number], disabled: Boolean },
  data() {
    return {
      hint: "",
      display: false,
    };
  },
  // computed: {
  //   vale() {
  //     return this.value;
  //   },
  // },
  watch: {
    value: {
      handler(data) {
        const reg = /(^[-]?[0-9]{0,}([.][0-9]{0,})?$)|(^[-]?0?(\.[0-9]{0,})?$)/;
        const { min, max } = this;
        const val = Number(data);
        let check = true;

        if (data === "") {
          check = false;
        }

        if ((data || data == "0") && reg.test(data) && data !== "-" && data !== ".") {
          if (!!min || min === 0) {
            this.hint = this.$t("COMMON.VALUE_CANNOT_LESS") + min;
            if (val || val === 0) {
              if (val < min) {
                this.display = true;
                check = false;
              } else {
                this.display = false;
                check = true;
              }
            } else {
              check = false;
            }
            // this.display =  && val < min;
          }

          if (!!max || max === 0) {
            this.hint = this.$t("COMMON.VALUE_CANNOT_GREATER") + max;
            if (val || val === 0) {
              if (val > max) {
                this.display = true;
                check = false;
              } else {
                this.display = false;
                check = true;
              }
            } else {
              check = false;
            }
            // this.display = (val || val === 0) && val > max;
            // check = false;
          }

          if ((!!min || min === 0) && (!!max || max === 0)) {
            this.hint = this.$t("COMMON.VALUE_RANG") + min + "~" + max;
            if (val || val === 0) {
              if (val > max || val < min) {
                this.display = true;
                check = false;
              } else {
                this.display = false;
                check = true;
              }
            } else {
              check = false;
            }
            // this.display = (val || val === 0) && (val > max || val < min);
          }
        } else {
          this.hint = this.$t("COMMON.VALUE_VALID");
          this.display = true;
          check = false;
        }

        this.$emit("update:check", check);
      },
      immediate: true,
    },
  },
  methods: {
    change(e) {
      /*
      const reg = /(^[-]?[0-9]{0,}([.][0-9]{0,})?$)|(^[-]?0?(\.[0-9]{0,})?$)/;
      const { min, max } = this;
      */
      const data = e.target.value;
      const val = Number(data);

      if (data != 0 && !data) return;

      /*
      if (reg.test(data) && data !== "-" && data !== ".") {
        if (!!min || min === 0) {
          this.hint = this.$t("COMMON.VALUE_CANNOT_LESS") + min;
          this.display = (val || val === 0) && val < min;
        }

        if (!!max || max === 0) {
          this.hint = this.$t("COMMON.VALUE_CANNOT_GREATER") + max;
          this.display = (val || val === 0) && val > max;
        }

        if ((!!min || min === 0) && (!!max || max === 0)) {
          this.hint = this.$t("COMMON.VALUE_RANG") + min + "~" + max;
          this.display = (val || val === 0) && (val > max || val < min);
        }
      } else {
        this.hint = this.$t("COMMON.VALUE_VALID");
        this.display = !!data.length;
      }
      */

      this.$emit("input", !data || isNaN(val) ? data : val);
    },
  },
};
</script>

<style scoped lang="scss">
.input-limit-wrapper {
  position: relative;

  .input-text-hint {
    position: absolute;
    left: 0;
    bottom: 100% + 10;
    background-color: #555;
    z-index: 100;
    height: 22px;
    line-height: 22px;
    padding: 0 5px;
    color: #fff;
  }

  input {
    width: 150px;
  }
}
</style>
