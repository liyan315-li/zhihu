<template>
    <div>
        <div class="header">
            <van-tabbar v-model="active" style="top:0;background-color:#fff">
                <router-link to="/artDet"><img src="../assets/imgs/back.png" width="32" /></router-link>
                <div style="margin-top:0.2rem;margin-right:0.6rem">32条评论</div>
                <div>   </div>
            </van-tabbar>
        </div><!--/header-->
        <div style="margin-left: 1rem;">13条长评</div>
        <div class="user">
            <div class="subUser" v-for="item in comList" :key="item.id">
                <div class="userLeft"><img :src="item.avatar" width="40" /></div>
                <div class="userRight">
                    <h3>
                        <div>{{item.author}}</div>
                        <div style="color:#ccc"> · · ·</div>
                    </h3>
                    <div class="comment">{{item.content}}</div>
                    <div class="subCom">
                        <div>今天 {{item.time}}</div>
                        <div class="comRight">
                            <div>{{item.likes}}</div>
                            <div><img src="../assets/imgs/comzan.png" width="28" /></div>
                            <div><img src="../assets/imgs/comment.png" width="22" height="22" style="margin-left:2rem;margin-top:0.2rem" /></div>
                        </div>
                    </div><!--/subCom-->
                </div><!--/userRight-->
            </div><!--/subUser-->
        </div>
        <div style="margin-left: 1rem;">19条短评</div>
        <div class="user">
            <div class="subUser" v-for="item in commList" :key="item.id">
                <div class="userLeft"><img :src="item.avatar" width="40" /></div>
                <div class="userRight">
                    <h3>
                        <div>{{item.author}}</div>
                        <div style="color:#ccc"> · · ·</div>
                    </h3>
                    <div class="comment">{{item.content}}</div>
                    <div class="subCom">
                        <div>今天 {{item.time}}</div>
                        <div class="comRight">
                            <div>{{item.likes}}</div>
                            <div><img src="../assets/imgs/comzan.png" width="28" /></div>
                            <div><img src="../assets/imgs/comment.png" width="22" height="22" style="margin-left:2rem;margin-top:0.2rem" /></div>
                        </div>
                    </div><!--/subCom-->
                </div><!--/userRight-->
            </div><!--/subUser-->
        </div>
        <div style="color:#ccc;text-align:center;margin:2rem 0">已显示所有评论</div>
        <van-tabbar v-model="active" class="bottom" style="width:100%;margin:0;height:4rem">
            <img src="../assets/imgs/user.png" />
            <div>说说你的看法...</div>
        </van-tabbar>
    </div>
</template>
<script>
import Vue from 'vue'
// 底部固定
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);

export default{
    data(){
        return {
            activeName: 'first',
            comList: [],   //长评
            commList: [],  //短评
            count: 0,
           isLoading: false,
        //    底部固定
        active: 0
        }
    },
   mounted(){
       var _this = this;
        //长评
       this.axios.get("story/4232852/long-comments").then(res => {
        for(let i = 0;i<res.data.comments.length;i++){
                if(res.data.comments[i].avatar.indexOf("pic3") != -1){
                    res.data.comments[i].avatar = res.data.comments[i].avatar.replace(
                        /pic3/,
                        "pic1"
                    )
                }
            }       
            this.comList = res.data.comments
        }),
        // 短评
        this.axios.get("story/4232852/short-comments").then(res => {
        for(let i = 0;i<res.data.comments.length;i++){
                if(res.data.comments[i].avatar.indexOf("pic3") != -1){
                    res.data.comments[i].avatar = res.data.comments[i].avatar.replace(
                        /pic3/,
                        "pic1"
                    )
                }
            }       
            this.commList = res.data.comments
        })
    }
}
</script>
<style>
div.bottom{background-color: #E0E0E0;width: 100%;margin-left: 0}
div.bottom img{margin-left: 1rem}
div.bottom div{color:#999;margin-right:13rem}
</style>