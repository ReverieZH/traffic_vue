<template>
  <div>
    <el-steps :active="1"   finish-status="success" simple style="margin-top: 20px">
      <el-step title="业务须知" ></el-step>
      <el-step title="基本信息" ></el-step>
      <el-step title="选择时间" ></el-step>
      <el-step title="选择检测站" ></el-step>
      <el-step title="选择时段" ></el-step>
      <el-step title="确认预约信息" ></el-step>
      <el-step title="完成预约" ></el-step>
    </el-steps>
    <div style="left: 50%;right: 50%;width: 500px;margin:0 auto">

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="padding-top: 20px">
        <el-form-item label="车牌号" prop="plateNumber">
          <el-input v-model="ruleForm.plateNumber" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="所有人" prop="owner">
          <el-input v-model="ruleForm.owner" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="车辆类型" prop="name">
          <el-radio-group v-model="ruleForm.carType">
            <el-radio label="小型汽车"></el-radio>
            <el-radio label="小型新能源汽车"></el-radio>
            <el-radio label="大型新能源汽车"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="驱动类型" prop="region">
          <el-radio-group v-model="ruleForm.drivingType">
            <el-radio label="两驱(含非全时四驱)"></el-radio>
            <el-radio label="全时四驱"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="车辆属性" prop="region">
          <el-radio-group v-model="ruleForm.vehicleProperties">
            <el-radio label="小型载客汽车"></el-radio>
            <el-radio label="小型载货汽车(含专项作业车)"></el-radio>
            <el-radio label="危化品运输车"></el-radio>
            <el-radio label="校车"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="燃油类型" prop="region">
          <el-radio-group v-model="ruleForm.fuelType">
            <el-radio label="汽油,混合动力,耗电，燃气"></el-radio>
            <el-radio label="柴油,柴电混合(总质量小于等于1500KG)" ></el-radio>
            <el-radio label="柴油,柴电混合(总质量大于1500KG)" ></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button @click="resetForm('ruleForm')">上一步</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
        </el-form-item>
      </el-form>

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
  name: "ApplyCheckInfo",
  data(){
    return {
      dialogVisible:false,
      ruleForm: {
        plateNumber: this.$store.getters.getCOPlateNumber ,
        owner: this.$store.getters.getName,
        carType: '',
        drivingType: '',
        vehicleProperties: '',
        fuelType: '',
      },
      rules: {
        plateNumber: [
          { required: true, message: '请输入车牌号', trigger: 'blur' },
          { min: 3, max: 7, message: '长度在 3 到 7 个字符', trigger: 'blur' }
        ],
        owner: [
          { required: true, message: '请输入所有人姓名', trigger: 'blur' }
        ],
        carType: [
          {  required: true, message: '请选择车辆类型', trigger: 'change' }
        ],
        drivingType: [
          {  required: true, message: '请选择驱动类型', trigger: 'change' }
        ],
        vehicleProperties: [
          { required: true, message: '请选择车辆类型', trigger: 'change' }
        ],
        fuelType: [
          { required: true, message: '请选择燃油类型', trigger: 'change' }
        ],
      },
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
    }
  },
  methods:{
    submitForm(formName) {
     /* this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });*/
      console.log("form:",this.ruleForm)
      this.$store.commit('updateCheckForm',this.ruleForm)
      this.$router.push('chooseDate')
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
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
  },
}
</script>

<style scoped>

</style>