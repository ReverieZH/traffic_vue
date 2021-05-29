<template>
  <div>
    <el-page-header @back="goBack" content="驾驶证业务/遗失补证">
    </el-page-header>
    <el-steps :active="5"   finish-status="success" simple style="margin-top: 20px">
      <el-step title="业务须知" ></el-step>
      <el-step title="用户申告" ></el-step>
      <el-step title="确认信息" ></el-step>
      <el-step title="资料填写" ></el-step>
      <el-step title="完成提交" ></el-step>
    </el-steps>
    <div  style="left: 50%;right: 50%;width: 800px;margin:0 auto;padding-top: 20px">
      <h2>您已成功提交遗失补正业务申请,请记录以下信息</h2>
      <table  cellspacing="1" cellpadding="1"  class="table_border">
        <tr style="padding: 5px 5px">
          <td class="title" style="height: 10px">申请人</td>
          <td class="text" style="height: 10px">{{ this.$store.getters.getName }}</td>
        </tr>
        <tr style="padding: 5px 5px">
          <td class="title" style="height: 10px">申请业务</td>
          <td class="text" style="height: 10px">遗失补证</td>
        </tr>
        <tr style="padding: 5px 5px">
          <td class="title">业务流水号</td>
          <td class="text">{{this.$route.query.loseReplaceNumber}}</td>
        </tr>
        <tr style="padding: 5px 5px">
          <td class="title">申请时间</td>
          <td class="text">{{getCurrentTime()}}</td>
        </tr>
        <tr>
          <td class="title">系统提示</td>
          <td style="text-align: left;padding-left:5px">
            <h1>您所提交的申请，将于提交后的一个工作日(不含当天)受理，届时会发生短信和受理结果，您也可以登录本平台查询业务办理情况</h1>
            <h1>业务成功受理后，如果选择邮政寄递的，邮政人员将上门收取费用，交付机动车驾驶证及收费票据。如果选择窗口自取的，则自行到选择的自取网点窗口领取机动车驾驶证。</h1>
            <br>
            <br>
            <br>
            <h1>请您提前准备好以下资料:</h1>
            <h1>1.现场核对机动车驾驶人身份证明原件。</h1>
          </td>
        </tr>
      </table>
    </div>
    <div style="padding-top: 20px;text-align: right">
      <el-button type="primary" @click="back()">返回</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewChangeApply",
  methods:{
    back(){
      this.$router.replace("/loginHome/dl")
    },
    getCurrentTime() {
      //获取当前时间并打印
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth()+1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
      let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
      _this.gettime = yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss;
     return _this.gettime
    }
  }
}
</script>

<style scoped>

</style>