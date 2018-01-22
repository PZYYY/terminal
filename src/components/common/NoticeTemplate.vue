<template>
  <!-- 活动公告 -->
  <div class="g_notice" ref="notices">
      <div class="g_notice-box" v-for="(item,index) in notices" :key="index">
        <div class="g_notice-time">{{item.time}}</div>
        <div class="g_notice-info">
          <span>{{item.title}}</span><br>
          <span>{{item.address}}</span><br>
          <span>{{item.weekday}}</span>
        </div>
      </div>
  </div>
  <!-- /活动公告 -->
</template>
<script>
export default {
  name: 'NoticeTemplate',
  data () {
    return {
      notices: [
        {time: '2018-01-16', title: '博雅大讲坛第21期', address: '图书馆负一层', weekday: '本周二  14:30'},
        {time: '2018-01-16', title: '博雅大讲坛第21期', address: '图书馆负一层', weekday: '本周二  14:30'},
        {time: '2018-01-16', title: '博雅大讲坛第21期', address: '图书馆负一层', weekday: '本周二  14:30'},
        {time: '2018-01-16', title: '博雅大讲坛第21期', address: '图书馆负一层', weekday: '本周二  14:30'},
        {time: '2018-01-16', title: '博雅大讲坛第21期', address: '图书馆负一层', weekday: '本周二  14:30'},
        // {time: '2018-01-16', title: '博雅大讲坛第21期', address: '图书馆负一层', weekday: '本周二  14:30'},
        {time: '2018-01-16', title: '博雅大讲坛第21期', address: '图书馆负一层', weekday: '本周二  14:30'}
      ]
    }
  },
  created () {
  },
  methods: {
    showNotice () {
      if (this.notices.length > 6) {
      }
    }
  }
}
</script>
<style>
.g_notice {
  display: flex;
  position: fixed;
  bottom: 10%;
  left: 1%;
  width: 11.5rem;
  height: 1rem;
  /* overflow: hidden; */
  color: #a7b77d;
}
.g_notice-box {
  width: 1.55rem;
  height: 1rem;
  margin-right: 3%;
  border-radius: 10px;
  border: 1px solid #a7b77d;
}

.g_notice-info {
  padding:  5%;
  line-height: 0.24rem;
  font-size: 0.15rem;
  box-sizing: border-box;
  text-align: left;
}

.g_notice-time {
  width: 70%;
  height: 25%;
  margin-top: -8%;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  background: #a7b77d;
}
</style>
