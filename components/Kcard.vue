<template>
  <div class="kcard">
    <el-row v-for="item in KnowList" :key="item.Know_id">
      <el-col
        :span="5"
        v-for="(o, index) in 4"
        :key="o"
        :offset="index > 0 ? 1 : 0"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.Know_images[0].url" class="image" />
          <div style="padding: 8px">
            <span>{{ item.Know_desc }}</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
             <el-link href="/knowledge" :underline="false"
            >了解更多</el-link
          >
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

   <!-- 一张卡片 -->
    <!-- <el-row>
      <el-col :span="8">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row> -->
  </div>
</template>
<script>
export default {
  props: {
    KnowList: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      currentDate: new Date(),
    };
  },
};
</script>
<style lang="less" scoped>
.time {
  font-size: 13px;
  color: #999;
}

.el-link {
  margin-top: 13px;
  line-height: 12px;
}

.el-link {
  padding: 0;
  float: right;
  color: #409EFF;
}

.image {
  width: 100%;
  display: block;
}
.image:hover {
  transform: scale(1.1);
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.el-row {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
}
</style>

