<template>
  <div id="third" style="width: 100%;">
    <div class="home_div">
      <div class="title-bar title-bar-ex" style="">
        <h6 >驾驶人考试</h6>
        <div class="clear"></div>
      </div>
      <div class="div">
        <ul>
          <li>
            <a href="carSearch.html" target="framName">  <div class="img"><img src="@/assets/img/bendikaoshiyuyue.png"></div>
              <p>本地考试预约</p>
            </a>
          </li>
          <li>
            <a href="phCheck.html" target="framName">  <div class="img"><img src="@/assets/img/quxiao_bendikaoshiyuyue.png"></div>
              <p>取消本地考试预约</p>
            </a>
          </li>
          <li>
            <a href="phCheckPic.html" target="framName">
              <div class="img"><img src="@/assets/img/yidikaoshiyuyue.png"></div>
              <p>异地考试预约</p>
            </a>
          </li>
          <li>
            <a href="phCheck.html" target="framName">  <div class="img"><img src="@/assets/img/quexiao_yidikaoshiyuyue.png"></div>
              <p>取消异地考试预约</p>
            </a>
          </li>
          <div class="clear"></div>
        </ul>
      </div>
    </div>
    <div class="home_div">
      <div class="title-bar title-bar-ex">
        <h6>补换领驾驶证</h6>
        <div class="clear"></div>
      </div>

      <div class="div">
        <ul>
<!--          <li>
            <a href="noCar.html" target="framName">
              <div class="img"><img src="@/assets/img/jiashizhengzhuce.png"></div>
              <p>期满换证</p>
            </a>
          </li>
          <li>
            <a href="noCarCheck.html" target="framName">
              <div class="img"><img src="@/assets/img/jiashizhengbuling.png"></div>
              <p>超龄换证</p>
            </a>
          </li>
          <li>
            <a href="noCarCheck.html" target="framName">
              <div class="img"><img src="@/assets/img/jiashizhengbuling.png"></div>
              <p>损毁换证</p>
            </a>
          </li>-->
          <li>
            <a @click="changeDrivingLicence" target="framName">
              <div class="img"><img src="@/assets/img/jiashizhengbuling.png"></div>
              <p>遗失补证</p>
            </a>
          </li>
          <div class="clear"></div>
        </ul>
      </div>
    </div>
    <div class="home_div">
      <div class="title-bar title-bar-ex">
        <h6>延期业务</h6>
        <div class="clear"></div>
      </div>
      <div class="div">
        <ul>
          <li>
            <a href="application.html" target="framName">
              <div class="img"><img src="@/assets/img/yanqihuanzheng.png"></div>
              <p>延期换证</p>
            </a>
          </li>
          <li>
            <a href="auditing.html" target="framName">
              <div class="img"><img src="@/assets/img/yanqishengyan.png"></div>
              <p>延期审验</p>
            </a>
          </li>
          <li>
            <a href="auditing.html" target="framName">
              <div class="img"><img src="@/assets/img/yanqishengtizhengming.png"></div>
              <p>延期提交身体条件证明</p>
            </a>
          </li>
          <div class="clear"></div>
        </ul>
      </div>
    </div>
<!--    <div class="home_div">-->
<!--      <div class="title-bar title-bar-ex">-->
<!--        <h6>驾驶证业务</h6>-->
<!--        <div class="clear"></div>-->
<!--      </div>-->
<!--      <div class="div">-->
<!--        <ul>-->
<!--          <li>-->
<!--            <a   @click="bindDrivingLicence" target="framName">-->
<!--              <div class="img"><img src="@/assets/img/weifachuli.png"></div>-->
<!--              <p>绑定驾驶证</p>-->
<!--            </a>-->
<!--          </li>-->
<!--          <div class="clear"></div>-->
<!--        </ul>-->
<!--      </div>-->
<!--    </div>-->

  </div>
</template>

<script>
export default {
  name: "DrivingLicenseService",
  methods:{
    bindDrivingLicence(){
      this.$router.replace("drivingLicence/bind")
    },
    changeDrivingLicence(){
      this.$router.replace("change/read")
    }
  }
}
</script>

<style scoped>
.title-bar-ex{
  padding: 10px;margin: 10px;border-radius:5px;background-color:#EFF4F9;
}
h6{
  color: #2C973F;
  font-size: 15px;
  font-weight:bold
}
</style>