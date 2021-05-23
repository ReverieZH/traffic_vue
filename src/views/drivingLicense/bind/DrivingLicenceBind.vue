<template>
    <div>
      <el-page-header @back="goBack" content="绑定驾驶证">
      </el-page-header>
      <div  style="width: 800px;margin:0 auto;padding-top: 20px">
          <div>
             <h2>系统提醒：</h2>
              <h2> 1.为了您和他人的信息安全，您只能绑定本人驾驶证信息。</h2>
              <h2>2.手机验证码将发送到您驾驶证档案中登记的手机号码上。若您无法获取手机验证码，请前往注册地车管所咨询办理。</h2>
              <h2>3.学员、新车车主用户绑定驾驶证成功后，系统将自动变更用户类型为驾驶人用户。</h2>
          </div>
          <div style="padding-top: 20px">
            <table  width="100%" >
              <tr>
                <td width="40%" height="50" align="right" style="text-align: right;padding-right: 5px">驾驶证档案编号:<span style="color: red;">*</span></td>
                <td width="75%" height="50" align="left" style="text-align: left;padding-left: 5px">
                  <el-input v-model="dlNumber" placeholder="" style="width: 300px"></el-input>
                </td>
              </tr>
            </table>
          </div>
          <div style="padding-top: 20px;text-align: center">
              <el-button  type="success" @click="bind">绑定驾驶证</el-button>
          </div>
      </div>
    </div>
</template>

<script>
import {request} from "@/network/request";

export default {
  name: "DrivingLicenceBind",
  data(){
    return {
      dlNumber:''
    }
  },
  methods:{
    goBack(){
        this.$router.replace("/loginHome/dl")
    },
    bind(){
      request({
          url:'/drivingLicence/bind',
          method:'post',
          params:{
            username:this.$store.getters.getUsername,
            dlNumber:this.dlNumber
          }
      }).then(res=>{
          if(res.issuccess){
            this.$message({
              message: '绑定成功',
              type: 'success'
            });
          }else{
            this.$message({
              message: res.message,
              type: 'warning'
            });
          }
      }).catch(err=>{
        this.$message({
          message: '绑定失败',
          type:'warning'
        });
      })
    }
  }
}
</script>

<style scoped>
.table_context{
  font-family:"Trebuchet MS", Arial, Helvetica, sans-serif;
  width:750px;
  /*border-collapse:collapse;*/
}

</style>