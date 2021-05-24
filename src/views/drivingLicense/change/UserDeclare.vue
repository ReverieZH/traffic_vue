<template>
  <div>
    <el-page-header @back="goBack" content="驾驶证业务/遗失补证">
    </el-page-header>
    <el-steps :active="1"   finish-status="success" simple style="margin-top: 20px">
      <el-step title="业务须知" ></el-step>
      <el-step title="用户申告" ></el-step>
      <el-step title="确认信息" ></el-step>
      <el-step title="资料填写" ></el-step>
      <el-step title="确认提交" ></el-step>
      <el-step title="完成提交" ></el-step>
    </el-steps>
    <div style="left: 50%;right: 50%;width: 900px;margin:0 auto">
      <div style="text-align: center;padding-bottom: 10px">
        <h1 >申告的义务和内容</h1>
      </div>
      <h2 style="font-weight: bold">机动车驾驶证申请人应当如实申告是否具有下列不准申请的情形</h2>
      <h2>一、器质性心脏病、癫痫病、美尼尔氏症、眩晕症、癔病、震癫麻痹、精神病、痴呆以及影响肢体活动的神经系统疾病等妨碍安全驾驶疾病</h2>
      <h2>二、三年内吸食、注射毒品行为或者强制隔离戒毒措施未满三年,或者长期服用依赖性精神药品成瘾未戒除的</h2>
      <h2>三、提供虚假申请材料、以欺骗等不正当手段申领机动车驾驶证</h2>
      <h2>四、造成交通事故后逃逸构成犯罪</h2>
      <h2>五、饮酒后或者醉酒驾驶机动车发生重大交通事故构成犯罪</h2>
      <h2>六、醉酒驾驶机动车或者饮酒后驾驶营运机动车依法被吊销机动车驾驶证未满五年</h2>
      <h2>七、醉酒驾驶营运机动车依法被吊销机动车驾驶证未满十年</h2>
      <h2>八、因其他情形依法被吊销机动车驾驶证未满两年</h2>
      <h2>九、驾驶证可依法被撤销未满三年</h2>
      <h2>十、法律和行政法规定的其他不准申请的情形</h2>
      <div style="text-align: center;padding-top: 20px">
        <el-checkbox label="上述内容本人已认真阅读,本人不具有所列的不准申请的情形 "v-model="isAgree" size="medium" ></el-checkbox>
      </div>
      <div style="text-align: right">
        <el-button  @click="back()">上一步</el-button>
        <el-button type="primary" @click="next()">下一步</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDeclare",
  data(){
    return {
      isAgree:false
    }
  },
  methods:{
    next(){
      if(this.isAgree){
        this.$router.push('confirm')
      }
    },
    back(){
      this.$router.go(-1)
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