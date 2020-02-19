<template>
  <div>
      <div class="details" style="margin:0">
          <img :src="main.image" width="100%" height="350px" />
          <div class="detText" style="margin-bottom:-1rem">
              <div class="title" style="margin-bottom:0.5rem">{{main.title}}</div>
              <div style="font-size:0.6rem;text-align:right;margin-right:0.8rem;color:#F0EAD3">{{main.image_source}}</div>
          </div>
      </div>
      <div v-html="main.body" class="text"></div>
      <van-tabbar v-model="active">
          <router-link to="/" class="back"><img src="../assets/imgs/back.png" style="width:35px;height:30px;" /></router-link>
          <router-link to="/Comment"><img src="../assets/imgs/msg.png" /></router-link>
          <div id="c"><img src="../assets/imgs/zan.png" @click='zan'>{{like_count}}</div> 
          <div class="collect" @click="collect">      
            <img src="../assets/imgs/shouc.png" v-show="downIcon" />
            <img src="../assets/imgs/yisc.png" v-show="!downIcon" />
          </div>
          <div><img src="../assets/imgs/zhuanf.png" id="share" style="width:28px;height:28px;" @click="sharePoper" /></div>
          <div class="poper" >
              <div :class="{poperBg:ifpoperCupHiden}" @click="sharePoperClose"></div>
              <div class="poperArea" :class="{poperCupHiden:ifpoperCupHiden}">
                  <div>
                      <img src="../assets/imgs/weixin.png">
                      微信好友
                  </div>
                  <div>
                      <img src="../assets/imgs/friend.png">
                      朋友圈
                  </div>
                  <div>
                      <img src="../assets/imgs/weiboLogo.png">
                      新浪微博
                  </div>
                  <div>
                      <img src="../assets/imgs/qq.png">
                      QQ
                  </div>
                  <div>
                      <img src="../assets/imgs/link.png">
                      复制链接
                  </div>
                  <div>
                      <img src="../assets/imgs/liulq.png">
                      浏览器打开
                  </div>
                  <div>
                      <img src="../assets/imgs/more.png">
                      更多
                  </div>
              </div>   
          </div>
          <!-- <div class="share">
            <img src="../assets/imgs/zhuanf.png" id="share" style="width:28px;height:28px;" />
            <div class="am-share">
              <ul class="am-share-sns">
                <li><a href="#"> <img src="../assets/imgs/weixin.png" class="share-icon-weibo"> <span>微信好友</span> </a> </li>
                <li><a href="#"> <img src="../assets/imgs/friend.png" class="share-icon-weibo"> <span>朋友圈</span> </a> </li>
                <li><a href="#"> <img src="../assets/imgs/weiboLogo.png" class="share-icon-weibo"> <span>新浪微博</span> </a> </li>
                <li><a href="#"> <img src="../assets/imgs/qq.png" class="share-icon-weibo"> <span>QQ</span> </a> </li>
                <li><a href="#"> <img src="../assets/imgs/link.png" class="share-icon-weibo"> <span>复制链接</span> </a> </li>
                <li><a href="#"> <img src="../assets/imgs/liulq.png" class="share-icon-weibo"> <span>浏览器打开</span> </a> </li>
                <li><a href="#"> <img src="../assets/imgs/more.png" class="share-icon-weibo"> <span>更多</span> </a> </li>
              </ul>
            </div>     
          </div> -->
          <!--/share-->   
          <!-- <van-tabbar-item icon="home-o"></van-tabbar-item>
          <van-tabbar-item icon="search"></van-tabbar-item>
          <van-tabbar-item icon="friends-o"></van-tabbar-item>
          <van-tabbar-item icon="setting-o"></van-tabbar-item> -->
      </van-tabbar>
  </div>
  
</template>
<script>
import jquery from '../assets/js/jquery-1.js'
import jq from '../assets/js/jquery-2.js'
// import js from '../assets/js/toShare.js'

// 底部固定
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);


export default {
  data() {
    return {
      active: 0, 
      like_count:10,
      flg:true,
      downIcon: true,
      toshare:0,
      id:'',
            main:'',
            comments:'',
            popularity:'',
            imgsrc:'',
            ifpoperCupHiden:false
    }
  },
  // mounted(){
        
  //   },
  // 点赞
    methods:{
        zan(){
            if(this.flg){
                this.like_count++;
                this.flg = false;
            }else{
                this.like_count--;
                this.flg = true;
            }
        },
      //收藏 
      collect() {
        //根据downIcon判断此时的状态是true还是false

        //对downIcon对状态进行取反

        this.downIcon = !this.downIcon

      },
      // 分享
       sharePoper(){
            this.ifpoperCupHiden = true;
        },
        sharePoperClose(){
            this.ifpoperCupHiden = false;
        }
        	 
    },
    // 分享
    mounted:function(){
      // 分享jq
      // $("#share").click(function(){
      //     $(".am-share").addClass("am-modal-active");	
      //     if($(".sharebg").length>0){
      //       $(".sharebg").addClass("sharebg-active");
      //     }else{
      //       $(".share").append('<div class="sharebg"></div>');
      //       $(".sharebg").addClass("sharebg-active");
      //     }
      //     $(".sharebg-active,.share_btn").click(function(){
      //       $(".am-share").removeClass("am-modal-active");	
      //       setTimeout(function(){
      //         $(".sharebg-active").removeClass("sharebg-active");	
      //         $(".sharebg").remove();	
      //       },300);
      //     })
      //   }),
        // 接口
        // this.id = this.$route.params.id
        this.axios.get(`news/3892357`).then(res => {
            this.main = res.data
        })
        this.axios.get(`story-extra/3892357`).then(res => {
            this.comments = res.data.comments;
            this.popularity = res.data.popularity;
        })
    }

}
</script>
<style lang="less">

</style>
<style>
.van-tabbar--fixed{display: flex;align-items: center;justify-content: space-between;}
.van-tabbar--fixed img{width:30px;height:30px;margin-top:5px}
div.van-tabbar{width: 100%;margin-left:0.3rem}
.van-tabbar--fixed .back{border-right:1px solid #ccc;height:35px;padding-right:1rem;margin-right:-1.4rem}

.am-share { font-size: 14px; border-radius: 0; bottom: 0; left: 0; position: fixed; text-align: center; -webkit-transform: translateY(100%); -ms-transform: translateY(100%); transform: translateY(100%); -webkit-transition: -webkit-transform 300ms; transition: transform 300ms ; width: 100%; z-index: 1110; }
.am-modal-active { transform: translateY(0px);  -webkit-transform: translateY(0); -ms-transform: translateY(0); transform: translateY(0) }
.am-modal-out { z-index: 1109; -webkit-transform: translateY(100%); -ms-transform: translateY(100%); transform: translateY(100%) }

.am-share-title { background-color: #f8f8f8; border-bottom: 1px solid #fff; border-top-left-radius: 2px; border-top-right-radius: 2px; color: #555; font-weight: 400; margin: 0 10px; padding: 10px 0 0; text-align: center; }
.am-share-title::after { border-bottom: 1px solid #dfdfdf; content: ""; display: block; height: 0; margin-top: 10px; width: 100%; }

.am-share-footer { margin: 10px; }
.am-share-footer .share_btn { color: #555;  display: block; width: 100%; background-color: #e6e6e6; border: 1px solid #e6e6e6; border-radius: 0; cursor: pointer;  font-size: 16px; font-weight: 400; line-height: 1.2; padding: 0.625em 0; text-align: center; transition: background-color 300ms ease-out 0s, border-color 300ms ease-out 0s; vertical-align: middle; white-space: nowrap;font-family:"微软雅黑";  }

.am-share-sns {width: 100%; background-color: #f8f8f8; border-radius:20px 20px 0 0; padding-top: 30px; height:auto; zoom:1; overflow:auto; }
.van-tabbar--fixed .am-share-sns img{width: 44px;height: 44px}
.am-share-sns li { margin-bottom: 15px; display: block; float: left; height: auto;  width: 25%; }

.am-share-sns a { color: #555; display: block; text-decoration:none; }
.am-share-sns span { display: block; }

.am-share-sns li i { background-position: center 50%; background-repeat: no-repeat; background-size: 36px 36px; background-color: #ccc; color: #fff; display: inline-block; font-size: 18px; height: 36px; line-height: 36px; margin-bottom: 5px; width: 36px; }
/* .am-share-sns .share-icon-weibo { background-image: url(../assets/imgs/weiboLogo.png) no-repeat; } */

.sharebg { background-color: rgba(0, 0, 0, 0.6); bottom: 0; height: 100%; left: 0; opacity: 0; position: fixed; right: 0; top: 0; width: 100%; z-index: 1100; display:none; }
.sharebg-active { opacity: 1; display:block; }
/* 分享 */
.poperBg{
    position: fixed;
    top: 0;
    left: 0;
    background-color:rgba(0,0,0,0.6);
    height: 100%;
    width: 100%;
    z-index: 1200;
}
.poper img{
    width: 50px;
    height:50px;
    margin-bottom: 3px;
}
.poperArea{
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    padding:26px 12px;
    box-sizing: border-box;
    background-color: #fff;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1600;
    transition: all 0.3s ease;
    transform:translateY(100%) 
}
.poperArea div{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    box-sizing: border-box;
    margin-bottom: 16px;
}
.poperCupHiden{
    transform:translateY(0%) 
}
</style>