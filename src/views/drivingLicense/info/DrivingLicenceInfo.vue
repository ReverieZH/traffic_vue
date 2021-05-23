<template>
    <div>
      <el-page-header @back="goBack" content="我的驾驶证">
      </el-page-header>
      <div  style="left: 50%;right: 50%;width: 800px;margin:0 auto;padding-top: 20px">
        <table  cellspacing="1" cellpadding="1"  class="table_border">
          <tr style="padding: 5px 5px">
            <td class="title">所有人</td>
            <td class="text">{{drivingLicence.name}}</td>
            <td class="title">性别</td>
            <td class="text">{{drivingLicence.sex}}</td>
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
            <td class="title">计分</td>
            <td class="text">
              {{drivingLicence.score}}
            </td>
          </tr>
        </table>
      </div>
    </div>
</template>

<script>
import moment from "moment";
import {request} from "@/network/request";

export default {
  name: "DrivingLicenceInfo",
  data(){
    return {
      drivingLicence:{}
    }
  },
  methods:{
    showDate(date){
      return moment(date).format("YYYY-MM-DD");
    }
  },
  created() {
    request({
      url:'/drivingLicence/info',
      method:'post',
      params:{
        username:this.$store.getters.getUsername
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
.table_border
{
  border-collapse: collapse;
  margin: 0 auto;
  text-align: center;
  /*border-color:#DCDCDC ;*/
  font-size: 15px;
  height: 300px;
}
.table_border tr{
  border: 1px solid #DCDCDC;
}
.table_border td{
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