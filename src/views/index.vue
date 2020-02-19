<template>
<div>
    <Header />
    <!-- <div class="nav">
        <div class="nav_left">
            <div class="sub_left">
                <div>3</div>
                <div style="font-size:12px">二月</div>
            </div> -->
            <!--/sub_left-->
            <!-- <div class="sub_right">晚上好！</div>    /sub_right-->
        <!-- </div> --> 
        <!--/nav_left-->
        <!--<router-link to="/Mine" class="nav_right"><img src="../assets/imgs/user.png" width="40px" /></router-link>   /nav_right-->
   <!-- </div>   /nav-->
    <van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh" style="margin-top:-3rem">
        <div class="banner">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="item in swiperList" :key="item.id" @click="go">
                    <a :href="item.url">
                        <img :src="item.image" width="100%" height="400px" />
                        <p style="font-size:20px">
                            {{item.title}}<br />
                            <span style="font-size:14px">{{item.hint}}</span>
                        </p>
                    </a>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="swiperText">
            <!-- <a :href="item.url" v-for="item in conList" :key="item.id" @click="go"> -->
            <a v-for="item in conList" :key="item.id" @click="go">
                <p>
                    {{item.title}}<br />
                    <span>{{item.hint}}</span>
                </p>
                <img :src="item.images">
            </a>
        </div>
    </van-pull-refresh>
</div>
</template>
<script>
// import swiper from '@/components/swiper.vue'
import Header from '@/components/header.vue'


// 轮播图
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
// 下拉刷新
import { PullRefresh } from 'vant';
import { Toast } from 'vant';

Vue.use(PullRefresh);


export default{
    components: {
        Header
    },   
    data(){
        return {
            // 轮播图  文章列表
            activeName: 'first',
            swiperList: [],
            conList: [],
            // 下拉刷新
           count: 0,
           isLoading: false
        }
    },
    mounted(){
        var _this = this;
        this.axios.get("news/latest").then(res => {
            for(let i = 0;i<res.data.top_stories.length;i++){
                if(res.data.top_stories[i].image.indexOf("pic3") != -1){
                    res.data.top_stories[i].image = res.data.top_stories[i].image.replace(
                        /pic3/,
                        "pic1"
                    )
                }
            }
            for(let i = 0;i<res.data.stories.length; i++){
                if(res.data.stories[i].images[0].indexOf("pic3") != -1){
                    res.data.stories[i].images[0] = res.data.stories[i].images[0].replace(
                        /pic3/,
                        "pic1"
                    )
                }
            }
            this.swiperList = res.data.top_stories;
            // this.todayList.push(res.data);
            this.conList = res.data.stories
        })
    },
    methods: {
        // 轮播图  文章列表
        handleClick(tab, event) {
        console.log(tab, event);       
      },
        go() {
            this.$router.replace('/artDet');
            // this.$router.replace('/Details');
        },
        // 下拉刷新
        onRefresh() {
        setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    }
  
    }
    // mounted:function(){
    //     this.axios.get("news/latest").then(res => {
    //         this.swiperList = res.data.top_stories;
    //         this.conList = res.data.stories
    //     })
    // }
}
</script>
