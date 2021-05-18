<template>
  <div id="third" style="width: 100%;">
    <div class="home_div">
      <div class="title-bar title-bar-ex" style="">
        <h6 >预选号牌业务</h6>
        <div class="clear"></div>
      </div>
      <div class="div">
        <ul>
          <li>
            <a target="framName" @click="choosePlateNumberclick()">  <div class="img"><img src="@/assets/img/xuanhao.png"></div>
              <p>新车选号</p>
            </a>
          </li>
          <li>
            <a @click="liclick('cpn')" target="framName">  <div class="img"><img src="@/assets/img/jianyanyuyue.png"></div>
              <p>本地二手车过户预选号牌</p>
            </a>
          </li>
          <li>
            <a @click="liclick('cpn')" target="framName">
              <div class="img"><img src="@/assets/img/shenlingmianjian.png"></div>
              <p>异地迁入预选号牌</p>
            </a>
          </li>
          <li>
            <a target="framName" @click="applyedclick('userApply')">  <div class="img"><img src="@/assets/img/xuanhao.png"></div>
              <p>我的申请</p>
            </a>
          </li>
          <li>
            <a target="framName" @click="applyedclick('choosedNumber')">  <div class="img"><img src="@/assets/img/xuanhao.png"></div>
              <p>我的选号</p>
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
        <h6>补换领机动车牌证</h6>
        <div class="clear"></div>
      </div>

      <div class="div">
        <ul>

          <li>
            <a href="noCar.html" target="framName">
              <div class="img"><img src="@/assets/img/jiashizhengzhuce.png"></div>
              <p>补换领机动车号牌</p>
            </a>
          </li>
          <li>
            <a href="noCarCheck.html" target="framName">
              <div class="img"><img src="@/assets/img/jiashizhengbuling.png"></div>
              <p>补换领机动车行驶证</p>
            </a>
          </li>
          <li>
            <a href="noCarCheck.html" target="framName">
              <div class="img"><img src="@/assets/img/jiashizhengbuling.png"></div>
              <p>免检车申领检验标志</p>
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
        <h6>其他机动车业务</h6>
        <div class="clear"></div>
      </div>

      <div class="div">
        <ul>
          <li>
            <a  @click="applyCheckClick" target="framName">
              <div class="img"><img src="@/assets/img/weifachuli.png"></div>
              <p>机动车检验预约</p>
            </a>
          </li>
          <li>
            <a href="auditing.html" target="framName">
              <div class="img"><img src="@/assets/img/fuakuanjiana.png"></div>
              <p>机动车转籍申请</p>
            </a>
          </li>
          <li>
            <a href="auditing.html" target="framName">
              <div class="img"><img src="@/assets/img/fuakuanjiana.png"></div>
              <p>变更联系方式</p>
            </a>
          </li>
          <li>
            <a  @click="userCheckClick" target="framName">
              <div class="img"><img src="@/assets/img/weifachuli.png"></div>
              <p>我的预约</p>
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
import {request} from "@/network/request";

export default {
  name: "VechilesService",
  methods:{
    choosePlateNumberclick(){
      this.$router.push("userApply")
    },
    applyCheckClick(){
      this.$router.replace("applyCheck/read")
    },
    applyedclick(url){
      this.$router.replace(url)
    },
    userCheckClick(){
      this.$router.replace("applyCheck/userCheck")
    }
  }
}
</script>

<style scoped>
.title-bar-ex{
  padding: 10px;margin: 10px;border-radius:5px;background-color:#EFF4F9;
}
h6{
  color: #2C66A8;
  font-size: 15px;
  font-weight:bold
}
</style>