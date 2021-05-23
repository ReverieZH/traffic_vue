<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

import TabBar from "@/components/common/tabbar/TabBar";

export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style>

</style>
