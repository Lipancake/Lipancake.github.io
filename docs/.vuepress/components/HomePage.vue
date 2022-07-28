<template>
<!-- <div class="scrollview" ref="scrollview" @mousewheel="scrollChange">
  <div class="customer-component">
    <div class="left">123</div>
    <div class="center">123</div>
    <div class="right">123</div>
  </div>
</div> -->

  <div class="display-block" ref="carousel">
    <!-- <button>123</button> -->
    <el-carousel :height="carouselHeight" interval=10000000>
      <el-carousel-item v-for="item in imgList" :key="item.name" >
        <!-- <h3 class="small justify-center" text="2xl">{{ item }}</h3> -->
        <img :src="item.src" style="height:100%;width:100%;" alt="图片丢失了" :title="item.title" />
      </el-carousel-item>
    </el-carousel>
    <!-- <span class="demonstration">Switch when indicator is hovered (default)</span> -->
  <!-- <button>123</button> -->
  </div>

  <HopeHomePage id="main" ref="view">
    <!-- 使用 bottom 插槽引入评论组件 -->
    <template #bottom>
      <HomeFeatures />
    </template>
  </HopeHomePage>

</template>

<script lang="ts">
export default {
  data() {
    return {
      imgList: [
        {
          name: "1",
          src: require("../public/home/1.png"),
          // title: "这是lj.png"
        },
        {
          name: "2",
          src: require("../public/home/2.png"),
          // title: "这是logo.png"
        },
        {
          name: "3",
          src: require("../public/home/3.png"),
          // title: "这是bg.png"
        },
        {
          name: "4",
          src: require("../public/home/4.png"),
          // title: "这是sadmas.png"
        }
      ],
      carouselHeight:0
    }
  },

  mounted() {
    // 获取div高度，赋值给carousel，实现高度控制
    let carousel_Height = window.getComputedStyle(this.$refs.carousel).height

    this.carouselHeight = carousel_Height
  }
}
</script>

<script lang="ts" setup>
import HopeHomePage from "@theme-hope/components/MyHomePage";
import ProjectPanel from "@theme-hope/module/blog/components/ProjectPanel";
import HomeFeatures from "@theme-hope/components/HomeFeatures";
import { ref } from 'vue'

const value = ref(0)
</script>


<style lang="scss" scoped>
  .display-block {
    width: 100vw;
    height: calc(100vh - 60px);
    // height: 100vh;
    // margin:3.75rem 3.75rem 3.75rem 3.75rem ;
    margin-top:3.75rem;
    // display:flex;
    justify-content: center; 
    align-content:center;

    .el-carousel__item h3 {
      color: #475669;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
      text-align: center;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }  

  }


  .project-panel {
    justify-content: center;
  }

    // .customer-component {
  //   height: calc(100vh - 60px);
  //   display: flex;
  //   // background-color: #333;
  //   color: #fff;
  //   margin-top:3.75rem;
  //   .left {
  //       background-color: #58a;
  //       width:50vh;
  //   }
  //   .center {
  //       flex: 1;
  //       background-color: #fb3;
  //       width:25vh;
  //   }
      
  //   .right {
  //       background-color: #58a;
  //       width:25vh;
  //   }
  //   }

</style> 

<!-- 
<script lang="ts">
import { _debounce } from "../common.js"
import { _throttle } from "../common.js"
export default {
  data() {
    return {
      offsetTop: 0
    }
  },

  mounted () {
    // 获取指定元素
    const scrollview = this.$refs['scrollview']
    // 添加滚动监听，该滚动监听了拖拽滚动条
    // 尾部的 true 最好加上，我这边测试没加 true ，拖拽滚动条无法监听到滚动，加上则可以监听到拖拽滚动条滚动回调
    scrollview.addEventListener('scroll', this.scrollChange, true)
    this.offsetTop = scrollview.offsetTop
    
  },
  // beforeDestroy 与 destroyed 里面移除都行
  beforeDestroy () {
    // 获取指定元素
    const scrollview = this.$refs['scrollview']
    // 移除监听
    scrollview.removeEventListener('scroll', this.scrollChange, true)
  },

  methods: {
    scrollChange: _throttle((e) => {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      console.log(scrollTop)
      console.log('滚动中')
      document.getElementById('main').scrollIntoView({ behavior: 'smooth' })
      if (scrollTop > 1 ) {
        document.getElementById('main').scrollIntoView({ behavior: 'smooth' })
      }
    }, 1000),
  }
}


</script> -->