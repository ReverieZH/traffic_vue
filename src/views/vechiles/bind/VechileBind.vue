<template>
    <div>
      <el-page-header @back="goBack" content="绑定车辆">
      </el-page-header>
      <div  style="width: 800px;margin:0 auto;padding-top: 20px">
        <div>
          <h2>系统提醒：</h2>
          <h2> 1.为了您和他人的信息安全，您只能绑定本人车辆信息。</h2>
          <h2>2.学员、新车车主用户绑定机动车成功后，自动变更用户类型为车主用户。为了提供更多服务，您需要重新登录。</h2>
          <h2>3.如果绑定机动车后提示"用户只能绑定自己的机动车"，并且确认该机动车为本人机动车，可以点击【未找到机动车?】按钮申请更新机动车信息。</h2>
        </div>
        <div style="padding-top: 20px">
          <table  width="100%" >
            <tr>
              <td width="40%" height="50" align="right" style="text-align: right;padding-right: 5px">驾驶证档案编号:<span style="color: red;">*</span></td>
              <td width="75%" height="50" align="left" style="text-align: left;padding-left: 5px">
                <el-select v-model="carType" placeholder="请选择号牌种类"  size="medium" style="width: 300px">
                  <el-option
                      v-for="item in carTypeOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
              </td>
            </tr>
            <tr>
              <td width="40%" height="50" align="right" style="text-align: right;padding-right: 5px">号牌号码:<span style="color: red;">*</span></td>
              <td width="75%" height="50" align="left" style="text-align: left;padding-left: 5px">
                <el-input v-model="plateNumber" placeholder="" style="width: 300px"></el-input>
              </td>
            </tr>
          </table>
        </div>
        <div style="padding-top: 20px;text-align: center">
          <el-button  type="success" @click="bind">绑定机动车</el-button>
        </div>
      </div>
      <div  style="margin:0 auto;padding-top: 40px">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="plateNumber" label="车牌号码" width="180" ></el-table-column>
          <el-table-column prop="color" label="颜色" width="180"></el-table-column>
          <el-table-column prop="carType" label="车辆类型" width="180"></el-table-column>
          <el-table-column prop="factoryPlateModel" label="品牌模型" width="180"></el-table-column>
          <el-table-column prop="vin" label="VIN号" width="180"></el-table-column>
          <el-table-column prop="engineNumber" label="引擎号码" width="180"></el-table-column>
          <el-table-column prop="registrant" label="登记人" width="180"></el-table-column>
          <el-table-column prop="status" label="状态" width="180">
            <template slot-scope="scope">
              <div  v-if="scope.row.status==0" style="color: red">禁用中</div>
              <div  v-else-if="scope.row.status==1" style="color:green">正常</div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>
import {request} from "@/network/request";

export default {
  name: "VechileBind",
  data(){
    return {
      dlNumber:'',
      carType:'',
      plateNumber:'',
      carTypeOptions:[
        {
          value:'小型汽车',
          label:'小型汽车'
        },
        {
          value:'小型新能源汽车',
          label:'小型新能源汽车'
        },
        {
          value:'大型新能源汽车',
          label:'大型新能源汽车'
        }
      ],
      tableData:[]
    }
  },
  methods:{
    goBack(){
        this.$router.replace("/loginHome/dl")
    },
    bind(){
      request({
          url:'/vehicle/bind',
          method:'post',
          params:{
            username:this.$store.getters.getUsername,
            plateNumber:this.plateNumber
          }
      }).then(res=>{
          if(res.issuccess){
            this.$message({
              message: '绑定成功',
              type: 'success'
            });
          }else{
            this.$message({
              message: res.message,
              type: 'warning'
            });
          }
      }).catch(err=>{
        this.$message({
          message: '绑定失败',
          type:'warning'
        });
      })
    }
  },
  created() {
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
.table_context{
  font-family:"Trebuchet MS", Arial, Helvetica, sans-serif;
  width:750px;
  /*border-collapse:collapse;*/
}

</style>