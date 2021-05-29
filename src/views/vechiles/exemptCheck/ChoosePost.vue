<template>
<div>
  <el-steps :active="2"   finish-status="success" simple style="margin-top: 20px">
    <el-step title="业务须知" ></el-step>
    <el-step title="填写申请信息" ></el-step>
    <el-step title="选择获取方式" ></el-step>
    <el-step title="确认提交" ></el-step>
  </el-steps>
  <div  style="left: 50%;right: 50%;width: 800px;margin:0 auto;padding-top: 20px">
    <table  cellspacing="1" cellpadding="1">
      <tr style="padding: 5px 5px">
        <td class="title">纸质凭证</td>
        <td class="text">
          <el-radio v-model="post.isNeedPaper" label="0">不需要</el-radio>
          <el-radio v-model="post.isNeedPaper" label="1">需要</el-radio></td>
      </tr>
      <tr>
        <td class="title">获取方式</td>
        <td class="text">
          <el-radio v-model="post.accessMethod" label="0" @change="changeMethod">委托邮政寄递</el-radio>
          <el-radio v-model="post.accessMethod" label="1" @change="changeMethod">前往窗口自取</el-radio>
        </td>
      </tr>
      <tr>
        <td class="title">选择地址</td>
        <td class="text">
          <div v-if="method">
            <el-cascader
                size="large"
                :options="options"
                v-model="selectedOptions"
                @change="handleChange"
            >
            </el-cascader>
          </div>
        </td>
      </tr>
      <tr>
        <td class="title">详细地址</td>
        <td class="text">
          <div v-if="method">
            <el-input v-model="post.address"  style="width: 200px"  ></el-input>
          </div>
        </td>
      </tr>
      <tr>
        <td class="title">联系电话</td>
        <td class="text">
          <div v-if="method">
          <el-input v-model="post.phoneNumber"  style="width: 200px" ></el-input>
          </div>
        </td>
      </tr>
      <tr>
        <td class="title">邮政编码</td>
        <td class="text">
          <div v-if="method">
            <el-input v-model="post.postCode"  style="width: 200px" ></el-input>
          </div>
        </td>
      </tr>
    </table>
    <div style="padding-top: 20px;text-align: right">
      <el-button @click="back()">上一步</el-button>
      <el-button type="primary" @click="submit()">提交</el-button>
    </div>
  </div>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
      <span>申请失败</span>
      <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
</div>
</template>

<script>
import { regionData, CodeToText } from "element-china-area-data";
import axios from "axios";
import {request} from "@/network/request";

export default {
  name: "ChoosePost",
  data(){
    return {
      isDisable:false,
      dialogVisible:false,
      post:{
        isNeedPaper:'',
        accessMethod:'',
        address:'',
        postCode:'',
        area:'',
        phoneNumber:'',
      },
      options: regionData,
      selectedOptions: []
    }
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
    handleChange() {
      var loc = "";
      for (let i = 0; i < this.selectedOptions.length; i++) {
        loc += CodeToText[this.selectedOptions[i]];
      }
      this.post.area=loc
    },
    changeMethod(){
      if(this.post.accessMethod==0){
        this.isDisable=true
      }else if(this.post.accessMethod==1){
        this.isDisable=false
      }
    },
    submit(){
        request({
            url:'/exemptedCheck/exemptCheckApply',
            method:'post',
            params:{
              plateNumber:this.$store.getters.getPlateNumber,
              insurancePhoto:this.$store.getters.getExemptFormData.insurancePhotoUrl,
              taxPhoto:this.$store.getters.getExemptFormData.taxPhotoUrl,
              endTime:this.$store.getters.getExemptFormData.endTime,
              isNeedPaper:this.post.isNeedPaper,
              accessMethod:this.post.accessMethod,
              address:this.post.address,
              postCode:this.post.postCode,
              area:this.post.area,
              phoneNumber:this.post.phoneNumber,
              receiverName:this.$store.getters.getName,
              username:sessionStorage.getItem("username")
            }
        }).then(res=>{
            if(res.issuccess){
              this.$router.push({
                path:'viewInfo',
                query: {
                  acNumber: res.acNumber,
                }
              })
            }else{
              this.dialogVisible = true
            }
        }).catch(err=>{
              this.dialogVisible = true
        })
    }
  },
  computed:{
      method(){
        return this.isDisable
      }
  }
}
</script>

<style scoped>

</style>