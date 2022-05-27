<template>
  <div class="custom-select-wrapper">
    <select :disabled="disabled" v-model="selectVal" @change="selectChange">
      <option v-for="(item, index) in options" :value="item.value" :key="`${index}${item.value}`">{{ item.label }}</option>
      <option value="custom">{{ $t("COMMON.CUSTOM") }}</option>
    </select>

    <div class="input-limit-wrapper" v-show="selectVal === 'custom'">
      <div class="input-text-hint" v-show="display">{{ hint }}</div>
      <input class="def-input" type="text" :disabled="disabled" :value="value" @input="change($event)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "limit-select",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: [String, Number],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
  },
  data() {
    return {
      selectVal: "",
      selectCustomVal: "",
      isLock: false,
    };
  },
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
          // this.display = !!data.length;
          this.display = true;
          check = false;
        }

        if (!this.isLock) {
          this.selectVal = data;

          const isHave = this.options.some(e => data === e.value);

          if (!isHave) {
            //自定义值
            this.selectVal = "custom";
            this.selectCustomVal = this.value;
            this.isLock = true;
          } else {
            this.isLock = false;
          }
        }

        this.$emit("update:check", check);
      },
      immediate: true,
    },
    selectCustomVal(n) {
      this.$emit("input", n);
    },
  },
  methods: {
    selectChange(e) {
      const value = e.target.value;

      if (value === "custom") {
        this.isLock = true;
        this.$emit("input", this.selectCustomVal);
      } else {
        this.isLock = false;
        const isNan = isNaN(parseFloat(value));
        const val = isNan ? value : parseFloat(value);

        this.$emit("input", val);
      }
    },
    change(e) {
      const data = e.target.value;
      const val = Number(data);

      if (data != 0 && !data) return;

      this.$emit("input", !data || isNaN(val) ? data : val);
    },
  },
};
</script>

<style scoped lang="scss">
.custom-select-wrapper {
  display: flex;

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
}
</style>
