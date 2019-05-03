<template>
  <el-container direction="vertical">
    <el-main>
      <el-row :gutter="24">
        <el-col :lg="lay" :md="18">
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
        lay: {span: 13, offset: 5}
      }
    }
  }
</script>

<style>
    body {
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
</style>




