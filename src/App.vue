<template>
  <el-row :gutter="24">
    <el-col :lg="lg" :sm="sm" :md="md">
      <el-container>
        <el-header style="height: 60px">
          <div class="header">
            <span style="font-size:24px; color: #67C23A;">Webizing Web Thing Model</span>
          </div>
          
        <div class="divider"></div>

        </el-header>
        <el-container>
          <el-aside style="width: auto; padding-top: 1px;">
              <el-menu
                    default-active="/led/model"
                    class="el-menu-vertical-demo"
                    :collapse="isCollapse"
                    @select="handleSelect"
              >

              <el-menu-item v-for="(key, index) in things" :key="index" :index="'/thing/' + key">
                <router-link tag="span" v-bind:to="'/thing/' + key">{{$store.getters.getThings()[key].name}} </router-link> 
              </el-menu-item>

              <!-- <el-menu-item index="/airQuality/model">
                <i class="el-icon-wind-power"></i>
                <router-link tag="span" v-bind:to="`/airQuality/model`">Air Quality </router-link>
              </el-menu-item>

              <el-menu-item index="/cushion/model">
                <i class="el-icon-table-lamp"></i>
                <router-link tag="span" v-bind:to="`/cushion/model`">Cushion</router-link>
              </el-menu-item>
              <el-menu-item index="/matress/model">
                <i class="el-icon-table-lamp"></i>
                <router-link tag="span" v-bind:to="`/matress/model`">Matress</router-link>
              </el-menu-item>
              <el-menu-item index="/energyApplianceMonitor/model">
                <i class="el-icon-monitor"></i>
                <router-link tag="span" class="development" v-bind:to="`/energyApplianceMonitor/model`">Energy Appliance Monitor</router-link>
              </el-menu-item>
              <el-menu-item index="/energyMonitor/model">
                <i class="el-icon-monitor"></i>
                <router-link tag="span" v-bind:to="`/energyMonitor/model`">Energy Monitor</router-link>
              </el-menu-item>

              <el-menu-item index="/raspberry-pi/model">
                <router-link tag="span" v-bind:to="`/raspberry-pi/model`">Raspberry Pi</router-link>
              </el-menu-item>

              <el-menu-item index="/led/model">
                <router-link tag="span" v-bind:to="`/led/model`">Led</router-link>
              </el-menu-item>

              <el-menu-item index="/motion/model">
                <router-link tag="span" v-bind:to="`/motion/model`">Motion</router-link>
              </el-menu-item>

              <el-menu-item index="/light/model">
                <router-link tag="span" v-bind:to="`/light/model`">Light sensor</router-link>
              </el-menu-item>
              <el-menu-item index="/smartWatch/model">
                <i class="el-icon-watch-1"></i>
                <router-link tag="span" v-bind:to="`/smartWatch/model`">Smart Watch</router-link>
              </el-menu-item> -->
              <el-divider></el-divider>
              <el-menu-item index="/settings">
                <i class="el-icon-setting"></i>
                <router-link tag="span" v-bind:to="`/settings`">TD Manager</router-link>
              </el-menu-item>
              </el-menu> 
          </el-aside>
          <el-main style=" padding-left: 3em; padding-top: 4em;">
            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
          </el-main>
        </el-container>
      </el-container>
    </el-col>
  </el-row>


</template>
<script>


  export default {
    name: 'App',
    components: {

    },
    created() {
      this.$store.dispatch('fetchThings');
    },
    data() {
      return {
        lg: {span: 20, offset: 2},
        md: {span: 22, offset: 1},
        sm: {span: 22, offset: 1},
        isCollapse: false
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        this.$router.push({ path: `${key}` })
      }
    },
    computed: {
      things() {
        const things = this.$store.getters.getThings();
        const keys = Object.keys(things);

        return keys
      },
    }
  }
</script>

<style>
    body {
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
    .header {
      display: flex;
      height: 100%;
      align-items: center;
      padding-left: 5px;
    }

    .divider {
      display: block;
      height: 1px;
      width: 100%;
      margin: 0;
      background-color: #DCDFE6;
      position: relative;
    }

    .development {
        color: #F56C6C;
    }

</style>




