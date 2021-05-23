<template>
  <div>
    <el-steps :active="1"   finish-status="success" simple style="margin-top: 20px">
      <el-step title="业务须知" ></el-step>
      <el-step title="填写申请信息" ></el-step>
      <el-step title="选择获取方式" ></el-step>
      <el-step title="确认提交" ></el-step>
    </el-steps>
    <div  style="left: 50%;right: 50%;width: 800px;margin:0 auto;padding-top: 20px">
      <el-form :model="form">
      <table  cellspacing="1" cellpadding="1"  class="table_border">
        <tr>
          <td class="title">号牌号码</td>
          <td class="text" >{{this.$store.getters.getPlateNumber}}</td>
          <td class="title">检验有效期止</td>
          <td class="text">{{this.addDate()}}</td>
        </tr>
        <tr>
          <td class="title">交强险凭证照片</td>
          <td class="text">
            <el-form-item  label-width="7.5rem">
              <el-upload
                  ref="InsuranceUpload"
                  action="#"
                  list-type="picture-card"
                  :auto-upload="false"
                  :class="{hide:insurancehideUpload}"
                  :on-change="insuaranceChange"
                  :before-upload="insurancebeforeAvatarUpload"
              >
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{file}">
                  <img
                      class="el-upload-list__item-thumbnail"
                      :src="file.url" alt=""
                  >
                  <span class="el-upload-list__item-actions">
              <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
              >
                <i class="el-icon-zoom-in"></i>
              </span>
              <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleDownload(file)"
              >
                <i class="el-icon-download"></i>
              </span>
              <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
              >
                <i class="el-icon-delete"></i>
              </span>
            </span>
                </div>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="insuranceImageUrl" alt="">
              </el-dialog>
            </el-form-item>
          </td>
          <td class="title">车船税凭证照片</td>
          <td class="text">
            <el-form-item  label-width="7.5rem">
              <el-upload
                  ref="taxUpload"
                  action="#"
                  list-type="picture-card"
                  :auto-upload="false"
                  :class="{hide:taxhideUpload}"
                  :on-change="taxChange"
                  :before-upload="taxbeforeAvatarUpload"
              >
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{file}">
                  <img
                      class="el-upload-list__item-thumbnail"
                      :src="file.url" alt=""
                  >
                  <span class="el-upload-list__item-actions">
              <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
              >
                <i class="el-icon-zoom-in"></i>
              </span>
              <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleDownload(file)"
              >
                <i class="el-icon-download"></i>
              </span>
              <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
              >
                <i class="el-icon-delete"></i>
              </span>
            </span>
                </div>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="taxImageUrl" alt="">
              </el-dialog>
            </el-form-item>
          </td>
        </tr>
      </table>
      <div style="padding-top: 20px">
        <div style="text-align: right">
          <el-button @click="back()">上一步</el-button>
          <el-button type="primary" @click="next()">下一步</el-button>
        </div>
      </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import FlowHead from "@/components/FlowHead";
import {request} from "@/network/request";
import axios from "axios";

export default {
  name: "ExemptCheckInfo",
  data(){
    return {
      insuranceImageUrl:'',
      taxImageUrl:'',
      insurancelimitCount:1,
      taxlimitCount:1,
      insurancehideUpload: false,
      taxhideUpload: false,
      dialogVisible:false,
      exemptCheck:{
        plateNumber:this.$store.getters.getPlateNumber,
        endTime:'',
        insurancePhotoUrl:'',
        taxPhotoUrl:''
      }
    }
  },
  methods:{
    addDate () {
      let nowDate = new Date()
      let date = {
        year: nowDate.getFullYear()+1,
        month: nowDate.getMonth() + 1,
        date: nowDate.getDate()
      }
      this.exemptCheck.endTime=date.year + '-' + date.month + '-' + date.date
      return this.exemptCheck.endTime
    },
    insurancebeforeAvatarUpload(file) {
      let param = new FormData();
      param.append("file",file)
      param.append("username","reverie")
      axios.post('http://localhost:8081/exemptedCheck/uploadInsurance', param,
          {headers:{
              'Content-Type': 'multipart/form-data'
            },}
      ).then(resp => {
        this.$store.commit("updateInsurancePhotoUrl",resp.data)

      }).catch(() => {

        console.log('111')
      })

      return false//屏蔽了action的默认上传
    },
    taxbeforeAvatarUpload(file) {
      let param = new FormData();
      param.append("file",file)
      param.append("username","reverie")
      axios.post('http://localhost:8081/exemptedCheck/uploadTax', param,
          {headers:{
              'Content-Type': 'multipart/form-data'
            },}
      ).then(resp => {
        this.$store.commit("updateTaxPhotoUrl",resp.data)
      }).catch(() => {
        console.log('111')
      })
      return false//屏蔽了action的默认上传
    },
    next(){
      this.$refs.taxUpload.submit();
      this.$refs.InsuranceUpload.submit();
        this.$store.commit("updateFormData",this.exemptCheck)
        this.$router.push("choosePost")
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    insuaranceChange(file,fileList){
      this.insurancehideUpload = fileList.length >= this.insurancelimitCount;
      this.exemptCheck.insurancePhoto=file
    },
    taxChange(file,fileList){
      this.taxhideUpload = fileList.length >= this.taxlimitCount;
      this.exemptCheck.taxPhoto=file
    },
    back(){
      this.$router.go(-1)
    },
  },
}
</script>

<style>
.hide .el-upload--picture-card {
  display: none;
}

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