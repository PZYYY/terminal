<template>
  <div class="library">
    <!-- <p class="library_title">图书馆藏书更新</p>
    <div class="library_type">
       <div class="library-box" v-for="(item, index) in 10" :key="index">
        <img src="https://img3.doubanio.com/lpic/s29644760.jpg">
        <p>文学类</p>
      </div>
    </div> -->
    <div class="library_title">图书更新通知</div>
    <div class="library_tab">
      <el-tabs tab-position="right">
        <el-tab-pane label="A马列主义毛邓思想">
          <div class="book-info" v-for="(item,index) in 3" :key="index">
            <span>书籍：《马克思主义的学习和研究》《马克思、恩格斯著作的学习和研究》《列宁主义的学习和研究》</span>
            <span>更新时间：2018-01-18</span>
            <span>共藏 100 册</span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="B哲学">
          <div class="book-info" v-for="(item,index) in 3" :key="index">
            <span>书籍：《马克思主义哲学》《辩证唯物主义》《人生观、人生哲学》《其他伦理规范》《心理过程与心理状态》</span>
            <span>更新时间：2018-01-18</span>
            <span>共藏 100 册</span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="C社会科学总论">
          <div class="book-info" v-for="(item,index) in 3" :key="index">
            <span>书籍：《科学研究的方针、政策》《社会科学史</span>
            <span>更新时间：2018-01-18</span>
            <span>共藏 100 册</span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="D政治、法律">
          <div class="book-info" v-for="(item,index) in 3" :key="index">
            <span>书籍：《党的总路线和总政策》《党的组织、会议及文献》《世界青年学生运动与组织》</span>
            <span>更新时间：2018-01-18</span>
            <span>共藏 100 册</span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="E军事">
          <div class="book-info" v-for="(item,index) in 3" :key="index">
            <span>书籍：《世界军事普及读物》《司令部工作》</span>
            <span>更新时间：2018-01-18</span>
            <span>共藏 100 册</span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="F经济">
          <div class="book-info" v-for="(item,index) in 3" :key="index">
            <span>书籍：《科学经济学、知识经济学》《毛泽东、邓小平经济思想》《国民经济计划和管理》</span>
            <span>更新时间：2018-01-18</span>
            <span>共藏 100 册</span>
          </div>
        </el-tab-pane>
    </el-tabs>
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
  background: #919a9f;
  .library_title {
    margin-bottom: 0.1rem;
    color: #fff;
    text-align: center;
    font-size: 0.4rem;
    font-weight: bold;
    text-shadow: 5px 5px 5px #666;
  }
  .library_tab {
    padding-left: 0.1rem;
    box-sizing: border-box;
    .book-info {
      display: flex;
      flex-direction: column;
      line-height: 0.25rem;
      color: #733939;
      padding: 0.1rem;
      margin-right: 0.2rem;
      margin-bottom: 0.1rem;
      background: #e9e8ec;
    }
  }
  .el-tabs__item {
    font-size: 0.18rem;
    color: #aae2e6;
  }
  // .el-tabs__item:hover {
  //   color:#0984ff
  // }
  .el-tabs__item.is-active {
    color: #fff;
  }
}
</style>
