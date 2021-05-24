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
          <td class="title">申请业务</td>
          <td class="text">遗失补证</td>
        </tr>
        <tr style="padding: 5px 5px">
          <td class="title">业务流水号</td>
          <td class="text">{{this.$route.query.loseReplaceNumber}}</td>
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
    }
  }
}
</script>

<style scoped>

</style>