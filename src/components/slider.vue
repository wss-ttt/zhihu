<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in items" :key="index">
        <img v-lazy="imgProxy(item.image)" alt />
      </div>
      <!-- 静态数据  -->
      <!-- <div class="swiper-slide">
        <img src="../assets/1.jpg" alt />
      </div>
      <div class="swiper-slide">
        <img src="../assets/2.jpg" alt />
      </div>
      <div class="swiper-slide">
        <img src="../assets/3.jpg" alt />
      </div>-->
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 左右箭头 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import { imgProxy } from '@/utils/index.js'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  components: {},
  props: {
    items: {
      type: Array
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
        autoplay: false,
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplayDisableOnInteraction: false,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      })
    })
  }
}
</script>
<style scoped>
.swiper-container {
  max-width: 640px;
  height: 640px;
  margin: 15px 0;
}
.swiper-container .swiper-wrapper .swiper-slide img {
  max-width: 100%;
  height: 100%;
  display: inline-block;
  position: relative;
}
.swiper-container .swiper-wrapper .swiper-slide img[lazy='loading'] {
  width: 440px;
  height: 290px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>