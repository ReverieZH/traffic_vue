<template>
  <div>
    <el-page-header @back="goBack" content="电子监控处理">
    </el-page-header>
    <div style="width:800px;margin:0 auto;padding-top: 40px">
        <h2>当前账号的机动车列表</h2>
      <div  style="padding-top: 20px">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="plateNumber" label="车牌号码" width="180"></el-table-column>
          <el-table-column prop="carType" label="车辆类型" width="180"></el-table-column>
          <el-table-column prop="registrant" label="登记人" width="180"></el-table-column>
          <el-table-column prop="" label="处理">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)"   size="small">查看违章</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import {request} from "@/network/request";

export default {
  name: "MonitorProcess",
  data(){
    return {
      tableData:[]
    }
  },
  methods:{
    handleClick(row){
      this.$store.commit("updatePlateNumber",row.plateNumber)
      this.$router.push('read')
    }
  },created() {
    request({
      url:'/vehicle/userVehicle',
      method:'post',
      params:{
        username:this.$store.getters.getUsername
      }
    }).then(res=>{
      if(res.issuccess){
        this.tableData=res.cars;
      }
    })
  }
}
</script>

<style scoped>

</style>