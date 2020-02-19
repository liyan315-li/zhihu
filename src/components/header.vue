<template>
  <div class="header">
      <div class="date">
          <span class="day">{{ day }}</span>
          <span>{{ month }}月</span>
      </div>
      <div class="hello">{{ sayHao }}</div>
      <router-link to="/user" class="userImg">
          
          <img src="../assets/imgs/user.png" >
      </router-link>
  </div>
</template>

<script>
export default {
    data(){
        return{
            day:'',
            month:'',
            sayHao:''
        }
    },
    methods:{
       navTo(){
           
       }
    },
    mounted(){
       this.day = getNowDate().getDate();
       this.month = getNowDate().getMonth()+1;
       let sayHao = getNowDate().getHours();
       switch(sayHao){
            case 0:;
            case 1:;
            case 2:;
            case 3:;
            case 4:;
            case 5:;
            case 6:;
            case 7:;
            case 8 : this.sayHao = '早上好' ; break;
            case 9:;
            case 10:;
            case 11:;
            case 12:;
            case 13 : this.sayHao = '中午好' ; break;
            case 14:;
            case 15:;
            case 16:;
            case 17:;
            case 18:;
            case 19 : this.sayHao = '下午好' ; break;
            case 20:;
            case 21:;
            case 22:;
            case 23 : this.sayHao = '晚上好' ; break;
       }
    }
}
var getNowDate = function(){
    return new Date();
}
</script>

<style>

</style>