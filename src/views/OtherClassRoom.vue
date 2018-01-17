<template>
  <div class="otherClassRoom">
    <div class="header">
      <span>教室 / 星期</span>
      <span>本周一</span>
      <span>本周二</span>
      <span>本周三</span>
      <span>本周四</span>
      <span>本周五</span>
      <span>本周六</span>
      <span>本周日</span>
      <span>操作</span>
    </div>
    <div class="room-state" v-for="(item,index) in 15" :key="index">
      <span>教学楼205</span>
      <span>开放</span>
      <span>被占用</span>
      <span>开放</span>
      <span>不开放</span>
      <span>不开放</span>
      <span>开放</span>
      <span>开放</span>
      <span class="use">征用该教室</span>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
.otherClassRoom {
  width: 100%;
  height: 77%;
  text-align: center;
  overflow: hidden;
  padding: 0 0.1rem;
  box-sizing: border-box;
  // background: #fff;
  span {
      flex: 1;
    }
  .header {
    display: flex;
    justify-content: space-between;
    padding: 0.1rem;
    box-sizing: border-box;
    color: #fff;
    border-bottom: 0.05rem solid #fff;
    background: #06a6c2;
  }
  .room-state {
    display: flex;
    justify-content: space-between;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.15rem;
    border: 1px solid #fff;
    color: #9c9b9d;
    background: #f0eff2;
    span:first-child {
    color: #fff;
    font-size: 0.17rem;
    background: #80d5df;
    }
    .use {
      color: #048ca4;
      font-weight: bold;
    }
  }
}
</style>
