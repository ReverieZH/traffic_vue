<template>

  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>业务办理</template>
        <el-menu-item-group>
<!--          <template slot="title">分组一</template>-->
          <el-menu-item index="1-1"><router-link to="/loginHome/dl">驾驶证业务</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link to="/loginHome/vl">驾驶证业务</router-link></el-menu-item>
          <el-menu-item index="1-2">违法处理业务</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
    export default {
        name: "Left",
      data(){
          return {
            use:"0",
            usesize:'0'
          }
      },
      created(){
        this.$http.post(this.$HOST+'v2/getusesize',this.$qs.stringify({
          sign:this.$sign
        })).then(res=>{
          var MB=524288000;
         var  persent=parseInt(res.data.data.size/MB)
          if(persent==0){
            this.use=1
          }else{
            this.use=persent
          }
        this.usesize=res.data.data.realsize

        })
      },
      methods:{
        to_all(){
          this.$router.push({path:'Home'})
        },
        to_photo(){
          this.$router.push({path:'photo'})
        },
        to_file(){
          this.$router.push({path:'file'})
        },
        to_video(){
          this.$router.push({path:'video'})
        },
        to_music(){
          this.$router.push({path:'music'})
        },
        to_others(){
          this.$router.push({path:'others'})
        },
        to_recycle(){
          this.$router.push({path:'recycle'})
        },
      }
    }
</script>

<style scoped>
.el-menu{
  background-color:  #f7f7f7;
  border: 0;
  /*text-align: center;*/

}
  .item{
    color:#424e67;
    font-size: 14px;
  }
.el-progress-bar__outer{

}
</style>
