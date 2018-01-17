<template>
    <!-- body -->
    <div class="g_contain">
      <div class="g_tips">
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
  }
}
</script>
<style>
.tips {
  text-align: center;
  line-height: 100px;
  box-sizing: border-box;
  font-size: 50px;
  color:#fff;
  text-shadow: -2px -2px 0 rgba(0, 0, 0, .7);
  background: rgba(255, 255, 255, .4);
}
</style>
