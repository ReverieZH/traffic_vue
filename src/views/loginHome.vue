<template>
<el-container>
  <tab-bar></tab-bar>
  <el-header><login-header></login-header></el-header>
  <el-container>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '2']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>业务办理</template>
          <el-menu-item-group>
            <!--          <template slot="title">分组一</template>-->
            <el-menu-item index="1-1"><router-link to="/loginHome/vs">机动车业务</router-link></el-menu-item>
            <el-menu-item index="1-2"><router-link to="/loginHome/dl">驾驶证业务</router-link></el-menu-item>
            <el-menu-item index="1-2"><router-link to="/loginHome/ips">违法处理业务</router-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-message"></i>账号绑定</template>
          <el-menu-item-group>
            <!--          <template slot="title">分组一</template>-->
            <el-menu-item index="2-1"><router-link to="/loginHome/drivingLicence/bind">绑定驾驶证</router-link></el-menu-item>
            <el-menu-item index="2-2"><router-link to="/loginHome/vehicle/bind">绑定车辆</router-link></el-menu-item>
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
import TabBar from "@/components/common/tabbar/TabBar";

export default {
  name: "loginHome",
  components:{
    loginHeader,
    Left,
    TabBar
  }
}
</script>

<style scoped>

</style>