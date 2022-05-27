<template>
  <div class="middle-menu">
    <el-submenu v-if="model.children && model.children.length" :index="`${model.menuLink}-${index}`">
      <template slot="title">
        <i class="c-icon m-icon" v-if="model.icon" :class="model.icon"></i>
        <span>{{ model.menuName }}</span>
      </template>

      <template v-for="(item, i) in model.children">
        <middle-menu :model="item" :index="`${model.menuLink}-${index}-${i}`" :key="i" />
      </template>
    </el-submenu>

    <el-menu-item v-else :index="model.menuLink" @click="$router.push(model.menuLink)">
      <i class="c-icon m-icon" v-if="model.icon" :class="model.icon"></i>
      <span slot="title">{{ model.menuName }}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: "middle-menu",
  props: {
    model: { type: Object, required: true },
    index: { type: [Number, String], default: 0 },
  },
};
</script>

<style>
.middle-menu .m-icon {
  margin-right: 10px;
  display: inline-block;
  width: 20px;
  text-align: center;
  font-size: 16px;
}
</style>
