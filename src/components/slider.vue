<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in items" :key="index">
          <img v-lazy="imgProxy(item.image)" alt="">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import { imgProxy } from '@/utils/index.js'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  components: {},
  props: {
      items:{
          type:Array
      }
  },
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {
     imgProxy 
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: 2500,
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction: false,
        preventClicks: false
      })
    })
  }
}
</script>
<style scoped>
.swiper-container {
  max-width: 640px;
  height: 640px;
}
.swiper-container .swiper-wrapper .swiper-slide img{
    max-width: 100%;
    display: inline-block;
    position: relative;
}
.swiper-container .swiper-wrapper .swiper-slide img[lazy="loading"]{
  width: 440px;
  height: 290px;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%)
}
</style>