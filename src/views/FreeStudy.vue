<template>
    <!-- body -->
    <div class="g_contain">
      <div class="g_tips" @touchstart = "handleTouchStart" @touchmove = "handleTouchMove" @touchend = "handleTouchEnd">
        <span>该教室今日无课，同学们可自行使用</span>
        <span>注意爱护学校公共设施及教室卫生</span>
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
      if (this.oTouch.deltaX < -30) {
        this.$router.push({
          path: '/main/AwaitModel'
        })
      } else if (this.oTouch.deltaX > 30) {
        this.$router.push({
          path: '/main/AttendModel'
        })
      }
      this.oTouch.initiated = false
    }
  }
}
</script>
<style>
</style>
