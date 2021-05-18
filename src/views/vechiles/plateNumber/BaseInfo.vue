<template>
<div>
  <flow-head step=0></flow-head>
  <div style="padding-top: 50px">
  <h2>温馨提示</h2>
  <p>此功能旨在方便用户熟悉新车注册登记预选号牌业务操作流程，不校验基础信息的准确性，不保存任何信息，不发送短信验证码，所选号牌号码均无效</p>
  </div>
  <div>
    <table class="table_context" width="100%">
      <tr>
        <td width="40%" height="50" align="right" style="text-align: right;padding-right: 5px">车管所:<span style="color: red;">*</span></td>
        <td width="75%" height="50" align="left" style="text-align: left;padding-left: 5px">
          <el-select v-model="value" placeholder="请选择要办理新车上牌业务的车管所"  size="medium" style="width: 300px" @change="getSelectLocation">
            <el-option v-for="item in options"
                :key="item.id"
                :label="item.officeName"
                :value="item.id" >
            </el-option>
          </el-select>
        </td>
      </tr>
    </table>
    <div style="text-align: center">
      <el-button type="primary" @click="btnCLick">下一步</el-button>
    </div>
  </div>
</div>
</template>

<script>
import FlowHead from "@/components/FlowHead";
import {request} from "@/network/request";

export default {
  name: "BaseInfo",
  data(){
    return {
      options: [],
      value: '',
    }
  },
  methods:{
    btnCLick(){
      this.$router.push('inputInfo')
    },
    getSelectLocation(val){
      let obj={}
      obj = this.options.find((item)=>{
        return item.id === val;
      });
      // let location = ''
      // location = obj.location;
      // console.log("location-------------------",obj.location)
      this.$store.commit('updateCity',obj.city)
    },
  },
  components:{
    FlowHead
  },
  created() {
      request({
        url:'/vehicleAdmin/data',
        params:{
          province:'陕西省',
        }
      }).then(res=>{
        console.log(res)
         this.options=res.data
      }).catch(err=>{
        console.log(err)
      })
  }
}
</script>

<style scoped>

</style>