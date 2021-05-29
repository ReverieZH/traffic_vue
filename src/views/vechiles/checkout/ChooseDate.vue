<template>
  <div>
  <div>
    <el-steps :active="2"   finish-status="success" simple style="margin-top: 20px">
      <el-step title="业务须知" ></el-step>
      <el-step title="基本信息" ></el-step>
      <el-step title="选择时间" ></el-step>
      <el-step title="选择检测站" ></el-step>
      <el-step title="选择时段" ></el-step>
      <el-step title="确认预约信息" ></el-step>
      <el-step title="完成预约" ></el-step>
    </el-steps>
  </div>
  <div style="width: 800px;margin:0 auto">

    <el-calendar v-model="dateValue"  >
      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
      <template
          slot="dateCell"
          slot-scope="{date, data} ">
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
        </p>
      </template>
    </el-calendar>
    <div style="text-align: right">
      <el-button @click="back()">上一步</el-button>
      <el-button type="primary" @click="next()">下一步</el-button>
    </div>
  </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: "ChooseDate",
  data(){
    return {
      dateValue:new Date(),
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      }
    }
  },
  methods:{
    next(){
      let time=moment(this.dateValue).format("YYYY-MM-DD");
      console.log(time)
      this.$store.commit('updateTime',time)
      this.$router.push("chooseStation")
    }
  }
}
</script>

<style scoped>
.is-selected {
  color: #1989FA;
}
</style>