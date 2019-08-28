<template>
  <div class="header">
    <div class="left"></div>
    <div class="right">
      <span @click="section">主题日报</span>
    </div>
    <v-list :lists="lists" v-show="isShow"></v-list>
  </div>
</template>

<script>
import { getTopics, getSections } from '@/api/index.js'
import vList from '@/components/list.vue'
export default {
  name: 'vHeader',
  components: {
    vList
  },
  props: {},
  data() {
    return {
      lists: [],
      isShow:false,
    }
  },
  watch: {},
  computed: {},
  methods: {
    section() {
      getSections().then(res => {
        this.lists = res.data
        this.isShow = !this.isShow 
      })
    }
  },
  created() {},
  mounted() {}
}
</script>
<style scoped>
.header {
  height: 80px;
  line-height: 80px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 4px;
  position: relative;
}
.header .left {
  background: url('../assets/avatar.jpg') no-repeat;
  background-size: 100%;
  width: 80px;
}
.header .right span {
  padding: 0 5px;
  color: #008bed;
  cursor: pointer;
}
</style>