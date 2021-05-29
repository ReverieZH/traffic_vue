<template>
  <div>
    <el-steps :active="1"   finish-status="success" simple style="margin-top: 20px">
      <el-step title="基本信息" ></el-step>
      <el-step title="确认信息" ></el-step>
      <el-step title="选号" ></el-step>
    </el-steps>
  <div class="notice_main" style="padding-top: 50px">
    <div style="border-bottom: 1px #ccc solid;padding-bottom: 8px">
      <p style="line-height: 24px;font-size: 14px;padding: 4px 0 0 36px ;color:#bb8940;background-image: url(static/img/ts_03.png);background-repeat: no-repeat;background-position: 10px 8px;font-weight: bold">温馨提示</p>
      <ul class="ts">
        <li><span>*</span>该页面是新车选号。</li>
      </ul>
    </div>
    <div class="notice_check" style="text-align: center">
      <table class="table_context" width="100%">
        <tr>
          <td width="40%" height="50" align="right" style="text-align: right;padding-right: 5px">号牌种类:<span style="color: red;">*</span></td>
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
          <td width="40%" height="50" align="right" style="text-align: right;padding-right: 5px">机动车凭证:<span style="color: red;">*</span></td>
          <td width="75%" height="50" align="left"  style="text-align: left;padding-left: 5px">
            <el-select v-model="vehicleProof" placeholder="请选择机动车凭证"  size="medium" style="width: 300px">
              <el-option
                  v-for="item in licenseTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select></td>
        </tr>
        <tr>
          <td width="40%" height="50" align="right" style="text-align: right;padding-right: 5px">合格证号:<span style="color: red;">*</span></td>
          <td width="75%" height="50" align="left" style="text-align: left;padding-left: 5px">
            <el-input v-model="certificateNumber" placeholder="请输入合格证编号" style="width: 300px"></el-input>
          </td>
        </tr>
        <tr>
          <td width="40%" height="50" align="right" style="text-align: right;padding-right: 5px">品牌型号:<span style="color: red;">*</span></td>
          <td width="75%" height="50" align="left" style="text-align: left;padding-left: 5px">
            <el-input v-model="brandModel" placeholder="请输入品牌型号" style="width: 300px"></el-input>
          </td>
        </tr>
        <tr>
          <td width="40%" height="50" align="right" style="text-align: right;padding-right: 5px">VIN:<span style="color: red;">*</span></td>
          <td width="75%" height="50" align="left" style="text-align: left;padding-left: 5px">
            <el-input v-model="vin" placeholder="请输入车辆识别代号" style="width: 300px"></el-input>
          </td>
        </tr>
        <tr>
          <td width="40%" height="50" align="right" style="text-align: right;padding-right: 5px">所有人:<span style="color: red;">*</span></td>
          <td width="75%" height="50" align="left" style="text-align: left;padding-left: 5px">
            <el-input v-model="owner" placeholder="请输入所有人 " :disabled="true" style="width: 300px"></el-input>
          </td>
        </tr>
        <tr>
          <td width="40%" height="50" align="right" style="text-align: right;padding-right: 5px">可选号牌头:<span style="color: red;">*</span></td>
          <td width="75%" height="50" align="left" style="text-align: left;padding-left: 5px">
            <el-input v-model="optionalPlateHead" placeholder="可选号牌头" :disabled="true" style="width: 300px"></el-input></td>
        </tr>
        <tr>
          <td height="50" colspan="2" align="center">
            <el-button  @click="back">上一步</el-button>
            <el-button type="primary" @click="submit">提交</el-button>

          </td>
        </tr>
      </table>
    </div>
  </div>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
      <span>申请失败</span>
      <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import FlowHead from "@/components/FlowHead";
import {request} from "@/network/request";

export default {
  name: "InputPlateNumber",
  components:{
    FlowHead
  },
  data(){
    return {
      dialogVisible:false,
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
      licenseTypeOptions:[
        {
          value:'机动车凭证',
          label:'机动车凭证'
        },{
          value:'货物进口证明',
          label:'货物进口证明'
        }
      ],
      carType:'',
      vehicleProof:'',
      certificateNumber:'',
      brandModel:'',
      vin:'',
      username:this.$store.getters.getUsername,
      owner:'任泽华',
      optionalPlateHead:''
    }
  },
  methods:{
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
    addPlateNumberApply(){

    },
    back(){
      this.$router.go(-1)
    },
    submit(){
      request({
        url:'/plateApply/plateApply',
        method: 'post',
        params:{
          carType:this.carType,
          vehicleProof:this.vehicleProof,
          certificateNumber:this.certificateNumber,
          brandModel:this.brandModel,
          vin:this.vin,
          username:this.username,
          owner:this.owner,
          phoneNumber:'12591613691',
          optionalPlateHead:this.optionalPlateHead,
        }
      }).then(res=>{
        console.log("res:",res)
        console.log("issucces:",res.issuccess)
        console.log("applyNumber:",res.applyNumber)
        if(res.issuccess){
          this.$store.commit('updateApplyNumber',res.applyNumber)
          this.$router.replace({
            path:'applyStatus',
            query:{
              applyNumber:res.applyNumber
            }
          })
        }else{
          this.dialogVisible = true
        }
      }).catch(err=>{
        console.log(err)
      })
    }
  },
  created() {
    request({
      url:'/vehicleAdmin/getNumberHead',
      params:{
        province:'陕西省',
        city:this.$store.getters.getCity,
      }
    }).then(res=>{
      console.log(res)
      this.optionalPlateHead=res
    }).catch(err=>{
      console.log(err)
    })
  }
}
</script>

<style scoped>

</style>