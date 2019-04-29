<template>
  <el-container direction="vertical">
    <el-main>
      <el-row :gutter="24">
        <el-col :span="14" :offset="5">
<!--          <router-link to="/index">Home</router-link> |-->
<!--          <router-link to="/thing-details">ThingDeails</router-link>-->
<!--          <router-link to="/thing-property-details">Thing property</router-link>-->
          <router-view/>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>


  export default {
    name: 'App',
    components: {
    }
  }
</script>

<style>
    body {
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
</style>




