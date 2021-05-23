<template>
    <div>
      <el-page-header @back="goBack" content="电子监控处理">
      </el-page-header>
      <el-steps :active="1"   finish-status="success" simple style="margin-top: 20px">
        <el-step title="业务须知" ></el-step>
        <el-step title="选择监控记录" ></el-step>
        <el-step title="确认处罚信息" ></el-step>
      </el-steps>
        <div  style="padding-top: 20px">
          <p style="color: red;padding: 0 5px">提示：红色字体表示需要到窗口办理</p>
          <div >
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="trafficOffenceNumber" label="违法编号" width="180" v-if="false"></el-table-column>
              <el-table-column prop="trafficOffenceDate" label="违法日期" width="180">
                <template slot-scope="scope">
                  {{showDate(scope.row.trafficOffenceDate)}}
                </template>
              </el-table-column>
              <el-table-column prop="trafficOffencePlace" label="违法地点" width="180"></el-table-column>
              <el-table-column prop="trafficOffenceAct" label="违法行为" width="180">
                <template slot-scope="scope">
                  <p v-if="scope.row.needWindow=='1'" style="color: red">
                    {{scope.row.trafficOffenceAct}}
                  </p>
                  <p v-if="scope.row.needWindow=='0'" >
                    {{scope.row.trafficOffenceAct}}
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="score" label="计分" width="180"></el-table-column>
              <el-table-column prop="money" label="罚款金额" width="180"></el-table-column>
              <el-table-column prop="" label="处理">
                <template slot-scope="scope">
                  <el-button @click="view(scope.row)"   size="small">查看</el-button>

                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
    </div>
</template>

<script>
import {request} from "@/network/request";
import moment from "moment";

export default {
  name: "IllegalList",
  data(){
    return {
        tableData:[]
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    },
    showDate(date){
      return moment(date).format("YYYY-MM-DD HH:mm:ss");
    },
    view(row){
      this.$router.push({
        path:'illegalInfo',
        query:{
          trafficOffenceNumber:row.trafficOffenceNumber
        }
      })
    },
    acceptPunlish() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  },
  created() {
    request({
      url:'/illegal/data',
      method:'post',
      params:{
        plateNumber:this.$route.query.plateNumber
      }
    }).then(res=>{
      if(res.issuccess){
        this.tableData=res.trafficOffences
      }
    }).catch(err=>{

    })
  }
}
</script>

<style scoped>

</style>