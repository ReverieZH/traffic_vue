<template>
  <div>
    <div  style="left: 50%;right: 50%;width: 800px;margin:0 auto;padding-top: 20px">
      <div style="text-align: center;padding: 5px 5px;font-weight: bold">
        <h2>免检车申领检验标志申请信息查看</h2>
      </div>
      <table  cellspacing="1" cellpadding="1"  class="table_border">
        <tr style="padding: 5px 5px">
          <td class="title">车牌号</td>
          <td class="text">{{applyExemptedCheck.plateNumber}}</td>
          <td class="title">检验有效期止</td>
          <td class="text">{{showDate(applyExemptedCheck.endDate)}}</td>
        </tr>
        <tr>
          <td class="title">强险凭证照片</td>
          <td class="text">
            <el-image
                style="width: 100px; height: 100px"
                :src="applyExemptedCheck.insurancePhoto"
                :preview-src-list="insurancePhotoList">
            </el-image>
          </td>
          <td class="title">车船税凭证照片</td>
          <td class="text">
            <el-image
                style="width: 100px; height: 100px"
                :src="applyExemptedCheck.taxPhoto"
                :preview-src-list="taxPhotoList">
            </el-image></td>
        </tr>
        <tr>
          <td class="title">是否需要纸质凭证</td>
          <td class="text">
            <div v-if="applyExemptedCheck.isNeedPaper==0">不需要</div>
            <div v-else-if="applyExemptedCheck.isNeedPaper==1">需要</div>
          </td>
          <td class="title">获取方式</td>
          <td class="text">
            <div v-if="applyExemptedCheck.accessMethod==0">委托邮政寄递</div>
            <div v-else-if="applyExemptedCheck.accessMethod==1">前往窗口自取</div>
          </td>
        </tr>
        <tr>
          <td class="title">收件地址</td>
          <td class="text">{{applyExemptedCheck.address}}</td>
          <td class="title">收件人姓名</td>
          <td class="text">
            <div v-if="applyExemptedCheck.accessMethod==0">{{applyExemptedCheck.receiverName}}</div>
          </td>
        </tr>
        <tr>
          <td class="title">收件人电话</td>
          <td class="text">{{applyExemptedCheck.phoneNumber}}</td>
          <td class="title">邮编</td>
          <td class="text">{{applyExemptedCheck.postCode}}</td>
        </tr>
      </table>
      <div style="padding-top: 20px;text-align: right">
        <el-button type="primary" @click="back">返回</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {request} from "@/network/request";
import moment from "moment";

export default {
  name: "ListViewApplyInfo",
  data(){
    return {
      applyExemptedCheck:{},
      insurancePhotoList:[],
      taxPhotoList:[]
    }
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    showDate(date){
      return moment(date).format("YYYY-MM-DD");
    }
  },
  created() {
    request({
      url:'/exemptedCheck/info',
      method:'post',
      params:{
        acNumber:this.$route.query.acNumber
      }
    }).then(res=>{
      if(res.issuccess){
        this.applyExemptedCheck=res.applyExemptedCheck
        this.insurancePhotoList.push(res.applyExemptedCheck.insurancePhoto)
        this.taxPhotoList.push(res.applyExemptedCheck.taxPhoto)
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