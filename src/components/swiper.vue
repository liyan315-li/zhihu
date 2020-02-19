<template>
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
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);

export default{
    components: {

    },
    data(){
        return {
            swiperList: [],
            conList: []
        }
    },
    methods: {
        go() {
            this.$router.replace('/Details');
        }
    },
    mounted:function(){
        this.axios.get("news/latest").then(res => {
            this.swiperList = res.data.top_stories;
            this.conList = res.data.stories
        })
    }
}
</script>