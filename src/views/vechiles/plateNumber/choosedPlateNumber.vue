<template>
  <div >
    <div >
      <div class="staus">
        <el-progress  type="circle" :percentage="100" status="success" width="50"></el-progress>
      </div>
      <div class="text">
        <h2 >您已成功选号!</h2>
      </div>
    </div>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="applyNumber" label="申请号" width="180" v-if="false"></el-table-column>
        <el-table-column prop="plateNumberHead" label="车牌头" width="180"></el-table-column>
        <el-table-column prop="platenumber" label="号码" width="180"></el-table-column>
        <el-table-column prop="locationName" label="所在地" width="180"></el-table-column>
        <el-table-column prop="address" label="查看">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="explain">
      <h1>服务说明</h1>
      <h3>1.预选号牌操作起止时间为每天9:00-18:00</h3>
      <h3>2.预选号牌完成后，请在3个工作日内完成机动车上牌，逾期未办理的，所选号牌吗失效，两年内禁止通过互联网预选号牌</h3>
      <div class="btn_div">
        <el-button type="primary" @click="chooseNumber">打印凭证</el-button>
      </div>

    </div>
  </div>
</template>

<script>
import {request} from "@/network/request";

export default {
  name: "choosedPlateNumber",
  data(){
    return {
      tableData: [],
    }
  },created() {
    request({
      url:'/plateApply/applyed',
      methods:'post',
      params:{
        username:this.$store.getters.getUsername
      }
    }).then(res=>{
      if(res.issuccess){
        this.tableData=res.applyednumbers;
      }
    }).catch(err=>{

    })
  },methods:{
    handleClick(row) {
      this.$router.push({
        path: 'applyStatus',
        query: {
          applyNumber: row.applyNumber,
        }
      })
    }
  }
}
</script>

<style scoped>
.label{
  color: gray;
}

.staus{
  float: left
}
.text{
  float: left;padding: 4px 10px
}
h2{
  margin-top: 10px
}
h1{
  font-size: 20px;
  font-weight: bold;
}
.explain{
  float: left;
  left: 100px;
  padding-top: 20px;
  padding-left: 30%;
}
h3{
  margin-top: 10px;
  font-size: 15px;
}
.btn_div{
  text-align: center;
  margin-top: 20px;
}
</style>