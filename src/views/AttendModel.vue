<template>
  <!-- 课程基本信息 -->
    <div class="class" @touchstart = "handleTouchStart" @touchmove = "handleTouchMove" @touchend = "handleTouchEnd">
        <div class="class_info">
            <div class="info-left">
              <div class="camera">人脸识别 </div>
              <div class="urgent-notice">
                <ul>
                  <li><i class="iconfont icon-gonggao"></i> 紧急通知</li>
                  <!-- <li>紧急公告2：回复的酸辣粉hi金佛IE就</li> -->
                </ul>
              </div>
            </div>
            <div class="info-right">
              <div class="info-title">考勤模式</div>
              <div>
                <!-- <i class="iconfont icon-kecheng txt"></i> -->
                <span class="class-name">赢在创新第十季第一期</span>
              </div>
              <div>
                <i class="iconfont icon-laoshirenzheng1"></i>
                <span>教师</span>
              </div>
              <div>
                <i class="iconfont icon-zhiyuandidian2"></i>
                <span>地点</span>
              </div>
              <div class="person">
                <span class="person-should">
                  <i class="iconfont icon-renqun"></i>
                  <span>应到 <span class="should-num">150</span> 人</span>
                </span>
                <span class="person-should">
                  <i class="iconfont icon-renqun"></i>
                  <span>实到 <span class="already-num">140</span> 人</span>
                </span><br>
                <el-button type="text" @click="dialogTableVisible = true" class="checkDetial">查看详情>>></el-button>
                <el-dialog title="学生考勤情况" :visible.sync="dialogTableVisible" :modal-append-to-body="false">
                  <el-table :data="gridData" width="100%">
                    <el-table-column property="name" label="姓名" min-width="30%"></el-table-column>
                    <el-table-column property="college" label="学院"></el-table-column>
                    <el-table-column property="major" label="专业"></el-table-column>
                    <el-table-column property="state" label="出勤状态" min-width="35%"></el-table-column>
                  </el-table>
                </el-dialog>
              </div>
              <!-- 签到成功提示 -->
              <div class="person-tips">
                <span>姓名：</span>
                <span>学号：</span>
                <span>专业：</span>
                <span>学院：</span>
                <em></em>
                <span class="Triangle"></span>
              </div>
              <!-- /签到成功提示 -->
              <!-- 签到成功 -->
              <div class="result-right">
                <i class="iconfont icon-zhengque" style="color:#009b00"></i>
                <span>签到成功</span>
              </div>
              <!-- /签到成功 -->

              <!-- 不是考勤时间 -->
              <div class="result-warn" style="display:none">
                <i class="iconfont icon-cuowu1" style="color:#f4c400"></i>
                <span>不是考勤时间</span>
              </div>
              <!-- /不是考勤时间 -->

              <!-- 没有预约 -->
              <div class="result-warn" style="display:none">
                  <i class="iconfont icon-cuowu1" style="color:#f4c400"></i>
                  <span>没有预约</span>
                </div>
                <!-- /没有预约 -->

              <!-- 二维码超时 -->
              <div class="result-warn" style="display:none">
                <i class="iconfont icon-cuowu1" style="color:#f4c400"></i>
                <span>二维码超时</span>
              </div>
              <!-- /二维码超时 -->

              <!-- 请求超时 -->
              <div class="result-wrong" style="display:none">
                <i class="iconfont icon-cuowu" style="color:red"></i>
                <span>请求超时</span>
              </div>
              <!-- /请求超时 -->
            </div>
        </div>
        <!-- /课程基本信息 -->
        <!-- 当天课程信息 -->
        <div class="today_class">
          <div class="title">教205 今日课程</div>
          <!-- <hr> -->
          <div class="box">
            <div class="class_box1">
              <span class="class-time">08:30</span><br>
              <span>讲文明树新风形势与政策讲座</span>
            </div>
            <hr>
            <div class="class_box2">
              <span class="class-time">10:30</span><br>
              <span>讲文明树新风形势与政策讲座</span>
            </div>
            <hr>
            <div class="class_box1">
              <span class="class-time">14:30</span><br>
              <span>讲文明树新风形势与政策讲座</span>
            </div>
            <hr>
            <div class="class_box2">
              <span class="class-time">16:30</span><br>
              <span>讲文明树新风形势与政策讲座</span>
            </div>
            <hr>
            <!-- <div class="class_box1">
              <span class="class-time">16:30</span><br>
              <span>的高IP饿哦IP根据地</span>
            </div>
            <hr> -->
          </div>
        </div>
        <notice-template></notice-template>
    </div>
  <!-- /当天课程信息 -->
</template>
<script>
import NoticeTemplate from '@/components/common/NoticeTemplate'
export default {
  components: {
    NoticeTemplate
  },
  data () {
    return {
      oTouch: {}, // 触摸对象
      gridData: [{
        name: '小王',
        college: '计算机工程学院',
        major: '15计算机信息技术与应用',
        state: 'flase'
      }, {
        name: '小王',
        college: '计算机工程学院',
        major: '15计算机信息技术与应用',
        state: 'flase'
      }, {
        name: '小王',
        college: '计算机工程学院',
        major: '15计算机信息技术与应用',
        state: 'true'
      }, {
        name: '小王',
        college: '计算机工程学院',
        major: '15计算机信息技术与应用',
        state: 'true'
      }],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
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
          path: '/main/FreeStudy'
        })
      }
      this.oTouch.initiated = false
    }
  }
}
</script>
<style>
.class {
  display: flex;
  flex-direction: row;
}

.class_info {
  display: flex;
  flex: 3;
  height: 4rem;
  overflow: hidden;
  margin-right: 20px;
  color: #fff;
  background: rgba(255, 255, 255, 0.5);
}

.info-title {
  margin-bottom: 0.2rem;
  text-align: center;
  font-size: 40px;
  letter-spacing: 15px;
  text-shadow: 7px 6px 6px #333;
  font-weight: bolder;
  color: #fff;
}

.info-left {
  flex: 1;
  /* text-align: center; */
}

.camera {
  height: 70%;
  margin: 20px;
  /* margin-bottom: 10%; */
  color: #fff;
  background: #000;
}

.urgent-notice {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 41px;
  padding-left: 0.2rem;
  line-height: 0.35rem;
  color: red;
  text-decoration: underline;
}

.urgent-notice ul {
  list-style: none;
}

.info-right {
  flex: 2;
  padding: 20px;
  /* padding-left: 0; */
  box-sizing: border-box;
  font-size: 0.2rem;
  line-height: 0.43rem;
}

.info-right i {
  font-size: 24px;
  color: #004891;
}

.class-name {
  font-size: 30px;
  color: #004080;
}

.person {
  font-size: 18px;
}

.person i {
  vertical-align: middle;
  font-size: 22px;
}

.person-should {
  margin-right: 30px;
}

.should-num {
  color: #0070df;
}

.already-num {
  color: #008000;
}

.checkDetial {
  font-size: 0.17rem;
  color: #fff;
}
.el-dialog__body {
  padding-top: 0;
}

.person-tips {
  width: 2.8rem;
  height: 1.8rem;
  position: absolute;
  top: 27%;
  left: 57%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  box-sizing: border-box;
  color: #047b64;
  border-radius: 15px;
  border: 2px solid #008000;
  font-size: 0.18rem;
  line-height: 0.4rem;
  background: #ffffd0;
}

.person-tips em{
   display:block;
   border-width:20px;
   position:absolute;
   bottom:-40px;
   left:55px;
   border-style:solid dashed dashed;
   border-color:#008000 transparent transparent;
   font-size:0; line-height:0;
  }

.Triangle {
  display:block;
  border-width:20px;
  position:absolute;
  bottom:-36px;
  left:55px;
  border-style:solid dashed dashed;
  border-color:#ffffd0 transparent transparent;
  font-size:0;
  line-height:0;
}

.result-right {
  width: 40%;
  border-top-left-radius:10px;
  border-bottom-left-radius:10px;
  /* margin-top: 5%; */
  margin-right: -20px;
  color: #009b00;
  text-align: center;
  float: right;
  border: 2px solid #009b00;
  border-right: none;
  box-shadow: -5px 8px 8px #666;
  background: #ffffd0;
}

.result-warn {
  width: 40%;
  border-top-left-radius:10px;
  border-bottom-left-radius:10px;
  /* margin-top: 5%; */
  margin-right: -20px;
  color: #f4c400;
  text-align: center;
  float: right;
  border: 2px solid #f4c400;
  border-right: none;
  box-shadow: -5px 8px 8px #666;
  background: #ffffd0;
}

.result-wrong {
  width: 40%;
  border-top-left-radius:10px;
  border-bottom-left-radius:10px;
  /* margin-top: 5%; */
  margin-right: -20px;
  color: red;
  text-align: center;
  float: right;
  border: 2px solid red;
  border-right: none;
  box-shadow: -5px 8px 8px #666;
  background: #ffffd0;
}

.today_class {
  flex: 1;
  height: 4rem;
  overflow: hidden;
  color: #000;
  text-align: center;
  font-size: 18px;
  background: #d0a382;
}

.title {
  padding: 2% 0;
  margin-bottom: 5%;
  font-size: 30px;
  color: #fff;
  background: #006868;
}

.class_box1 {
  height: 15%;
  padding-top: 2%;
  box-sizing: border-box;
  color: #444;
  /* background: #dfdfdf; */
}

.class_box2 {
  height: 15%;
  padding-top: 2%;
  box-sizing: border-box;
  color: #fff;
}

.time-line {
  width: 100%;
  height: 1px;
  margin: 10% 0;
  background: #fff;
}
</style>
