<template>
  <div>
    <tab-bar></tab-bar>
    <news></news>
    <traffic-service></traffic-service>
  </div>

</template>

<script>
import news from "@/views/news";
import trafficService from "@/views/trafficService";
import TabBar from "@/components/common/tabbar/TabBar";
import HomeTabBar from "@/components/common/tabbar/HomeTabBar";

export default {
  name: "Home",
  components:{
    news,
    trafficService,
    TabBar,
  }
}
</script>

<style scoped>

</style>
