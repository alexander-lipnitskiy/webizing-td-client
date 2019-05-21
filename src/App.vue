<template>
  <el-container direction="vertical">
    <el-main>
      <el-row :gutter="24">
        <el-col :lg="lg" :sm="sm">
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

    },
    data() {
      return {
        lg: {span: 18, offset: 3},
        sm: {span: 22, offset: 1}
      }
    }
  }
</script>

<style>
    body {
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
</style>




