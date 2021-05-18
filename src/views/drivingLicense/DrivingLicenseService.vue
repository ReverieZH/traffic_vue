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
            <a href="carSearch.html" target="framName">  <div class="img"><img src="@/assets/img/xuanhao.png"></div>
              <p>本地考试预约</p>
            </a>
          </li>
          <li>
            <a href="phCheck.html" target="framName">  <div class="img"><img src="@/assets/img/jianyanyuyue.png"></div>
              <p>取消本地考试预约</p>
            </a>
          </li>
          <li>
            <a href="phCheckPic.html" target="framName">
              <div class="img"><img src="@/assets/img/shenlingmianjian.png"></div>
              <p>异地考试预约</p>
            </a>
          </li>
          <li>
            <a href="phCheck.html" target="framName">  <div class="img"><img src="@/assets/img/jianyanyuyue.png"></div>
              <p>取消异地考试预约</p>
            </a>
          </li>
          <!--<li>
              <a href="keynoteCar.html" target="framName">
              <div class="img"><img src="img/333_07.png"></div>
              <p>机动车检验预约 </p>
                  </a>
          </li>-->
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

          <li>
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
          </li>
          <li>
            <a href="noCarCheck.html" target="framName">
              <div class="img"><img src="@/assets/img/jiashizhengbuling.png"></div>
              <p>遗失补证</p>
            </a>
          </li>
          <!--<li>
              <a href="firstInterCar.html" target="framName">
              <div class="img"><img src="img/333_05.png"></div>
              <p>首次入城分析</p>
                  </a>
          </li>
          <li>
              <a href="frequently.html" target="framName">
              <div class="img"><img src="img/333_07.png"></div>
              <p>频繁过车分析</p>
                  </a>
          </li>
          <li>
              <a href="nightCar.html" target="framName">
              <div class="img"><img src="img/333_03.png"></div>
              <p>频繁夜行车分析</p>
                  </a>
          </li>
          <li>
              <a href="nightDay.html" target="framName">
              <div class="img"><img src="img/333_05.png"></div>
              <p>昼伏夜出车分析</p>
                  </a>
          </li>
          <li>
              <a href="peerCar.html" target="framName">
              <div class="img"><img src="img/22_03.png"></div>
              <p>同行车分析</p>
                  </a>
          </li>-->
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
              <div class="img"><img src="@/assets/img/weifachuli.png"></div>
              <p>延期换证</p>
            </a>
          </li>
          <li>
            <a href="auditing.html" target="framName">
              <div class="img"><img src="@/assets/img/fuakuanjiana.png"></div>
              <p>延期审验</p>
            </a>
          </li>
          <li>
            <a href="auditing.html" target="framName">
              <div class="img"><img src="@/assets/img/fuakuanjiana.png"></div>
              <p>延期提交身体条件证明</p>
            </a>
          </li>
          <!-- <li>
               <a href="controlRecord.html" target="framName">
               <div class="img"><img src="img/333_07.png"></div>
               <p>布控历史记录</p>
                   </a>
           </li>
           <li>
               <a href="alarmRecord.html" target="framName">
               <div class="img"><img src="img/333_05.png"></div>
               <p>布控报警记录</p>
                   </a>
           </li>-->
          <div class="clear"></div>
        </ul>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "DrivingLicenseService"
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