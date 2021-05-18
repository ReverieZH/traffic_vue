<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column  label="序号" type="index"  width="180" ></el-table-column>
      <el-table-column prop="plateNumber" label="车牌号" width="180" v-if="false"></el-table-column>
      <el-table-column prop="carType" label="车辆类型" width="180"></el-table-column>
      <el-table-column prop="drivingType" label="驱动类型" width="180"></el-table-column>
      <el-table-column prop="fuelType" label="燃油类型" width="180"></el-table-column>
      <el-table-column prop="checkStation" label="监测站名称" width="180"></el-table-column>
      <el-table-column prop="checkDate" label="预约日期" width="180"></el-table-column>
      <el-table-column prop="startTime" label="开始时段" width="180"></el-table-column>
      <el-table-column prop="endTime" label="结束时段" width="180"></el-table-column>
      <el-table-column prop="status" label="状态" width="180">
        <template slot-scope="scope">
            <div  v-if="scope.row.status==0" style="color: red">申请失败</div>
            <div  v-else-if="scope.row.status==1" style="color:green">申请成功</div>
            <div  v-else-if="scope.row.status==2" style="color:blue;">申请中</div>
            <div  v-else-if="scope.row.status==3" style="color:green">选号成功</div>
         </template>
      </el-table-column>
      <el-table-column prop="address" label="查看">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="text-align: center;padding-top: 20px">
      <el-button type="primary"  @click="apply">添加申请</el-button>
    </div>
  </div>
</template>

<script>
import {request} from "@/network/request";

export default {
  name: "UserCheck",
  data(){
    return {
      tableData:[]
    }
  },
  methods:{
    handleClick(row){
      this.$router.push({
        path:'applyStatus',
        query: {
          applyNumber: row.applyNumber,
        }
      })
    },
    apply(){
      this.$router.push('baseInfo')
    }
  },
  created() {
    request({
      url:'/checkReverse/select',
      methods:'post',
      params:{
        username:this.$store.getters.getUsername
      }
    }).then(res=>{
        if(res.issuccess){
          this.tableData=res.checkreservations;
        }
    }).catch(err=>{

    })
  }
}
</script>

<style scoped>

</style>