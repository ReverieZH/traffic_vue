<template>
  <div id="third" style="width: 75%;">
    <div class="home_div">
      <div class="title-bar" style="padding: 10px;margin: 10px;border-radius:5px;background-color:#EFF4F9;">
        <h6 style="color:#2C66A8;font-size: 20px;font-weight:bold">机动车业务</h6>
        <div class="clear"></div>
      </div>
      <div class="div">
        <ul>
          <li>
            <a href="carSearch.html" target="framName">  <div class="img"><img src="@/assets/img/xuanhao.png"></div>
              <p>新车选号</p>
            </a>
          </li>
          <li>
            <a href="phCheck.html" target="framName">  <div class="img"><img src="@/assets/img/jianyanyuyue.png"></div>
              <p>机动车检验预约</p>
            </a>
          </li>
          <li>
            <a href="phCheckPic.html" target="framName">
              <div class="img"><img src="@/assets/img/shenlingmianjian.png"></div>
              <p>免检标志申领</p>
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
      <div class="title-bar">
        <h6>驾驶证业务</h6>
        <div class="clear"></div>
      </div>

      <div class="div">
        <ul>

          <li>
            <a href="noCar.html" target="framName">
              <div class="img"><img src="@/assets/img/jiashizhengzhuce.png"></div>
              <p>机动车驾驶证注册</p>
            </a>
          </li>
          <li>
            <a href="noCarCheck.html" target="framName">
              <div class="img"><img src="@/assets/img/jiashizhengbuling.png"></div>
              <p>驾驶证挂失补领</p>
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
      <div class="title-bar">
        <h6>违法处理业务</h6>
        <div class="clear"></div>
      </div>

      <div class="div">
        <ul>
          <li>
            <a href="application.html" target="framName">
              <div class="img"><img src="@/assets/img/weifachuli.png"></div>
              <p>违法处理</p>
            </a>
          </li>
          <li>
            <a href="auditing.html" target="framName">
              <div class="img"><img src="@/assets/img/fuakuanjiana.png"></div>
              <p>罚款缴纳</p>
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
  name: "trafficService"
}
</script>

<style scoped>
.title-bar {
  padding: 10px;margin: 10px;border-radius:5px;background-color:#EFF4F9;
}
.title_bar_ul{
  padding:5px 10px ;
  background: white;
}
.title_bar_ul li{
  list-style: none;
  height: 30px;
  line-height: 30px;
  border: 1px solid #EFF4F9;
  border-radius: 5px;
  margin: 5px 5px;
  text-indent: 15px;
  font-size: 14px;
}
</style>