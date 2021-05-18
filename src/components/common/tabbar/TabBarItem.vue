<template>

    <li  v-if="!isActive"class="layui-nav-item " @click="itemClick"><slot name="item-text"></slot></li>
    <li v-else class="layui-nav-item layui-this" @click="itemClick"><slot name="item-text"></slot></li>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!=-1
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>

</style>