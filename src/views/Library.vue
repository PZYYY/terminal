<template>
  <div class="library">
    <p class="library_title">图书馆藏书更新</p>
    <div class="library_type">
       <div class="library-box" v-for="(item, index) in 10" :key="index">
        <img src="https://img3.doubanio.com/lpic/s29644760.jpg">
        <p>文学类</p>
      </div>
    </div>
    <notice-template></notice-template>
  </div>
</template>
<script>
import NoticeTemplate from '@/components/common/NoticeTemplate'
export default {
  components: {
    NoticeTemplate
  }
}
</script>
<style lang="scss">
.library {
  width: 100%;
  height: 60%;
  padding: 0.1rem;
  box-sizing: border-box;
  overflow: hidden;
   text-align: center;
  background: #919a9f;
  .library_title {
    color: #fff;
    font-size: 0.4rem;
    margin-bottom: 0.2rem;
    text-shadow: -2px -2px 0 #666;
  }
  .library_type {
    height: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .library-box {
      width: 10%;
      height: 47%;
      margin-right: 0.6rem;
      margin-bottom: 0.2rem;
      color: #999;
      background: #333;
      img {
        width: 100%;
        height: 80%;
      }
    }
  }
}
</style>
