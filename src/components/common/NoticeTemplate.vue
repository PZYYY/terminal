<template>
  <!-- 活动公告 -->
  <div class="g_notice">
      <div class="g_notice-box" v-for="(item,index) in 6" :key="index">
        <div class="g_notice-time">2018-01-16</div>
        <div class="g_notice-info">
          <span>博雅大讲坛第21期</span><br>
          <span>图书馆负一层</span><br>
          <span>本周二  14:30</span>
        </div>
      </div>
  </div>
  <!-- /活动公告 -->
</template>
<script>
export default {
  name: 'NoticeTemplate'
}
</script>
<style>
.g_notice {
  display: flex;
  position: fixed;
  bottom: 10%;
  left: 1%;
  width: 98%;
  height: 15%;
  color: #a7b77d;
}
.g_notice-box {
  width: 15%;
  height: 95%;
  margin-right: 3%;
  border-radius: 10px;
  border: 1px solid #a7b77d;
}

.g_notice-info {
  padding:  5%;
  line-height: 0.24rem;
  font-size: 15px;
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
