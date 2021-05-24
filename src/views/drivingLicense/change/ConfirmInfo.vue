<template>
  <div>
    <el-page-header @back="goBack" content="驾驶证业务/遗失补证">
    </el-page-header>
    <el-steps :active="2"   finish-status="success" simple style="margin-top: 20px">
      <el-step title="业务须知" ></el-step>
      <el-step title="用户申告" ></el-step>
      <el-step title="确认信息" ></el-step>
      <el-step title="资料填写" ></el-step>
      <el-step title="完成提交" ></el-step>
    </el-steps>
    <div style="left: 50%;right: 50%;width: 900px;margin:0 auto">
      <table  cellspacing="1" cellpadding="1"  class="table_border">
        <tr style="padding: 5px 5px">
          <td class="title">所有人</td>
          <td class="text">{{drivingLicence.name}}</td>
          <td class="title">驾驶证号码</td>
          <td class="text">{{drivingLicence.dlnumber}}</td>
        </tr>
        <tr style="padding: 5px 5px">
          <td class="title">国籍</td>
          <td class="text">{{drivingLicence.nationality}}</td>
          <td class="title">地址</td>
          <td class="text">{{drivingLicence.address}}</td>
        </tr>
        <tr>
          <td class="title">初次领证日期</td>
          <td class="text">{{showDate(drivingLicence.firstDate)}}</td>
          <td class="title">准驾车型</td>
          <td class="text">{{drivingLicence.vehicleType}}</td>
        </tr>
        <tr>
          <td class="title">有效期开始日期</td>
          <td class="text">{{showDate(drivingLicence.startDate)}}</td>
          <td class="title">有效期结束日期</td>
          <td class="text">{{showDate(drivingLicence.endDate)}}</td>
        </tr>
        <tr>
          <td class="title">发证机关</td>
          <td class="text">{{drivingLicence.authority}}</td>
          <td class="title">累计计分</td>
          <td class="text">
            {{drivingLicence.score}}
          </td>
        </tr>
      </table>
    </div>
    <div style="text-align: right">
      <el-button  @click="back()">上一步</el-button>
      <el-button type="primary" @click="next()">下一步</el-button>
    </div>
  </div>
</template>

<script>
import {request} from "@/network/request";
import moment from "moment";

export default {
  name: "ConfirmInfo",
  data(){
    return {
      drivingLicence:{}
    }
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    next() {
      this.$store.commit('updateDlNumber',this.drivingLicence.dlnumber)
      this.$router.push('post')
    },
    showDate(date){
      return moment(date).format("YYYY-MM-DD");
    }
  },
  created() {
    request({
      url:'/drivingLicence/info',
      method:'post',
      params:{
        username:sessionStorage.getItem("username")
      }
    }).then(res=>{
      if(res.issuccess){
        this.drivingLicence=res.drivingLicence
      }else{
        this.$message({
          message: res.message,
          type: 'warning'
        });
      }
    }).catch(err=>{

    })

  }
}
</script>

<style scoped>

</style>