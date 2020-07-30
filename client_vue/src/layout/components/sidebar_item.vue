<template>
  <div>
    <!-- 目前两层循环 -->
    <template v-if="hasOneChild">
      <el-menu-item :index="item.path" :route="item.path">
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.children[0].meta.title }}</span>
      </el-menu-item>
    </template>
    <el-submenu v-else :index="item.path">
      <template slot="title">
        <span>
          <i class="el-icon-menu"></i>
          {{ item.meta.title }}
        </span>
      </template>
      <el-menu-item
        v-for="itemChild in item.children"
        :key="itemChild.path"
        :index="item.path + '/' + itemChild.path"
        :route="item.path + '/' + itemChild.path"
      >
        <i class="el-icon-menu"></i>
        <span slot="title">{{ itemChild.meta.title }}</span>
      </el-menu-item>
    </el-submenu>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasOneChild() {
      if (this.item.children && this.item.children.length == 1) return true;
      else return false;
    }
  },
  methods: {
    resolvePath(basePath, routePath) {}
  }
};
</script>
