<template>
    <div class="container" style="padding-top: 40px">

        <router-link to="/index">Home</router-link> |
        <router-link to="/thing-details">ThingDeails</router-link>
        <router-link to="/thing-property-details">Thing property</router-link>
        <router-view/>
    </div>

<!--  <div id="app">-->
<!--    <div id="nav">-->
<!--        <img src="./assets/logo.png">-->
<!--        <div>-->
<!--          <p>-->
<!--            If Element is successfully added to this project, you'll see an-->
<!--            <code v-text="'<el-button>'"></code>-->
<!--            below-->
<!--          </p>-->
<!--          <el-button>el-button</el-button>-->
<!--        </div>-->
<!--        <HelloWorld msg="Welcome to Your Vue.js App"/>-->

<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
<!--    <router-view/>-->
<!--  </div>-->
</template>

<script>



  export default {
    name: 'app',
    components: {

    }
  }
</script>

<style>
    h3 {
        padding-top: 0.4em;
    }
</style>




