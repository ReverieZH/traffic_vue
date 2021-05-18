<template>
   <div>
     <el-steps :active="4"   finish-status="success" simple style="margin-top: 20px">
       <el-step title="业务须知" ></el-step>
       <el-step title="基本信息" ></el-step>
       <el-step title="选择时间" ></el-step>
       <el-step title="选择检测站" ></el-step>
       <el-step title="选择时段" ></el-step>
       <el-step title="确认预约信息" ></el-step>
       <el-step title="完成预约" ></el-step>
     </el-steps>
     <div style="padding-top: 20px;width: 800px;margin:0 auto">
       <el-table :data="tableData" style="width: 100%">
         <el-table-column label="" width="40">
           <template scope="scope">
             <el-radio :label="scope.$index" v-model="radio" @change.native="getCurrentRow(scope.row)" style="color: #fff;padding-left: 10px; margin-right: -25px;"></el-radio>
           </template>
         </el-table-column>
         <el-table-column  label="序号" type="index"  width="180" ></el-table-column>
         <el-table-column prop="periodName" label="检测时段名称" width="180" v-if="false"></el-table-column>
         <el-table-column prop="startTime" label="开始检测时间" width="280"></el-table-column>
         <el-table-column prop="endTime" label="结束检测时间" width="280"></el-table-column>
       </el-table>
     </div>
     <div style="text-align: right;padding-top: 20px">
       <el-button @click="back()">上一步</el-button>
       <el-button type="primary" @click="next()">下一步</el-button>
     </div>
   </div>
</template>

<script>
export default {
  name: "ChooseTimePeriods",
  data(){
    return {
        radio:'',
        tableData:[{
          periodName:'上午第一场',
          startTime:'08:00',
          endTime:'12:00',
        },{
          periodName:'下午第二场',
          startTime:'13:00',
          endTime:'17:00',
        }],
    }
  },
  methods:{
    getCurrentRow(row) {
      let time={
        startTime:row.startTime,
        endTime:row.endTime
      }
      this.$store.commit("updatePeriod",time)
    },
    next(){
      this.$router.push('confirm')
    }
  }
}
</script>

<style scoped>

</style>