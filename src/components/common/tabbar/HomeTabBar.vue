<template>
  <div class="layui-layout layui-layout-admin">
    <div class="layui-header" style="background-color:#0d419d ;">
      <div class="layui-logo" style="color: white;">
        <div id="logodiv" >
          <img id="logo" class="img" src="@/assets/img/logo.jpg"/>
        </div>
        <div id="word"  >
          <p style="font-size:18px;"><span style="font-family:'微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';font-weight:700;">交通在线服务平台</span></p>
        </div></div>
      <!-- 头部区域（可配合layui 已有的水平导航） -->
      <ul class="layui-nav layui-layout-left">
        <tab-bar-item path="/home"><a slot="item-text">首页</a></tab-bar-item>
        <tab-bar-item path="/service"><a slot="item-text">服务</a></tab-bar-item>
        <tab-bar-item path="/message"><a slot="item-text">信息查询</a></tab-bar-item>
<!--        <li :class="{'layui-nav-item':true,'layui-this':isHome }"></li>
        <li :class="{'layui-nav-item':true,'layui-this':isService }" ><a href="" @click="serviceClick">业务办理</a></li>
                <li :class="{'layui-nav-item':true,'layui-this':isMessage }"><a href="">信息查询</a></li>-->
      </ul>

    </div>
  </div>
</template>

<script>
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  name: "HomeTabBar",
  data(){
    return {
      num:0,
        lis:[{
          name:'首页',
          btn:'mainClick'
        },
          {
            name:'服务',
            btn:'serviceClick'
          },
          {
            name:'信息查询',
            btn:'messageClick'
          }]
    }
  },
  components:{
    TabBarItem
  },
  methods:{
    liClick(index){
      this.num=index
      if(index==0){
        this.$router.replace('/home')
      }else if(index==1){
        this.$router.replace('/service')
      }
    }
  },
  computed:{
    layui_this(){

    }
  }
}
</script>

<style scoped>
#logodiv{
  position:absolute;
  left:20px;
  width: 35px;
  height: 35px;
}

#logo {
  border-width:0px;
  left:0px;
  top:0px;
  width:50px;
  height:50px;
}

#word {
  border-width:0px;
  position:relative;
  left:40px;
  width:200px;
  word-wrap:break-word;
  color: #FFFFFF;
}
</style>