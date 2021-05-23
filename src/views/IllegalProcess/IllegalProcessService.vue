<template>
  <div id="third" style="width: 100%;">
    <div class="home_div">
      <div class="title-bar title-bar-ex" style="">
        <h6 >违法处理业务</h6>
        <div class="clear"></div>
      </div>
      <div class="div">
        <ul>
          <li>
            <a @click="MonitorProcessClick" target="framName">  <div class="img"><img src="@/assets/img/weifachuli.png"></div>
              <p>电子监控违法处理</p>
            </a>
          </li>
          <li>
            <a href="phCheck.html" target="framName">  <div class="img"><img src="@/assets/img/fuakuanjiana.png"></div>
              <p>缴纳罚款</p>
            </a>
          </li>
          <div class="clear"></div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IllegalProcessService",
  methods:{
    bindDrivingLicence(){
      this.$router.replace("drivingLicence/bind")
    },
    MonitorProcessClick(){
      this.$router.replace("illegal/process")
    }
  }
}
</script>

<style scoped>
.title-bar-ex{
  padding: 10px;margin: 10px;border-radius:5px;background-color:#FFE4E1;
}
h6{
  color: #B22222;
  font-size: 15px;
  font-weight:bold
}
</style>