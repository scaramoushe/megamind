<template>
  <el-container id="app" style="font-family: monospace;">
    <el-header>
      <el-menu class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1">nosce te ipsum</el-menu-item>
        <el-menu-item index="4"><router-link to="/numbers">Numbers</router-link></el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
export default {

};
</script>
