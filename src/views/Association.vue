<template>
  <div class="association">
    <div class="association-box" v-for="(item,index) in 9" :key="index">
      <img src="http://img.hb.aicdn.com/95da2d0600d140d2c171ff50b65f9f96a9008c621e801-MmYDtd_fw658">
      <div class="box-info">
        <p>动漫社</p>
        <p class="box-intro">由一群热爱动画、漫画、游代收款if寄哦ID经费戏的在校学生自发成立，并在陕西科技大学镐京学院团委的领导和全院师生的监督管理下开展活动</p>
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
  .association {
    width: 100%;
    height: 58%;
    padding: 0.1rem;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #919a9f;
    .association-box {
      display: flex;
      width: 3.2rem;
      height: 1.2rem;
      margin: 0 0.4rem 0.4rem 0;
      border-radius: 10px;
      box-shadow: 5px 5px 5px #666;
      background: #fff;
      img {
        width: 35%;
        height: 100%;
      }
      .box-info {
        padding: 0.05rem;
        box-sizing: border-box;
        line-height: 0.23rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        .box-intro {
          color: #888;
          font-size: 0.14rem;
          text-indent: 1em;
        }
      }
    }
  }
</style>
