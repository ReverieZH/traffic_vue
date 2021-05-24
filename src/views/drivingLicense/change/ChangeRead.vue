<template>
  <div>
    <el-page-header @back="goBack" content="驾驶证业务/遗失补证">
    </el-page-header>
    <el-steps :active="0"   finish-status="success" simple style="margin-top: 20px">
      <el-step title="业务须知" ></el-step>
      <el-step title="用户申告" ></el-step>
      <el-step title="确认信息" ></el-step>
      <el-step title="资料填写" ></el-step>
      <el-step title="确认提交" ></el-step>
      <el-step title="完成提交" ></el-step>
    </el-steps>
    <div style="left: 50%;right: 50%;width: 900px;margin:0 auto">
      <div style="text-align: center;padding-bottom: 10px">
        <h1 >遗失补证</h1>
      </div>
      <h2>(1)申请人确认身份证在有效期限内且信息未发生变化,在暂住地居住的,请确认暂住证在有效期内,暂住证过期的请通过用户信息管理中的暂住证信息维护功能提交最新的暂住证信息,审核通过后方可办理</h2>
      <h2>(2)申请人确认所持驾驶证不具有记满12分、逾期未审验、被扣押、扣留、暂扣、注销、吊销或者锁定注销可恢复,撤销机动车驾驶证的情形</h2>
      <h2>(3)申请人所提交的申请,符合规定的将于提交后的1个工作日内受理,期间可以通过网办进度查询功能查询业务办理进度</h2>
      <h2>(4)申请成功后,如果选择邮政寄递的,邮政人员将上门交付机动车驾驶证及收费票据;如果选择窗口自取的,则自行到选择的自取点获取机动车行驶证</h2>
      <h2>请准备好以下费用</h2>
      <h2>1.机动车驾驶证工本费:10元/证。依据发改价格[2004]2831号</h2>
      <h2>2.选择邮政寄递的邮政速递费,市内20元、省内22元、省外30元</h2>
      <h2>*申请人在提交后视为业务已办理,不再接受退办,否则将记入黑名单,停止办理网上车辆和驾驶人业务。</h2>
      <h2>*在办理过程中，请您如实填写相关信息,对于提供虚假信息申办业务的,一经发现,将被记入"黑名单",停止办理网上机动车和驾驶人业务。由此产生的一切法律责任由申请人承担</h2>
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
  name: "ChangeRead",
  data(){
    return {
      isAgree:false
    }
  },
  methods:{
    next(){
      if(this.isAgree){
        this.$router.push('declare')
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