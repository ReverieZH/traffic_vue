<template>
  <div style="width: 800px;margin:0 auto">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="" width="40">
        <template scope="scope">
          <el-radio :label="scope.$index" v-model="radio" @change.native="getCurrentRow(scope.row)" style="color: #fff;padding-left: 10px; margin-right: -25px;"></el-radio>
        </template>
      </el-table-column>
      <el-table-column  label="序号" type="index"  width="180" ></el-table-column>
      <el-table-column prop="checkstationid" label="申请号" width="180" v-if="false"></el-table-column>
      <el-table-column prop="stationname" label="监测站名称" width="280"></el-table-column>
      <el-table-column prop="phoneNumber" label="联系人电话" width="280"></el-table-column>
    </el-table>
    <div style="text-align: right">
      <el-button @click="back()">上一步</el-button>
      <el-button type="primary" @click="next()">下一步</el-button>
    </div>
  </div>
</template>

<script>
import {request} from "@/network/request";

export default {
  name: "ChooseCheckStation",
  data(){
    return {
      radio:'',
      tableData:[],

    }
  },
  created() {
    request({
      url:'/checkStaion/data',
      methods:'post',
      params:{
        province:this.$store.getters.getProvince
      }
    }).then(res=>{
      if(res.issuccess){
        this.tableData=res.checkstations;
      }
    }).catch(err=>{

    })
  },
  methods: {
    getCurrentRow(row) {
      let station={
        checkstationid:'',
        province:'',
        city:'',
        stationname:'',
        phoneNumber:''
      }
      station.checkstationid=row.checkstationid;
      station.province=row.province;
      station.city=row.city;
      station.stationname=row.stationname;
      station.phoneNumber=row.phoneNumber;
      this.$store.commit("updateStation",station)
    },
    next(){
      this.$router.push("choosePeriods")
    }
  }
}
</script>

<style scoped>

</style>