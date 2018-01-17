<template>
  <div class="g_contain">
    <div class="g_tips">
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
