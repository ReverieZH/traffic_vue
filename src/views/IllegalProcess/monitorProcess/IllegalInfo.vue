<template>
  <div>
    <el-page-header @back="goBack" content="电子监控处理">
    </el-page-header>
    <el-steps :active="2"   finish-status="success" simple style="margin-top: 20px">
      <el-step title="业务须知" ></el-step>
      <el-step title="选择监控记录" ></el-step>
      <el-step title="确认处罚信息" ></el-step>
    </el-steps>
    <div style="width: 800px;margin: 0 auto;text-align: center">
       <h2 style="padding-top: 20px;font-weight: bold">交通违法驾驶人确认书</h2>
      <div style="padding-top: 20px">
      <table  cellspacing="1" cellpadding="1"  class="table_border">
        <tr style="padding: 5px 5px">
          <td class="title">处罚机关</td>
          <td class="text" colspan="3">{{trafficOffence.punishOffice}}</td>
        </tr>
        <tr>
          <td class="title">违法时间</td>
          <td class="text" colspan="3">{{showDate(trafficOffence.trafficOffenceDate)}}</td>
        </tr>
        <tr>
          <td class="title">违法地点</td>
          <td class="text" colspan="3">{{trafficOffence.trafficOffencePlace}}</td>
        </tr>
        <tr>
          <td class="title">违法行为</td>
          <td class="text" colspan="3">{{trafficOffence.trafficOffenceAct}}</td>
        </tr>
        <tr>
          <td class="title">记分值</td>
          <td class="text">{{trafficOffence.score}}</td>
          <td class="title">罚金金额</td>
          <td class="text">{{trafficOffence.money}}</td>
        </tr>
      </table>
      </div>
      <div style="padding-top: 20px">
        <el-button @click="accept()" type="danger"  size="small">接受处罚</el-button>
        <el-button @click="reject()"   type="primary" size="small">不接受处罚</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {request} from "@/network/request";
import moment from "moment";

export default {
  name: "IllegalInfo",
  data(){
    return {
      trafficOffence:{}
    }
  },
  methods:{
    showDate(date){
      return moment(date).format("YYYY-MM-DD HH:mm:ss");
    },
    accept(){
        request({
            url:'/illegal/handle',
            method:'post',
            params:{
              username:this.$store.getters.getUsername,
              score:this.trafficOffence.score,
              trafficOffenceNumber:this.trafficOffence.trafficOffenceNumber,
              status:'1'
            }
        }).then(res=>{
            if(res.issuccess){
              this.$message({
                message: '处理成功',
                type: 'success'
              });
            }else{
              this.$message({
                message: '处理失败',
                type: 'warning'
              });
            }
        }).catch(err=>{
          this.$message({
            message: '处理失败',
            type: 'warning'
          });
        })
    },
    reject(){
      request({
        url:'/illegal/handle',
        method:'post',
        params:{
          trafficOffenceNumber:this.trafficOffence.trafficOffenceNumber,
          status:'0'
        }
      }).then(res=>{
        if(res.issuccess){
          this.$message({
            message: '处理成功',
            type: 'success'
          });
        }else{
          this.$message({
            message: '处理失败',
            type: 'warning'
          });
        }
      }).catch(err=>{
        this.$message({
          message: '处理失败',
          type: 'warning'
        });
      })
    }
  }
  ,created() {
    request({
        url:'/illegal/info',
        method:'post',
        params:{
          trafficOffenceNumber:this.$route.query.trafficOffenceNumber
        }
    }).then(res=>{
      if(res.issuccess){
        this.trafficOffence=res.trafficOffence
      }
    })
  }
}
</script>

<style scoped>
.table_border
{
  border-collapse: collapse;
  margin: 0 auto;
  text-align: center;
  /*border-color:#DCDCDC ;*/
  font-size: 15px;
  height: 300px;
}
.table_border tr{
  border: 1px solid #DCDCDC;
}
.table_border td{
  border: 1px solid #DCDCDC;
}
.title{
  background: #F5F5F5;
  font-size: 15px;
  font-weight: bold;
  width: 800px;
  color: #3F3F3F;
}
.text{
  width: 600px;
}
</style>