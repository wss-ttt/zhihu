<template>
  <div class="wrapper">
    <div class="news-top">
      <h3>最新新闻</h3>
      <news-item v-for="(news,index) in newsList.stories" :item="news" :key="index"></news-item>
    </div>
    <div class="news-more" v-for="(news,index) in  moreList" :key="index">
      <h3>{{news.date}}</h3>
      <news-item v-for="(news,index) in newsList.stories" :item="news" :key="index"></news-item>
    </div>
    <div class="more" @click="more">获取更多</div>
  </div>
</template>

<script>
import { fetchNewsList, getMore } from '@/api/index.js'
import { prevDate } from '@/utils/index.js'
import newsItem from '@/components/newsItem.vue'
export default {
  name: 'index2',
  data() {
    return {
      newsList: {}, // 存放新闻列表
      moreList: [], // 存放获取更多的新闻列表
      currentTime: '' // 保存当前时间
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      fetchNewsList().then(res => {
        console.log(res)
        this.newsList = res
        this.currentTime = res.date // 保存时间
      })
    },
    more() {
      this.currentTime = prevDate(this.currentTime, 1)
      getMore({
        time: this.currentTime
      }).then(res => {
        console.log(res)
        this.moreList.push(res)
      })
    }
  },
  components: {
    newsItem
  }
}
</script>

<style scoped="scoped">
.wrapper {
  background-color: #eee;
  padding: 15px 5px;
}

.wrapper .news-top h3 {
  text-align: center;
  line-height: 50px;
}
.wrapper .news-more h3{
    text-align:center;
    line-height: 50px;
}
.wrapper .more {
  width: 100%;
  text-align: center;
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  background-color: #fff;
  border-radius: 4px;
}
</style>