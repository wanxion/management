<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router unique-opened :default-active="$route.path">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>内容管理
          </template>
          <el-menu-item-group>
            <template slot="title">文章</template>
            <el-menu-item index="/articles/list">文章列表</el-menu-item>
            <el-menu-item index="/articles/create">新建文章</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">投资组合</template>
            <el-menu-item index="/portfolios/list">案例列表</el-menu-item>
            <el-menu-item index="/portfolios/create">新建案例</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 15px">
        <el-dropdown trigger="click" @command="setDialogInfo">
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="logout">退出管理模式</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>管理模式</span>
      </el-header>
      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    setDialogInfo(cmdItem) {
      switch (cmdItem) {
        case "logout":
          this.logout();
          break;
      }
    },
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    }
  }
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
