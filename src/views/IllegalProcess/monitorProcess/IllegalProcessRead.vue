<template>
  <div>
    <el-steps :active="0"   finish-status="success" simple style="margin-top: 20px">
      <el-step title="业务须知" ></el-step>
      <el-step title="选择监控记录" ></el-step>
      <el-step title="确认处罚信息" ></el-step>
    </el-steps>
    <div style="left: 50%;right: 50%;width: 900px;margin:0 auto">
      <div style="text-align: center;padding-bottom: 10px">
        <h1 >电子监控处理</h1>
      </div>
      <h2>(1)本平台仅可使用用户驾驶证处理本人机动车的非现场交易违法记录</h2>
      <h2>(2)本平台仅可处理用户本人机动车注册地发生的,适用简易程序处理(罚款不超过200元)的非现场交通违法记录,其他记录请到违法发生地或车辆注册地交通违法处理窗口处理</h2>
      <h2>(3)对于用户驾驶证累积记分将超过12分(含12分)的非现场交通违法记录,请用户到违法发生地或车辆注册地交通违法处理窗口处理</h2>
      <h2>(4)由于网络数据传输延迟,可能导致互联网平台驾驶证累 记分未及时更新,如您在公安机关交通管理部门被计分,请短时间内不要使用本平台处理计分的交通违法记录,以免超分</h2>
      <h2>(5)如需处罚决定书,用户申请邮政寄递或持驾驶证至处理机关打印;如需罚款票据,请至缴款银行营业厅索取</h2>
      <h2>(6)如您对违法事实有异议,请前往违法发生地公安机关交通管理部门办理</h2>
      <div style="text-align: center;padding-top: 20px">
        <el-checkbox label="阅读并同意"v-model="isAgree" size="medium" ></el-checkbox>
      </div>
      <div style="text-align: right">
        <el-button  disabled>上一步</el-button>
        <el-button type="primary" @click="next()">下一步</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IllegalProcessRead",
  data(){
    return {
      isAgree:false
    }
  },
  methods:{
    next(){
      if(this.isAgree){
        this.$router.push({
          path:'list',
          params:{
            plateNumber:this.$store.getters.getIllegalProcessPlateNumber
          }
        })
      }
    }
  }
}
</script>

<style scoped>
h1{
  font-size: 18px;
  font-weight: bold;
}
</style>