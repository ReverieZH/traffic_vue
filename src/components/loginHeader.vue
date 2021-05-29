<template>
  <div>
    <p>您好，{{this.$store.getters.getName}}。 欢迎登录互联网交通安全综合服务管理平台！ 您的账户已于{{getCurrentTime()}}通过{{ip}}地址登录，请注意账号安全，若有异常，及时修改密码。</p>
  </div>
</template>

<script>
export default {
  name: "loginHeader",
  data() {
    return {
      ip: ''
    };
  },
  methods: {
    getUserIP(onNewIP) {
      var cip = returnCitySN["cip"];
      //给vuedata对象里的字段赋值
      this.ip = cip

    },
    getCurrentTime() {
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth()+1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
      let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
      _this.gettime = yy+'/'+mm+'/'+dd+' '+hh+':'+mf+':'+ss;
      return _this.gettime
    }
  },

  mounted() {
    this.getUserIP((ip) => {
      this.ip = ip;
    });
  }
}
</script>

<style scoped>

</style>