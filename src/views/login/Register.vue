<template>

  <div class="login-container">
    <el-form :model="ruleForm" :rules="rules"
             status-icon
             ref="ruleForm"
             label-position="left"
             label-width="0px"
             class="demo-ruleForm login-page">
      <h3 class="loginTitle">交通服务平台注册</h3>
      <el-form-item prop="certificatetype">
        <el-select v-model="ruleForm.certificatetype" placeholder="请选择证件类型" style="width: 350px">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="certificatenumber">
        <el-input type="text" v-model="ruleForm.certificatenumber" auto-complete="off" placeholder="请输入证件号码"></el-input>
      </el-form-item>
      <el-form-item prop="name">
        <el-input type="text" v-model="ruleForm.name" auto-complete="off" placeholder="请输入真实姓名"></el-input>
      </el-form-item>
      <el-form-item prop="username">
        <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="phoneNumber">
        <el-input type="text" v-model="ruleForm.phoneNumber" auto-complete="off" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password"
                  v-model="ruleForm.password"
                  auto-complete="off"
                  placeholder="输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="rePassword">
        <el-input type="password"
                  v-model="ruleForm.rePassword"
                  auto-complete="off"
                  placeholder="再次输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="success" style="width:100%;" @click="handleSubmit" :loading="logining">立即注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {request} from "@/network/request";

export default {
  name:'Register',
  data(){
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.rePassword !== '') {
          this.$refs.ruleForm.validateField('rePassword');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      logining: false,
      options: [{
        value: 'A',
        label: 'A居民身份证'
      }, {
        value: 'C',
        label: 'C军官证'
      }, {
        value: 'D',
        label: 'D士兵证'
      }, {
        value: 'E',
        label: 'E军官离退休证'
      }, {
        value: 'F',
        label: 'F境外人员身份证明'
      },{
        value: 'F',
        label: 'F境外人员身份证明'
      },{
        value: 'G',
        label: 'G外交人员身份证明'
      },{
        value: 'I',
        label: 'I外国人永久人员身份证明'
      },{
        value: 'Q',
        label: 'Q港澳台居民居住证'
      }
      ],
      ruleForm: {
        certificatetype:'',
        certificatenumber:'',
        name:'',
        username: '',
        password: '',
        rePassword:'',
        phoneNumber:'',
      },
      rules: {
        certificatetype:[{required: true, message: '请选择证件类型', trigger: 'blur'}],
        certificatenumber:[{required: true, message: '请输入证件号码', trigger: 'blur'}],
        name:[{required: true, message: '请输入真实姓名', trigger: 'blur'}],
        username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        phoneNumber: [{required: true, message: '请输入手机号', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码'}, {trigger: 'blur',validator: validatePass,},{ min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },],
        rePassword: [{required: true, message: '请确认密码'},{ trigger: 'blur',validator: validatePass2},{ min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },]
      },
      checked: false
    }
  },
  methods: {
    handleSubmit(event){
      this.$refs.ruleForm.validate((valid) => {
        if(valid){
          this.logining = true;
          request({
            url:'/user/register',
            method:'post',
            params:{
              username:this.ruleForm.username,
              password:this.ruleForm.password,
              phoneNumber:this.ruleForm.phoneNumber
            }
          }).then(res=>{
            if(res.issuccess){
              this.$router.replace({path: '/login'});
            }else{
              this.logining = false;
              this.$alert('注册失败', '信息', {
                confirmButtonText: '确定'
              })
            }
          }).catch(err=>{
            console.log('error submit!');
            return false;
          })
        }else{

        }
      })
    }
  }
};
</script>

<style scoped>
.loginTitle{
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 5px;
  color: #0d419d;
}
.login-container {
  width: 100%;
  height: 100%;
}
.login-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
</style>