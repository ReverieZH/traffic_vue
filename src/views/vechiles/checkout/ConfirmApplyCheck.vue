<template>
  <div>
      <el-steps :active="5"   finish-status="success" simple style="margin-top: 20px">
        <el-step title="业务须知" ></el-step>
        <el-step title="基本信息" ></el-step>
        <el-step title="选择时间" ></el-step>
        <el-step title="选择检测站" ></el-step>
        <el-step title="选择时段" ></el-step>
        <el-step title="确认预约信息" ></el-step>
        <el-step title="完成预约" ></el-step>
      </el-steps>
      <div  style="left: 50%;right: 50%;width: 800px;margin:0 auto;padding-top: 20px">
        <table  cellspacing="1" cellpadding="1">
          <tr style="padding: 5px 5px">
            <td class="title">所有人</td>
            <td class="text">{{this.$store.getters.getApplyCheckform.owner}}</td>
            <td class="title">机动车登记证书编号</td>
            <td class="text">11111</td>
          </tr>
          <tr>
            <td class="title">号牌号码</td>
            <td class="text">{{this.$store.getters.getApplyCheckform.plateNumber}}</td>
            <td class="title">车辆类型</td>
            <td class="text">{{this.$store.getters.getApplyCheckform.carType}}</td>
          </tr>
          <tr>
            <td class="title">预约时间</td>
            <td class="text">{{this.$store.getters.getApplyCheckform.checkDate}}</td>
            <td class="title">检测站名称</td>
            <td class="text">{{this.$store.getters.getStation.stationname}}</td>
          </tr>
          <tr>
            <td class="title">检测时段</td>
            <td class="text">{{this.$store.getters.getApplyCheckform.startTime}}-{{this.$store.getters.getApplyCheckform.endTime}}</td>
            <td class="title">检测站地址</td>
            <td class="text">{{this.$store.getters.getStation.province}}{{this.$store.getters.getStation.city}}</td>
          </tr>
          <tr>
            <td class="title">检测站联系人</td>
            <td class="text"></td>
            <td class="title">联系电话</td>
            <td class="text">{{this.$store.getters.getStation.phoneNumber}}</td>
          </tr>
        </table>
        <div style="padding-top: 20px">
          <div style="text-align: right">
            <el-button @click="back()">上一步</el-button>
            <el-button type="primary" @click="confirm()">确认</el-button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import {request} from "@/network/request";

export default {
  name: "ConfirmApplyCheck",
  methods:{
    confirm(){
        request({
            url:'/checkReverse/apply',
            method: 'post',
            params:{
               plateNumber:this.$store.getters.getApplyCheckform.plateNumber,
               owner:this.$store.getters.getApplyCheckform.owner,
               carType:this.$store.getters.getApplyCheckform.carType,
               drivingType:this.$store.getters.getApplyCheckform.drivingType,
               fuelType:this.$store.getters.getApplyCheckform.fuelType,
               checkStation:this.$store.getters.getStation.stationname,
               checkDateStr:this.$store.getters.getApplyCheckform.checkDate,
               startTime:this.$store.getters.getApplyCheckform.startTime,
               endTime:this.$store.getters.getApplyCheckform.endTime,
               username:this.$store.getters.getUsername
            }
        }).then(res=>{
            if(res.issuccess){
                this.$store.commit('updateReserveNumber',res.reserveNumber)
                this.$router.push('complete')
            }
        }).catch(err=>{

        })
    }
  }
}
</script>

<style scoped>
table
{
  border-collapse: collapse;
  margin: 0 auto;
  text-align: center;
  /*border-color:#DCDCDC ;*/
  font-size: 15px;
  height: 300px;
}
table tr{
  border: 1px solid #DCDCDC;
}
table td{
  border: 1px solid #DCDCDC;
}
.title{
  background: #F5F5F5;
  font-size: 15px;
  font-weight: bold;
  width: 800px;
  color: #3F3F3F;
}
.text{
  width: 600px;
}
</style>