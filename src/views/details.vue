<template>
  <div class="wrapper">
    <!-- 标题 -->
    <div class="title">{{newsDetails.title}}</div>
    <!-- 大图 -->
    <img class="img" :src="imgProxy(newsDetails.image)" alt />
    <!-- -- 正文 -->
    <div class="body" v-html="imgProxy(newsDetails.body)"></div>
    <!-- 评论 -->
    <div class="comments">
        <div class="comment" v-for="(item,index) in shortCommnets" :key="index">
           <img :src="imgProxy(item.avatar)" alt=""> 
           <div class="info">
               <span class="author">{{item.author}}</span>
               <span class="time">{{item.time}}</span>
               <div class="content">{{item.content}}</div>
           </div>
        </div>
    </div>
  </div>
</template>

<script>
import { imgProxy } from "@/utils/index.js";
import {
  fetchNewsDetails,
  getLongComments,
  getShortComments
} from "@/api/index.js";
export default {
  components: {},
  props: {},
  data() {
    return {
      newsDetails: "", // 保存新闻的详细信息
      longComments: [], // 保存长评论
      shortCommnets: [] // 保存端评论
    };
  },
  watch: {},
  computed: {},
  methods: {
    imgProxy
  },
  created() {},
  mounted() {
    console.log(this.$route.params);
    let id = this.$route.params.id;
    // 获取新闻的详细详细信息
    fetchNewsDetails({
      id: id
    }).then(data => {
      console.log(data);
      this.newsDetails = data;
    });
    // 获取长评论
    getLongComments({
      id: id
    }).then(data => {
        console.log(data);
        this.longComments = data.comments;
    });
    // 获取短评论
    getShortComments({
      id: id
    }).then(data => {
        console.log(data);
        this.shortCommnets = data.comments;
    });
  },
  computed:{
  }
};
</script>
<style scoped>
.wrapper {
  border: 1px solid #ccc;
}
.wrapper .title {
  font-size: 24px;
  font-weight: bold;
}
.wrapper .img {
  max-width: 100%;
}
.wrapper .comments .comment{
    border-bottom: 2px solid #eee;
    display: flex;
    align-items: center;
}
.wrapper .comments .comment img{
    float: left;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin:0 10px;
    vertical-align: middle;
}
.wrapper .comments .comment .info{
    padding:15px;
}
.wrapper .comments .comment .info .author{

}
.wrapper .comments .comment .info .time{

}
</style>