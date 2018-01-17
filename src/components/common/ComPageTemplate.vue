<template>
   <div class="g_container">
    <!-- 全局头部 -->
    <div class="g_top">
      <div class="top-left">
          <img src="../../assets/images/img1.jpg">
          <span class="place">教205</span>
      </div>
      <span class="time">2018-01-12 14:30</span>
    </div>
    <!-- /全局头部 -->
    <!-- body -->
    <div class="g_contain">
      
       <!-- 活动公告 -->
      <div class="g_notice">
          <div class="g_notice-box">
            <div class="g_notice-time">2018-01-16</div>
            <div class="g_notice-info">
              <span>博雅大讲坛第21期</span><br>
              <span>图书馆负一层</span><br>
              <span>本周二  14:30</span>
            </div>
          </div>

          <div class="g_notice-box">
              <div class="g_notice-time">2018-01-16</div>
              <div class="g_notice-info">
                <span>博雅大讲坛第21期</span><br>
                <span>图书馆负一层</span><br>
                <span>本周二  14:30</span>
              </div>
            </div>

          <div class="g_notice-box">
            <div class="g_notice-time">2018-01-16</div>
            <div class="g_notice-info">
              <span>博雅大讲坛第21期</span><br>
              <span>图书馆负一层</span><br>
              <span>本周二  14:30</span>
            </div>
          </div>
      </div>
      <!-- /活动公告 -->
    </div>
    <!-- /body -->
   </div>
</template>
<script>
export default {
}
</script>
<style>
.g_container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #22343e;
}

.g_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  box-sizing: border-box;
  margin-bottom: 15px;
  color: #fff;
  font-size: 30px;
  background: #7ad4d9;
}

.g_top img {
  width: 70px;
  height: 70px;
  vertical-align: middle;
  margin-right: 10px;
  border-radius: 50%;
}

.g_contain {
  padding: 10px;
  box-sizing: border-box;
}

.g_notice {
  display: flex;
  position: fixed;
  bottom: 1%;
  left: 1%;
  width: 98%;
  height: 18%;
  color: #a7b77d;
}

.g_notice-box {
  width: 15%;
  height: 90%;
  margin-right: 3%;
  border-radius: 10px;
  border: 1px solid #a7b77d;
}

.g_notice-info {
  padding:  8%;
  box-sizing: border-box;
  line-height: 150%;
}

.g_notice-time {
  width: 70%;
  height: 20%;
  margin-top: -6%;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  /* background: #c66300; */
  background: #a7b77d;
}

.g_tips {
  height: 450px;
  padding-top: 8%;
  text-align: center;
  line-height: 100px;
  box-sizing: border-box;
  font-size: 50px;
  color:#fff;
  text-shadow: -2px -2px 0 rgba(0, 0, 0, .7);
  background:#919a9f;
}
</style>
