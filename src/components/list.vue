<template>
  <div class="list">
    <ul>
      <li v-for="(item,index) in lists" :key="index">
        <!-- <img :src="imgProxy(item.thumbnail)" :alt="item.description" /> -->
        <img v-lazy="imgProxy(item.thumbnail)" :alt="item.description" />
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { imgProxy } from '@/utils/index.js'
export default {
  name:'list',
  components: {},
  props: {
    lists: {
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
}
</script>
<style scoped>
.list {
  position: absolute;
  top: 80px;
  right: 0;
  background-color: #fff;
  padding: 5px;
  max-height: 400px;
  overflow: auto;
  z-index: 9999;
}
.list ul li {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  margin-bottom: 5px;
  cursor: pointer;
}
.list ul li img {
  width: 40px;
  height: 40px;
  margin-right: 5px;
}
</style>