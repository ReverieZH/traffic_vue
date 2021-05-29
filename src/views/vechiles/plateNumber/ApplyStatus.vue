<template>
  <div>
    <el-steps :active="2"   finish-status="success" simple style="margin-top: 20px">
      <el-step title="基本信息" ></el-step>
      <el-step title="确认信息" ></el-step>
      <el-step title="选号" ></el-step>
    </el-steps>
     <div v-if="status==0" class="if_div">
       <div>
         <div class="staus">
           <el-progress  type="circle" :percentage="100" status="exception" width="50"></el-progress>
         </div>
         <div class="text">
           <h2 >信息审核失败!</h2>
         </div>
       </div>
     </div>
     <div v-else-if="status==1" class="if_div">
       <div >
           <div class="staus">
             <el-progress  type="circle" :percentage="100" status="success" width="50"></el-progress>
           </div>
           <div class="text">
             <h2 >信息审核成功!</h2>
           </div>
       </div>
     </div>
     <div v-else-if="status==2" class="if_div">
       <div>
         <div class="staus">
           <el-progress  type="circle" :percentage="50" width="50"></el-progress>
         </div>
         <div class="text">
           <h2 >信息审核中!</h2>
         </div>
       </div>
     </div>
      <div v-else-if="status==3" class="if_div">
        <div>
          <div class="staus">
            <el-progress  type="circle" :percentage="100" status="success" width="50"></el-progress>
          </div>
          <div class="text">
            <h2 >选号已完成!</h2>
          </div>
        </div>
      </div>
    <div>
      <table class="table_context" width="100%">
        <tr>
          <td width="40%" height="50" align="right" style="text-align: right;padding-right: 5px;font-size: 10px"><h2 class="label">车辆类型</h2></td>
          <td width="75%" height="50" align="left" style="text-align: left;padding-left: 5px;font-size: 10px"><h2>{{carType}}</h2></td>
        </tr>
        <tr>
          <td width="40%" height="50" align="right" style="text-align: right;padding-right: 5px;font-size: 10px"><h2 class="label">机动车凭证</h2></td>
          <td width="75%" height="50" align="left" style="text-align: left;padding-left: 5px;font-size: 10px"><h2>{{vehicleProof}}</h2></td>
        </tr>
        <tr>
          <td width="40%" height="50" align="right" style="text-align: right;padding-right: 5px;font-size: 10px"><h2 class="label">合格证号</h2></td>
          <td width="75%" height="50" align="left" style="text-align: left;padding-left: 5px;font-size: 10px"><h2>{{certificateNumber}}</h2></td>
        </tr>
        <tr>
          <td width="40%" height="50" align="right" style="text-align: right;padding-right: 5px;font-size: 10px"><h2 class="label">品牌型号</h2></td>
          <td width="75%" height="50" align="left" style="text-align: left;padding-left: 5px;font-size: 10px"><h2>{{brandModel}}</h2></td>
        </tr>
        <tr>
          <td width="40%" height="50" align="right" style="text-align: right;padding-right: 5px;font-size: 10px"><h2 class="label">VIN号</h2></td>
          <td width="75%" height="50" align="left" style="text-align: left;padding-left: 5px;font-size: 10px"><h2>{{VIN}}</h2></td>
        </tr>
        <tr>
          <td width="40%" height="50" align="right" style="text-align: right;padding-right: 5px;font-size: 10px"><h2 class="label">可选号牌头</h2></td>
          <td width="75%" height="50" align="left" style="text-align: left;padding-left: 5px;font-size: 10px"><h2>{{optionalPlateHead}}</h2></td>
        </tr>
        <tr>
          <td width="40%" height="50" align="right" style="text-align: right;padding-right: 5px;font-size: 10px"><h2 class="label">所有人</h2></td>
          <td width="75%" height="50" align="left" style="text-align: left;padding-left: 5px;font-size: 10px"><h2>{{owner}}</h2></td>
        </tr>
      </table>
    </div>
    <div class="explain">
      <h1>服务说明</h1>
      <h3>1.预选号牌操作起止时间为每天9:00-18:00</h3>
      <h3>2.预选号牌完成后，请在3个工作日内完成机动车上牌，逾期未办理的，所选号牌码失效，两年内禁止通过互联网预选号牌</h3>
       <div class="btn_div">
         <el-button type="primary" @click="chooseNumber">开始选号</el-button>
       </div>
    </div>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
      <span>当前状态不可选号</span>
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
  name: "ApplyStatus",
  data(){
    return {
      dialogVisible:false,
      status:2,
      carType:'',
      vehicleProof:'',
      certificateNumber:'',
      brandModel:'',
      VIN:'',
      optionalPlateHead:'',
      owner:'',
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
    chooseNumber(){
      console.log('status:',this.status)
      if(this.status==1||this.status=='1'){
        this.$router.replace({
          path:'cpn',
          query:{
            applyNumber:this.$route.query.applyNumber
          }
        })
      }else{
        this.dialogVisible = true
      }
    },
    getInfo(){
      let userPlateApply;
      userPlateApply=this.$store.getters.userPlateApply;
      this.carType=userPlateApply.carType;
          this.vehicleProof=userPlateApply.vehicleProof;
          this.certificateNumber=userPlateApply.certificateNumber;
          this.brandModel=userPlateApply.brandModel;
          this.VIN=userPlateApply.vin;
          this.optionalPlateHead=userPlateApply.optionalPlateHead;
          this.owner=userPlateApply.owner;
          this.status=userPlateApply.status;
    }
  },
  components:{
    FlowHead
  },
  created() {
    request({
        url:'/plateApply/getInfo',
        params:{
          applyNumber:this.$route.query.applyNumber
        }
    }).then(res=>{
        if(res.issuccess){
          this.carType=res.plateNumberApply.carType;
          this.vehicleProof=res.plateNumberApply.vehicleProof;
          this.certificateNumber=res.plateNumberApply.certificateNumber;
          this.brandModel=res.plateNumberApply.brandModel;
          this.VIN=res.plateNumberApply.vin;
          this.optionalPlateHead=res.plateNumberApply.optionalPlateHead;
          this.owner=res.plateNumberApply.owner;
          this.status=res.plateNumberApply.status;
        }
    }).catch(err=>{

    })

    /*let userPlateApply;
    userPlateApply=this.$store.getters.userPlateApply;
    console.log("userPlateApply:",userPlateApply)
    if( Object.keys(userPlateApply).length==0){
      console.log("userPlateApply为空")
      request({
        url:'/plateApply/dispatch',
        methods:'post',
        params:{
          username:this.$store.getters.getUsername
        }
      }).then(res=>{
        if(res.isApplyed){
          this.$store.commit('updateUserPlateApply',res.plateNumberApply)
          this.carType=res.plateNumberApply.carType;
          this.vehicleProof=res.plateNumberApply.vehicleProof;
          this.certificateNumber=res.plateNumberApply.certificateNumber;
          this.brandModel=res.plateNumberApply.brandModel;
          this.VIN=res.plateNumberApply.vin;
          this.optionalPlateHead=res.plateNumberApply.optionalPlateHead;
          this.owner=res.plateNumberApply.owner;
          this.status=res.plateNumberApply.status;
        }else{
          this.$router.go(-1)
        }
      }).catch(err=>{

      })
    }
    console.log("执行getInfo")
   this.getInfo()*/
    /*request({
      url:'/plateApply/applyInfo',
      params:{
        applyNumber:this.$store.getters.getApplyNumber,
      }
    }).then(res=>{
      console.log(res)
      this.status=res.platenumberapply.status
    }).catch(err=>{
      console.log(err)
    })*/
  }
}
</script>

<style scoped>
.label{
  color: gray;
}
.if_div{
  padding-top: 50px;
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