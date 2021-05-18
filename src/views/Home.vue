<template>
  <div>
    <news></news>
    <traffic-service></traffic-service>
  </div>

</template>

<script>
import news from "@/views/news";
import trafficService from "@/views/trafficService";

export default {
  name: "Home",
  components:{
    news,
    trafficService
  }
}
</script>

<style scoped>

</style>
