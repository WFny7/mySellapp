<template>
  <div class="main">
    <!-- 头部 -->
    <div class="main-herder" :style="{backgroundImage:'url('+data.avatar+')'}">
      <div class="main-herder-rgba">
        <div class="main-herder-left">
          <img :src="data.avatar"/>
        </div>
        <div class="main-herder-right">
          <h3>
            <img src="../assets/images/brand@2x.png" /> {{data.name}}
          </h3>
          <p>{{data.description}}/{{data.deliveryTime}}分钟送达</p>
          <p>
            <img src="../assets/images/decrease_3@2x.png" alt /> {{data.supports[0].description}}
          </p>
        </div>
      </div>
      <p class="main-herder-notice"> <img src="../assets/images/bulletin@2x.png" alt="">{{data.bulletin}} </p>
    </div>
    <!-- tab -->
    <div class="main-tab">
      <router-link to="/goods">商品</router-link>
      <router-link to="/evaluation">评论</router-link>
      <router-link to="/merchants">商家</router-link>
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>
    <div class="mian-shopcar-bottom"></div>
    <div class="main-shopcar">
      <span>总价|另需配送费元</span><button>20起送</button>
    </div>
  </div>
</template>

<script>
import{getseller}from '../api/apis'
export default {
  data(){
    return{
      data:{
        supports:[{description:'',}]
      }
    }
  },
  created(){
    getseller().then(
      v=>{
        console.log(v.data.data);
        this.data=v.data.data;
      }
    )
  }
};
</script>

<style lang="less">
.main{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .main-content{height: 434px;}
  .main-herder {
  width: 100%;
  height: 140px;
  background-size: 100%;
  background-position: center;
  color: #fff;

  .main-herder-rgba {
    width: 100%;
    height: 80%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: space-around;
    padding: 20px 20px 0;

    .main-herder-left {
      width: 30%;

      img {
        width: 70px;
        height: 70px;
        border-radius: 5px;
      }
    }
    .main-herder-right {
      width: 70%;
      h3{
          font-weight: 700;
          font-size: 18px;
          margin-bottom: 3px;
          img{height: 24px;}
      }
      p{
        img{height: 20px;}
      }
      
    }
  }
  .main-herder-notice{
      height: 20%;
      background: rgba(0, 0, 0, 0.6);
      padding: 4px 20px;

      width: 100%;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      img{
          height: 80%;
          margin-right: 8px;
      }
  }
}
.main-tab{
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #ccc;
  font-size: 18px;
  padding: 8px;
}
.mian-shopcar-bottom{
  width: 100%;
  height: 50px;
}
.main-shopcar{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #ccc;
  position: fixed;
  bottom: 0;
}
}

</style>