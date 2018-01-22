<template>
  <div class="g_container">
    <!-- 全局头部 -->
    <div class="g_top">
      <div class="top-left">
          <img src="http://img.zcool.cn/community/0490ca555e8d6f000001fbab9418d5.jpg@160w_160h_1c_1e_1o_100sh.jpg">
          <span class="place">教205</span>
      </div>
      <span class="time">{{currentTime}}</span>
    </div>
    <!-- /全局头部 -->
    <!-- body -->
    <div class="g_contain"></div>
      <!-- tab栏 -->
      <div class="g_tab">
        <router-link to="/main/Recommend" class="tab-item" style="border-right: 1px solid #5acacf;">
          <div>
            <i class="iconfont icon-tuijian"></i>
            <span>推荐</span>
          </div>
        </router-link>
        <router-link to="/main/library" class="tab-item" style="border-right: 1px solid #5acacf;">
          <div>
            <i class="iconfont icon-tushuguan"></i>
            <span>图书馆</span>
          </div>
        </router-link>
        <router-link to="/main/AttendModel" class="tab-item" style="border-right: 1px solid #5acacf;">
          <div>
            <i class="iconfont icon-icon"></i>
            <span>考勤</span>
          </div>
        </router-link>
        <router-link to="/main/Association" class="tab-item" style="border-right: 1px solid #5acacf;">
          <div>
            <i class="iconfont icon-tuandui"></i>
            <span>社团</span>
          </div>
        </router-link>
        <router-link to="/main/OtherClassRoom" class="tab-item">
          <div>
            <i class="iconfont icon-wodefangjian"></i>
            <span>其他教室</span>
          </div>
        </router-link>
      </div>
       <!-- /tab栏 -->
      <router-view/>
    </div>
    <!-- /body -->
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      currentTime: ''
    }
  },
  mounted () {
    setInterval(() => {
      this.changeTime()
    }, 1000)
  },
  methods: {
    changeTime () {
      this.currentTime = this.$moment(new Date()).format('YYYY-MM-DD HH:mm dddd')
      return this.currentTime
      // let currentTime = new Date()
      // let year = currentTime.getFullYear()
      // let month = currentTime.getMonth() + 1 < 10 ? `0${currentTime.getMonth() + 1}` : currentTime.getMonth() + 1
      // let date = currentTime.getDate()
      // let hour = currentTime.getHours()
      // let min = currentTime.getMinutes() < 10 ? `0${currentTime.getMinutes()}` : currentTime.getMinutes()
      // let day = currentTime.getDay()
      // let showDay = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      // this.currentTime = `${year}-${month}-${date} ${hour}:${min} ${showDay[day]}`
    }
  }
}
</script>

<style lang="scss">
.g_container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 0.16rem;
  background: #22343e;
}

.g_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 20px;
  box-sizing: border-box;
  color: #fff;
  font-size: 28px;
  background: #7ad4d9;
}

.g_top img {
  width: 52px;
  height: 52px;
  vertical-align: middle;
  margin-right: 10px;
  border-radius: 50%;
}
.g_contain {
  padding: 10px;
  box-sizing: border-box;
}
.g_tips {
  height: 3.8rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  font-size: 50px;
  color:#fff;
  text-shadow: -2px -2px 0 rgba(19, 9, 9, 0.7);
  background:#919a9f;
}
.g_tab {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 8%;
  padding: 0 0.2rem;
  font-size: 0.2rem;
  box-sizing: border-box;
  text-align: center;
  background: #fff;
  .tab-item {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    i {
      font-size: 0.2rem;
    }
  }
  .router-link-active {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    box-shadow: -3px 0 3px #666;
    text-shadow: -3px 0 2px #666;
    background: #5acacf;
     i {
      font-size: 0.2rem;
      text-shadow: -3px 0 2px #666;
    }
  }
}
</style>
