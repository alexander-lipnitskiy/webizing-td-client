<template>
  <el-container direction="vertical">
    <el-main>
      <el-row :gutter="24">
        <el-col :xs="18" :md="18" :offset="3">
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




