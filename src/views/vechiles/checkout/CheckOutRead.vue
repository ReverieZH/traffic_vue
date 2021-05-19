<template>
  <div>
    <el-steps :active="0"   finish-status="success" simple style="margin-top: 20px">
      <el-step title="业务须知" ></el-step>
      <el-step title="基本信息" ></el-step>
      <el-step title="选择时间" ></el-step>
      <el-step title="选择检测站" ></el-step>
      <el-step title="选择时段" ></el-step>
      <el-step title="确认预约信息" ></el-step>
      <el-step title="完成预约" ></el-step>
    </el-steps>
    <div style="left: 50%;right: 50%;width: 900px;margin:0 auto">
      <div style="text-align: center;padding-bottom: 10px">
          <h1 >机动车检验预约</h1>
      </div>
      <h2>(1)申请人可在机动车检验有效期满前3个月内提出申请</h2>
      <h2>(2)在检验机动车前,申请人应该处理完毕机动车所有交通违法行为和交通事故</h2>
      <h2>(3)机动车检验时，需要携带机动车行驶证,有效期内的机动车交通事故责任强制险、车船税纳税证明或免税证明</h2>
      <h2>(4)申请人应在预约的检验机构和时间检验机动车，如未按时检验机动车的,两次以上将不允许网上办理机动车和驾驶人业务</h2>
      <h2>(5)需取消预约的,至少提前2天提出申请(非工作日也可提出取消申请)</h2>
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
  name: "CheckOutRead",
  data(){
    return {
      isAgree:false
    }
  },
  methods:{
    next(){
      if(this.isAgree){
        this.$router.push('baseInfo')
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