<template>
<!--  <el-container direction="vertical">-->
<!--    <el-main>-->
<!--      <el-row :gutter="24">-->
<!--        <el-col :span="14" :offset="5">-->
<!--          <router-link to="/index">Home</router-link> |-->
<!--          <router-link to="/thing-details">ThingDeails</router-link>-->
<!--          <router-link to="/thing-property-details">Thing property</router-link>-->
<!--          <router-view/>-->
<!--        </el-col>-->
<!--      </el-row>-->

<!--    </el-main>-->
<!--  </el-container>-->

    <Simple></Simple>




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

import Simple from './components/Simple';

  export default {
    name: 'App',
    components: {
        Simple
    }
  }
</script>

<style>
    @import "../node_modules/leaflet/dist/leaflet.css";

    .leaflet-fake-icon-image-2x {
        background-image: url(../node_modules/leaflet/dist/images/marker-icon-2x.png);
    }
    .leaflet-fake-icon-shadow {
        background-image: url(../node_modules/leaflet/dist/images/marker-shadow.png);
    }

    body {
        margin: 0px;
        font-family: Helvetica, Verdana, sans-serif;
    }

    #side {
        float: left;
        width: 208px;
    }

    #full_div {
        position: absolute;
        overflow-x: auto;
        top: 0;
        right: 0;
        left: 208px;
        bottom: 0;
        padding-left: 8px;
        border-left: 1px solid #ccc;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    li {
        font: 200 15px/1.5 Helvetica, Verdana, sans-serif;
        border-bottom: 1px solid #ccc;
    }

    li:last-child {
        border: none;
    }

    li a {
        font-size: 15px;
        padding-left: 8px;
        text-decoration: none;
        color: #000;
        display: block;

        -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
        -moz-transition: font-size 0.3s ease, background-color 0.3s ease;
        -o-transition: font-size 0.3s ease, background-color 0.3s ease;
        -ms-transition: font-size 0.3s ease, background-color 0.3s ease;
        transition: font-size 0.3s ease, background-color 0.3s ease;
    }

    li a:hover {
        font-size: 20px;
        background: #f6f6f6;
    }
  #full_div {
      position: absolute;
      overflow-x: auto;
      top: 0;
      right: 0;
      left: 208px;
      bottom: 0;
      padding-left: 8px;
      border-left: 1px solid #ccc;
  }
</style>




