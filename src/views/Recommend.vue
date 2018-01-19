<template>
  <div class="recommend">
    <detail-list></detail-list>
  </div>
</template>
<script>
import NoticeTemplate from '@/components/common/NoticeTemplate'
import DetailList from '@/components/common/DetailList'
export default {
  components: {
    NoticeTemplate,
    DetailList
  }
}
</script>
<style lang="scss">
.recommend {
  width: 100%;
  height: 77%;
  overflow: hidden;
}

</style>
