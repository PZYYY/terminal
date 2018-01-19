<template>
  <div class="g_contain">
    <div class="g_tips" @touchstart = "handleTouchStart" @touchmove = "handleTouchMove" @touchend = "handleTouchEnd">
      <i class="iconfont icon-msnui-poweroff"></i>
      <span>抱歉，该教室今日不开放</span>
  </div>
  <notice-template></notice-template>
  </div>
</template>
<script>
import NoticeTemplate from '@/components/common/NoticeTemplate'
export default {
  components: {
    NoticeTemplate
  },
  data () {
    return {
      oTouch: {} // 触摸对象
    }
  },
  methods: {
    /**
     * 触摸开始
     */
    handleTouchStart (e) {
      this.oTouch.initiated = true
      this.oTouch.moved = false
      let touch = e.touches[0]
      this.oTouch.startX = touch.pageX
      this.oTouch.startY = touch.pageY
    },

    /**
     * 触摸过程
     */
    handleTouchMove (e) {
      if (!this.oTouch.initiated) {
        return
      }
      let touch = e.touches[0]
      this.oTouch.deltaX = touch.pageX - this.oTouch.startX
      this.oTouch.deltaY = touch.pageY - this.oTouch.startY
      if (Math.abs(this.oTouch.deltaY) > Math.abs(this.oTouch.deltaX)) {
        return
      }
      if (!this.oTouch.moved) {
        this.oTouch.moved = true
      }
    },

    /**
     * 触摸结束
     */
    handleTouchEnd (e) {
      if (!this.oTouch.moved) {
        return
      }
      if (this.oTouch.deltaX > 30) {
        this.$router.push({
          path: '/main/FreeStudy'
        })
      }
      this.oTouch.initiated = false
    }
  }
}
</script>
<style>
.g_tips i {
  /* margin-top: 1rem; */
  text-shadow: -2px -2px 0 rgba(0, 0, 0, .7);
  font-size: 150px;
  color:#c0c0c0;
}
</style>
