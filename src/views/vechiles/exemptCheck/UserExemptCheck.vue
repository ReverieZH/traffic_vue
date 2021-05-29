<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column  label="序号" type="index"  width="180" ></el-table-column>
      <el-table-column prop="acNumber" label="申领编号" width="180" v-if="false"></el-table-column>
      <el-table-column prop="plateNumber" label="车牌号" width="180" ></el-table-column>
<!--      <el-table-column prop="insurancePhoto" label="强险照片" width="180">
        <template slot-scope="scope">
          <el-image  style="width: 100px; height: 100px"
              :src="scope.row.insurancePhoto"
              :preview-src-list="insurancePhoto">
          </el-image>
        </template>
      </el-table-column>
      <el-table-column prop="taxPhoto" label="车船险照片" width="180">
        <template slot-scope="scope">
          <el-image  style="width: 100px; height: 100px"
                     :src="scope.row.taxPhoto"
                     :preview-src-list="taxPhoto">
          </el-image>
        </template>
      </el-table-column>-->
      <el-table-column prop="endDate" label="检验有效期止" width="180">
        <template slot-scope="scope">
            {{showDate(scope.row.endDate)}}
        </template>
      </el-table-column>
<!--      <el-table-column prop="isNeedPaper" label="是否需要纸质凭证" width="180">
        <template slot-scope="scope">
          <div  v-if="scope.row.isNeedPaper==0" style="color: red">不需要</div>
          <div  v-else-if="scope.row.isNeedPaper==1" style="color:green">需要</div>
        </template>
      </el-table-column>-->
      <el-table-column prop="accessMethod" label="获取方式" width="180">
        <template slot-scope="scope">
          <div  v-if="scope.row.accessMethod==0" style="color: red">委托邮政寄递</div>
          <div  v-else-if="scope.row.accessMethod==1" style="color:green">前往窗口自取</div>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态" width="180">
        <template slot-scope="scope">
            <div  v-if="scope.row.status==0" style="color: red">申请失败</div>
            <div  v-else-if="scope.row.status==1" style="color:green">申请成功</div>
            <div  v-else-if="scope.row.status==2" style="color:blue;">申请中</div>
         </template>
      </el-table-column>
      <el-table-column  label="查看">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="padding-top: 5px">
      <el-pagination
          background
          layout="prev, pager, next"
          :total="total">
      </el-pagination>
    </div>
    <div style="text-align: center;padding-top: 20px">
      <el-button type="primary"  @click="apply">添加申请</el-button>
    </div>
  </div>
</template>

<script>
import {request} from "@/network/request";
import moment from "moment";

export default {
  name: "UserExemptCheck",
  data(){
    return {
      tableData:[],
      total:100
    }
  },
  methods:{
    handleClick(row){
      this.$router.push({
        path:'listview',
        query: {
          acNumber: row.acNumber,
        }
      })
    },
    apply(){
      this.$router.replace('read')
    },
    showDate(date){
      return moment(date).format("YYYY-MM-DD");
    }
  },
  created() {
    request({
      url:'/exemptedCheck/userapply',
      method:'post',
      params:{
        username:this.$store.getters.getUsername
      }
    }).then(res=>{
        if(res.issuccess){
          this.tableData=res.applyexemptedchecks;
        }
    }).catch(err=>{

    })
  }
}
</script>

<style scoped>

</style>