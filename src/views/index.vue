<template>
  <div class="wrapper">
    <div class="news-wrapper" v-for="(item,index) in newsList" :key="index">
      <h3>最新新闻</h3>
      <news-item v-for="(news,index) in item.stories" :item="news" :key="index"></news-item>
    </div>
    <div class="more" @click="more">获取更多</div>
  </div>
</template>

<script>
import { fetchNewsList, getMore } from '@/api/index.js'
import newsItem from '@/components/newsItem.vue'
export default {
  name: 'index',
  data() {
    return {
      newsList: [] // 存放新闻列表
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      fetchNewsList().then(res => {
		// this.newsList = res.stories
		// res 是一个对象
		this.newsList = [res]
		console.log('this.newsList',this.newsList)
      })
    },
    more() {
      getMore({
        time: '20190827' // 获取的当前时间的头一天的数据
      }).then(res => {
        // console.log(res)
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

.wrapper .news-wrapper {

}
.wrapper .news-wrapper h3 {
  text-align: center;
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