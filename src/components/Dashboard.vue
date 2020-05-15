<template>
    <div>
<el-row :gutter="12" style="padding-bottom: 5px;">
  <el-col :span="8">
    <el-card shadow="never" style="height: 177px;">
      <div slot="header" class="clearfix">
        <span>Led</span>
      </div>
      <div style="display: flex;justify-content: center;">
          <div v-if="led == true">
            <img width="64" height="64" src="../../icons/led-on.png">
          </div>
          <div v-else>
            <img width="64" height="64" src="../../icons/led-off.png">
          </div>

          <el-button style="float: right; margin-left: 3px" size="mini" v-on:click="swicthLed()">{{this.led ? 'Turn off' : 'Turn on'}}</el-button>
      </div>
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="never" style="height: 177px;">
      <div slot="header" class="clearfix">
        <span>Motion PIR</span>
      </div>
      <div style="display: flex;justify-content: center;">
<img width="64" height="64" src="../../icons/motion.png">

      <div class="center" v-on:click="swicthPir()">{{this.motion ? 'Undetected' : 'Detected'}}</div>
      </div>
      
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="never" style="height: 177px;">
      <div slot="header" class="clearfix">
        <span>Light</span>
      </div>
      <div style="display: flex;justify-content: center;">
      <div v-if="light == true">
            <img width="64" height="64" src="../../icons/sun.png" v-on:click="swicthLight()">
          </div>
          <div v-else>
            <img width="64" height="64" src="../../icons/moon.png" v-on:click="swicthLight()">
          </div>
      </div>
    </el-card>
  </el-col>
</el-row>
<el-row :gutter="24">
   <el-col :span="24">
    <el-card shadow="never">
      <div slot="header" class="clearfix">
        <span>Gyroscope</span>
      </div>
      <div style="display: flex;justify-content: center; flex-direction: raw; align-items: center; width: 100%">
        <div><img width="64" height="64" src="../../icons/gyroscope.png" ></div>
        <div>X: 65 Y: 45 Z: 76</div>
      </div>
      
    </el-card>
  </el-col>
</el-row>
    </div>
</template>

<script>
    export default {
        name: "Dashboard",
        data() {
            return {
                led: false,
                motion: false,
                gyroscope: {

                },
                light: false
            }
        },
        methods: {
          swicthLed() {
            console.log(this.led)
            this.led = !this.led
          },
          swicthPir() {

            this.motion = !this.motion
          },
          swicthLight() {

            this.light = !this.light
          }
        }
    }
</script>

<style scoped>
#divider {
  margin-bottom: 24px;
}
.center {
  height: 70px;
  line-height: 70px; /* same as height! */
}
</style>