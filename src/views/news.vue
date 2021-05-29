<template>
  <div>
    <div id="right" style="float: right;width: 20%;height: 1000px;position: absolute;right: 10px;">
      <div style="border: #EFF4F9 solid 1px;height: 30%;">
        <div style="border-bottom: #2C66A8 solid 2px;margin: 5px 5px;">
          <h2 style="padding: 10px 10px;">信息查询</h2>
        </div>
        <div class="form_item">
          <h3 style="font-size: 15px;">机动车违法查询</h3>
        </div>
        <div class="form_item">
          <input type="text" name="title" required  lay-verify="required" placeholder="请输入车牌号" autocomplete="off" class="layui-input">
        </div>
        <div class="form_item">
          <input type="text" name="title" required  lay-verify="required" placeholder="请输入发动机号后六位" autocomplete="off" class="layui-input">
        </div>
        <div class="form_item">
          <input style="background-color: #007DDB;color: white;font-size: 15px;" type="submit" name="title" required  lay-verify="required"  autocomplete="off" class="layui-input" value="查询">
        </div>
      </div>
      <div style="border: #EFF4F9 solid 1px;height: 30%;">
        <div style="border-bottom: #2C66A8 solid 2px;margin: 5px 5px;">
          <h2 style="padding: 10px 10px;">友情链接</h2>
        </div>
        <ul class="title_bar_ul">
          <li><a href="http://www.mps.gov.cn/n16/index.html" target="_blank">中华人民共和国公安部</a></li>
          <li><a href="http://www.tmri.cn/" target="_blank">公安部交通管理科学研究所</a></li>
          <li><a href="http://www.122.cn/" target="_blank">交通安全宣传网</a>></li>
          <li><a href="http://wsbs.shxga.gov.cn" target="_blank">陕西“互联网＋公安政务服务”平台</a></li>
        </ul>
      </div>
      <div style="border: #EFF4F9 solid 1px;height: 40%;">
        <div style="border-bottom: #2C66A8 solid 2px;margin: 5px 5px;">
          <h2 style="padding: 10px 10px;">联系方式</h2>
        </div>

        <div style="position:absolute; height:350px;overflow:auto;overflow-x:hidden;width: 100%;">
          <p>西安车管所:&nbsp;&nbsp;&nbsp;&nbsp; 029-85612820</p>
          <p>西安秩序处:&nbsp;&nbsp;&nbsp;&nbsp; 029-86755100</p>
          <p>西安互联网办:&nbsp;&nbsp; 029-85612836</p>
          <p>铜川车管所:&nbsp;&nbsp;&nbsp;&nbsp; 0919-2661116</p>
          <p>铜川秩序科:&nbsp;&nbsp;&nbsp;&nbsp; 0919-3286113</p>
          <p>宝鸡车管所:&nbsp;&nbsp;&nbsp;&nbsp; 0917-6555888</p>
          <p>宝鸡互联网办:&nbsp; 0917-6236153</p>
          <p>咸阳车管所:&nbsp;&nbsp;&nbsp;&nbsp; 029-33121258</p>
          <p>咸阳秩序科:&nbsp;&nbsp;&nbsp;&nbsp; 029-33556065</p>
          <p>渭南车管所:&nbsp;&nbsp;&nbsp;&nbsp; 0913-2661920</p>
          <p>渭南秩序处:&nbsp;&nbsp;&nbsp;&nbsp; 0913-2360063</p>
          <p>汉中车管所:&nbsp;&nbsp;&nbsp;&nbsp; 0916-2313000</p>
          <p>汉中秩序科:&nbsp;&nbsp;&nbsp;&nbsp; 0916-2688623</p>
          <p>安康车管所:&nbsp;&nbsp;&nbsp;&nbsp; 0915-3519861</p>
          <p>安康秩序科:&nbsp;&nbsp;&nbsp;&nbsp; 0915-8170201</p>
          <p>商洛车管所:&nbsp;&nbsp;&nbsp;&nbsp; 0914-2395461</p>
          <p>商洛秩序科:&nbsp;&nbsp;&nbsp;&nbsp; 0914-2396209</p>
          <p>延安车管所:&nbsp;&nbsp;&nbsp;&nbsp; 0911-2903086</p>
          <p>延安秩序科:&nbsp;&nbsp;&nbsp;&nbsp; 0911-2210722</p>
          <p>榆林车管所:&nbsp;&nbsp;&nbsp;&nbsp; 0912-3692617</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2330291 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
          <p>榆林秩序科:&nbsp;&nbsp;&nbsp;&nbsp; 0912-3850957</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3285367 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
          <p>杨凌车管所:&nbsp;&nbsp;&nbsp;&nbsp; 029-87031946</p>
          <p>机场违法办:&nbsp;&nbsp;&nbsp;&nbsp; 029-88796269</p>
          <p>机场指挥中心:&nbsp; 029-88798729</p>
          <p>总队车管处:&nbsp;&nbsp;&nbsp;&nbsp; 029-87680167</p>
          <p>总队秩序处:&nbsp;&nbsp;&nbsp;&nbsp; 029-87680189</p>
          <p>总队事故处:&nbsp;&nbsp;&nbsp;&nbsp; 029-87680079</p>
          <p>总队值班室:&nbsp;&nbsp;&nbsp;&nbsp; 029-87680110</p>
        </div>

      </div>
    </div>
    <div id="first" style="overflow: hidden;width:80%">
<!--      <div class="layui-carousel" id="test1" style="float: left;width: 30%">
        <div carousel-item >
          <div><a href="test.html"><img src="@/assets/img/权威.jpg"></a></div>
          <div><a href="test.html"><img src="@/assets/img/权威.jpg"></a></div>
          <div><a href="test.html"><img src="@/assets/img/交警.jpg"></a></div>
          <div><a href="test.html"><img src="@/assets/img/覆车之戒.png"></a></div>
          <div><a href="test.html"><img src="@/assets/img/权威解读.png"></a></div>
        </div>
      </div>-->
      <div class="block" style="float: left;width: 30%;padding: 5px 5px">
        <el-carousel height="290px">
<!--          <el-carousel-item v-for="item in newsImgList" :key="item">
&lt;!&ndash;            <h3 class="small">
              {{ item }}
            </h3>&ndash;&gt;
            <a href="test.html"><img v-bind:src="item"></a>
          </el-carousel-item>-->
          <el-carousel-item>
            <a href="test.html"><img src="@/assets/img/权威.jpg"></a>
          </el-carousel-item>
          <el-carousel-item>
            <a href="test.html"><img src="@/assets/img/权威.jpg"></a>
          </el-carousel-item>
          <el-carousel-item>
            <div><a href="test.html"><img src="@/assets/img/交警.jpg"></a></div>
          </el-carousel-item>
          <el-carousel-item>
            <div><a href="test.html"><img src="@/assets/img/覆车之戒.png"></a></div>
          </el-carousel-item>
          <el-carousel-item>
            <div><a href="test.html"><img src="@/assets/img/权威解读.png"></a></div>
          </el-carousel-item>

        </el-carousel>
      </div>

      <div class="news" style="float:left;margin: 20px;width: 30%">
        <h2>交管动态</h2>
        <ul>
          <li><a href="https://sn.122.gov.cn/#/jgdt/2021-05-28/20210528003120.html" title="陕西省公安厅交警总队曝光10家 重点交通违法高发危险品运输企业" target="_blank">陕西省公安厅交警总队曝光10家 重</a></li>
          <li><a href="https://sn.122.gov.cn/#/jgdt/2021-05-28/20210528003122.html" title="权威发布 | 中国与塞尔维亚签署驾驶证互认换领协议" target="_blank">权威发布 | 中国与塞尔维亚签署驾</a></li>
          <li><a href="https://sn.122.gov.cn/#/jgdt/2021-05-26/20210526003117.html" title="最新！西安市道路交通事故专业救治医院名单发布！" target="_blank">最新！西安市道路交通事故专业救治</a></li>
          <li><a href="https://sn.122.gov.cn/#/jgdt/2021-05-25/20210525003113.html" title="咸阳交警用心用情用智办好为民实事" target="_blank">咸阳交警用心用情用智办好为民实事</a></li>
          <li><a href="https://sn.122.gov.cn/#/jgdt/2021-05-24/20210524003109.html" title="权威发布 | 近日农村地区接连发生群死群伤交通事故 超员载客违法载人肇事突出 临水临崖弯坡路段风险高" target="_blank">权威发布 | 近日农村地区接连发生</a></li>
          <li><a href="https://sn.122.gov.cn/#/jgdt/2021-05-21/20210521003108.html">陕西两地交警护送发烧抽搐婴儿分秒必争 就医一周后婴儿苏醒</a></li>
        </ul>
      </div>
      <div class="news" style="float: left;margin: 20px;width: 30%">
        <h2>安全宣传</h2>
        <ul>
          <li><a href="https://sn.122.gov.cn/#/jsjy/2021-05-28/20210528003123.html" title="向右转小弯 向左转大弯" target="_blank">向右转小弯 向左转大弯</a></li>
          <li><a href="https://sn.122.gov.cn/#/jsjy/2021-05-26/20210526003118.html" title="车速快 关车窗" target="_blank">车速快 关车窗</a></li>
          <li><a href="https://sn.122.gov.cn/#/jsjy/2021-05-25/20210525003116.html" title="西安交警手绘“游戏棋”，整治不带头盔现象！" target="_blank">西安交警手绘“游戏棋”，整治不带</a></li>
          <li><a href="https://sn.122.gov.cn/#/jsjy/2021-05-25/20210525003114.html" title="不要见缝就钻" target="_blank">不要见缝就钻</a></li>
          <li><a href="https://sn.122.gov.cn/#/jsjy/2021-05-24/20210524003111.html" title="给自己留些空间" target="_blank">给自己留些空间</a></li>
          <li><a href="https://sn.122.gov.cn/#/jsjy/2021-05-21/20210521003107.html" title="意识决定成败">意识决定成败</a>></li>
        </ul>
      </div>
    </div>
    <div id="second" style="overflow: hidden;width:80%">
      <div class="news" style="float:left;margin: 15px;width: 30% ">
        <h2>业务热点</h2>
        <ul>
          <li><a href="https://sn.122.gov.cn/#/examplanpub" title="驾驶人考试预约计划公布" target="_blank">驾驶人考试预约计划公布</a></li>
          <li><a href="https://sn.122.gov.cn/#/examappointpub" title="驾驶人考试预约结果公布" target="_blank">驾驶人考试预约结果公布</a></li>
          <li><a href="https://sn.122.gov.cn/#/vehxhhdpub" title="互联网预选号牌号池公布" target="_blank">互联网预选号牌号池公布</a></li>
          <li><a href="https://sn.122.gov.cn/#/examydplanpub" title="驾驶人异地考试预约计划公布" target="_blank">驾驶人异地考试预约计划公布</a></li>
          <li><a href="https://sn.122.gov.cn/#/examydappointpub" title="驾驶人异地考试预约结果公布" target="_blank">驾驶人异地考试预约结果公布</a></li>
          <li><a href="https://sn.122.gov.cn/#/map-monitor" title="交通技术监控设备公布" target="_blank"><span class="dots">·</span>交通技术监控设备公布</a></li>
        </ul>
      </div>
      <div class="news" style="float:left;margin: 15px;width: 30%">
        <h2>信息公告</h2>
        <ul>
          <li><a href="https://sn.122.gov.cn/#/noticeDetail?fzjg=null&amp;tjyf=202104&amp;fwdmgl=1004" title="机动车强制报废公告" target="_blank">机动车强制报废公告</a></li>
          <li><a href="https://sn.122.gov.cn/#/noticeDetail?fzjg=null&amp;tjyf=202104&amp;fwdmgl=2006" title="驾驶证逾期未审验公告" target="_blank">驾驶证逾期未审验公告</a></li>
          <li><a href="https://sn.122.gov.cn/#/noticeDetail?fzjg=null&amp;tjyf=202104&amp;fwdmgl=2009" title="驾驶证逾期未换证公告" target="_blank">驾驶证逾期未换证公告</a></li>
          <li><a href="https://sn.122.gov.cn/#/noticeDetail?fzjg=null&amp;tjyf=202104&amp;fwdmgl=2058" title="机动车驾驶证旧证未收回作废公告" target="_blank">机动车驾驶证旧证未收回作废公告</a></li>
          <li><a href="https://sn.122.gov.cn/#/noticeDetail?fzjg=null&amp;tjyf=202104&amp;fwdmgl=1028" title="机动车号牌未收回作废公告" target="_blank">机动车号牌未收回作废公告</a></li>
          <li><a href="https://sn.122.gov.cn/#/noticeDetail?fzjg=null&amp;tjyf=202104&amp;fwdmgl=2002" target="_blank"><span class="dots">·</span>2021年04月逾期提交身体条件证明公告</a></li>
        </ul>
      </div>
      <div class="news" style="float: left;margin: 15px;width: 30%">
        <h2>信息公布</h2>
        <ul>
          <li><a href="https://sn.122.gov.cn/#/noticeDetail?fzjg=陕A&amp;tjyf=202104&amp;fwdmgl=6003" title="西安考试人数公布" target="_blank">西安考试人数公布</a></li>
          <li><a href="https://sn.122.gov.cn/#/noticeDetail?fzjg=陕C&amp;tjyf=202104&amp;fwdmgl=3001" title="宝鸡驾校培训质量公布" target="_blank">宝鸡驾校培训质量公布</a></li>
          <li><a href="https://sn.122.gov.cn/#/noticeDetail?fzjg=陕D&amp;tjyf=202104&amp;fwdmgl=6003" title="咸阳考试人数公布" target="_blank">咸阳考试人数公布</a></li>
          <li><a href="https://sn.122.gov.cn/#/noticeDetail?fzjg=陕A&amp;tjyf=202104&amp;fwdmgl=3001" title="西安驾校培训质量公布" target="_blank">西安驾校培训质量公布</a></li>
          <li><a href="https://sn.122.gov.cn/#/noticeDetail?fzjg=陕B&amp;tjyf=202104&amp;fwdmgl=3001" title="铜川驾校培训质量公布" target="_blank">铜川驾校培训质量公布</a></li>
          <li><a href="https://sn.122.gov.cn/#/noticeDetail?fzjg=陕B&amp;tjyf=202104&amp;fwdmgl=6003" target="_blank"><span class="dots">·</span>2021年04月铜川考试人数公布</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

layui.use('carousel', function(){
  var carousel = layui.carousel;
  //建造实例
  carousel.render({
    elem: '#test1'
    ,width: '300px' //设置容器宽度
    ,arrow: 'always' //始终显示箭头
    //,anim: 'updown' //切换动画方式
  });
});

export default {
  name: "news",
  data(){
    return {
      newsImgList:['@/assets/img/权威.jpg','@/assets/img/权威2.jpg','@/assets/img/交警.jpg','@/assets/img/覆车之戒.png','@/assets/img/权威解读.png']
    }
  }
}
</script>

<style scoped>
news {
  width: 30%;
  height: 300px;
  margin: 10px;
  /*background: url(img/bg.gif);*/
}

.news h2{
  padding-bottom: 5px;
  color: #2C66A8;
  font-weight: bold;
}

.news ul{
  padding:5px 10px ;
  background: white;
}

.news ul li{
  list-style: none;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px dashed gray;
  text-indent: 15px;
  font-size: 14px;
  /*background:url(img/tb.gif) no-repeat center left;*/
}
.news a{
  text-decoration: none;
  color:gray;
  font-size: 15px;
}
.news a:hover{
  text-decoration: underline;
  color: red;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>