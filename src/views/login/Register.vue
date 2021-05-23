<template>

  <div class="login-container">
    <el-form :model="ruleForm" :rules="rules"
             status-icon
             ref="ruleForm"
             label-position="left"
             label-width="0px"
             class="demo-ruleForm login-page">
      <h3 class="loginTitle">交通服务平台注册</h3>
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
      ruleForm: {
        username: '',
        password: '',
        rePassword:'',
        phoneNumber:'',
      },
      rules: {
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