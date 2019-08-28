<template>
    <div class="header">
        <div class="left">

        </div>
        <div class="right">
            <span>专栏总览</span>
            <span>主题日报</span>
        </div>
    </div>
</template>

<script>
  export default {
    components:{},
    props:{},
    data(){
      return {
          
      }
    },
    watch:{},
    computed:{},
    methods:{},
    created(){},
    mounted(){}
  }
</script>
<style scoped>
.header{
    height:80px;
    line-height: 80px;
    display: flex;
    justify-content: space-between;
}
.header .left{
    background: url('http://daily.zhihu.com/img/new_home_v3/top_logo.png') no-repeat;
}
.header .right{

}

</style>