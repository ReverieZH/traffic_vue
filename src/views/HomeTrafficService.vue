<template>
  <div>
    <tab-bar></tab-bar>
    <traffic-service></traffic-service>
  </div>
</template>

<script>
import trafficService from "@/views/trafficService";
import TabBar from "@/components/common/tabbar/TabBar";

export default {
  name: "HomeTrafficService",
  components:{
    TabBar,
    trafficService
  }
}
</script>

<style scoped>

</style>