<template>
<el-container>
  <el-header><login-header></login-header></el-header>
  <el-container>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>业务办理</template>
          <el-menu-item-group>
            <!--          <template slot="title">分组一</template>-->
            <el-menu-item index="1-1"><router-link to="/loginHome/vs">机动车业务</router-link></el-menu-item>
            <el-menu-item index="1-2"><router-link to="/loginHome/dl">驾驶证业务</router-link></el-menu-item>
            <el-menu-item index="1-2"><router-link to="/loginHome/oa">违法处理业务</router-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <div style="width: 90%"> <el-main style="overflow-x: hidden"><router-view></router-view></el-main></div>

  </el-container>
</el-container>
</template>

<script>

import loginHeader from "@/components/loginHeader";
import Left from "@/components/Left";

export default {
  name: "loginHome",
  components:{
    loginHeader,
    Left
  }
}
</script>

<style scoped>

</style>