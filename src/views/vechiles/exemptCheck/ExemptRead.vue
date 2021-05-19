<template>
  <div>
    <el-steps :active="0"   finish-status="success" simple style="margin-top: 20px">
      <el-step title="业务须知" ></el-step>
      <el-step title="填写申请信息" ></el-step>
      <el-step title="选择获取方式" ></el-step>
      <el-step title="确认提交" ></el-step>
    </el-steps>
    <div style="left: 50%;right: 50%;width: 900px;margin:0 auto">
      <div style="text-align: center;padding-bottom: 10px">
        <h1 >免检车申领检验标志</h1>
      </div>
      <h2>一、申领免检标志条件</h2>
      <h2>(一)免检车辆范围为注册登记6年以内的非营运轿车(含大型轿车)和其它小型、微型载客汽车</h2>
      <h2>(二)不包括面包车、10座以及10座以上车辆</h2>
      <h2>(三)不包括车辆出厂之日起，超过4年未办理注册登记的车辆</h2>
      <h2>(四)车辆没有发生任何伤人交通事故且不存在非法改装被依法处罚的交通违法</h2>
      <h2>二、网上申请提交成功后，公安交通管理部门网办中心将在1个工作日内办理，期间您可以通过网办进度查询办理进度</h2>
      <h2>三、业务办理成功，选择邮寄方式获取纸质检验合格标志的，邮政人员将寄递检验合格标志，并收取邮寄费用</h2>
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
  name: "ExemptRead",
  data(){
    return {
      isAgree:false
    }
  },
  methods:{
    next(){
      if(this.isAgree){
        this.$router.push('info')
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