<template>
    <div>
      <el-steps :active="7"   finish-status="success" simple style="margin-top: 20px">
        <el-step title="业务须知" ></el-step>
        <el-step title="基本信息" ></el-step>
        <el-step title="选择时间" ></el-step>
        <el-step title="选择检测站" ></el-step>
        <el-step title="选择时段" ></el-step>
        <el-step title="确认预约信息" ></el-step>
        <el-step title="完成预约" ></el-step>
      </el-steps>
      <div style="padding-top:20px;margin: 0 auto;width:800px">
        <h1 >您已成功办理机动车检验预约业务,请记录以下信息</h1>
        <table  cellspacing="1" cellpadding="1" class="table_border">
          <tr style="padding: 5px 5px">
            <td class="title">申请人</td>
            <td class="text">{{this.$store.getters.getName}}</td>
          </tr>
          <tr>
            <td class="title">申请业务名称</td>
            <td class="text">机动车检验预约</td>
          </tr>
          <tr>
            <td class="title">检验时间</td>
            <td class="text">{{this.$store.getters.getApplyCheckform.checkDate}}</td>
          </tr>
          <tr>
            <td class="title">检测时段</td>
            <td class="text">{{this.$store.getters.getApplyCheckform.startTime}}-{{this.$store.getters.getApplyCheckform.endTime}}</td>
          </tr>
          <tr>
            <td class="title">检测站地点</td>
            <td class="text">{{this.$store.getters.getStation.stationname}}({{this.$store.getters.getStation.province}}{{this.$store.getters.getStation.city}})</td>
          </tr>
          <tr>
            <td class="title">预约码</td>
            <td class="text">{{this.$store.getters.getReserveNumber}}</td>
          </tr>
          <tr>
            <td class="title">系统提示</td>
            <td style="text-align: left;padding-left:5px">
              <h2>1.请牢记您的预约信息，若预约日期不能正常前往开始前24小时在[预约结果查询]进行取消预约操作</h2>
              <h2>2.在一个检验周期内，车辆取消预约两次，将不允许继续预约</h2>
              <h2>3.预约未按期检验,系统将记录黑名单,影响其他互联网业务办理</h2>
            </td>
          </tr>
        </table>
      </div>
    </div>
</template>

<script>
export default {
  name: "CompleteReserve"
}
</script>

<style scoped>
h1{
  margin: 10px 5px;
  font-size: 20px;
  padding-left: 10px;
}
h2{
  font-size: 15px;
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
  width: 1000px;
}
</style>