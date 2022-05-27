<template>
  <div class="custom-select-wrapper">
    <select :disabled="disabled" v-model="selectVal" @change="selectChange">
      <option v-for="(item, index) in options" :value="item.value" :key="`${index}${item.value}`">{{ item.label }}</option>
      <option value="custom">{{ $t("COMMON.CUSTOM") }}</option>
    </select>
    <input :disabled="disabled" v-show="selectVal === 'custom'" class="def-input custom-select-input" type="text" v-model.number="selectCustomVal" />
  </div>
</template>

<script>
export default {
  name: "custom-select",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Number,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectVal: "",
      selectCustomVal: "",
    };
  },

  watch: {
    value: {
      handler(n) {
        this.selectVal = n;

        const isHave = this.options.some(e => n === e.value);

        if (!isHave) {
          //自定义值
          this.selectVal = "custom";
          this.selectCustomVal = this.value;
        }
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
        this.$emit("input", this.selectCustomVal);
      } else {
        const isNan = isNaN(parseFloat(value));
        const val = isNan ? value : parseFloat(value);

        this.$emit("input", val);
      }
    },
  },
};
</script>

<style scoped lang="css">
.custom-select-input {
  width: 80px;
  margin-left: 10px;
}
</style>
