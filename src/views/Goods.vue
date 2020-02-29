<template>
  <!-- 商品列表 -->
  <div class="goods">
    <!-- 左侧 -->
    <div class="goods-lift">
      <ul class="content">
        <p
          :class="{goodsliftnamestyle:true,goodsAtive:i==goodsleftname}"
          v-for="(v,i) in goodslist"
          :key="i"
          @click="goodsLiftClick(i)"
        >{{v.name}}</p>
      </ul>
    </div>
    <!-- 右侧 -->
    <div class="goods-right">
      <ul class="content">
        <div v-for="(v,i) in goodslist" :key="i" :id='i'>
          <h4 class="goods-right-points">{{v.name}}</h4>
          <div class="list" v-for="(k,index) in v.foods" :key="index">
            <div class="goods-images">
              <img :src="k.icon" alt />
            </div>
            <div class="goods-content">
              <h3>{{k.name}}</h3>
              <p>{{k.description}}</p>
              <p>月售{{k.sellCount}}份 &emsp; 好评率{{k.rating}}%</p>
              <div class="goods-btn">
                <div>
                  <span class="goods-price">
                    ￥
                    <span>{{k.price}}</span>
                  </span>
                  <span>{{k.oldPrice}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { getgoods } from "../api/apis.js";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      goodslist: {},
      goodsleftname: 0
    };
  },
  created() {
    getgoods().then(v => {
      this.goodslist = v.data.data;
      console.log(v.data.data);
    });
  },
  mounted() {
    new BScroll(document.querySelector(".goods-lift"), {
      click: true,
      scrollY: true
    });
    this.goodright=new BScroll(document.querySelector(".goods-right"));
  },
  methods: {
    goodsLiftClick(index) {
      this.goodsleftname = index;
      this.goodright.scrollToElement(document.getElementById(index),600)
    }
  }
};
</script>

<style lang="less">
.goods {
  background: rgb(243, 243, 243);
  display: flex;
  height: 100%;
  // 左侧
  .goods-lift {
    width: 80px;
    color: #2f3338;
    border-right: 1px solid #ccc;
    height: 100%;
    overflow: scroll;
    .goodsAtive {
      background: #fff;
      font-weight: 600;
    }
    .goodsliftnamestyle {
      display: flex;
      align-items: center;
      height: 50px;
      padding: 0 10px;
      border-bottom: 1px solid #ccc;
    }
  }
  // 右侧
  .goods-right {
    height: 100%;
    overflow: scroll;
    flex: 1;
    .goods-right-points {
      line-height: 24px;
      color: #a7aab0;
      padding-left: 15px;
    }
    .list {
      background: #fff;
      padding: 15px;
      display: flex;
      border-bottom: 1px solid #ccc;
      .goods-images {
        margin-right: 7px;
        img {
          width: 60px;
          height: 60px;
        }
      }
      .goods-content {
        p {
          font-size: 12px;
        }

        .goods-btn {
          display: flex;
          .goods-price {
            color: red;
            span {
              font-weight: 700;
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}
</style>