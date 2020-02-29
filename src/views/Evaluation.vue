<template>
  <div class="Evaluation">
    <!-- 评价评分 -->
    <div class="Evaluation-score">
      <div class="Evaluation-left">
        <h1>3.9</h1>
        <h2>综合评分</h2>
        <p>高于</p>
      </div>

      <div class="Evaluation-right">
        <p>
          服务态度
          <Icon type="ios-heart" />
          <Icon type="ios-heart" />
          <Icon type="ios-heart" />
          <Icon type="ios-heart" />
          <Icon type="ios-heart" />
        </p>
        <p>
          服务态度
          <Icon type="ios-heart" />
          <Icon type="ios-heart" />
          <Icon type="ios-heart" />
          <Icon type="ios-heart" />
          <Icon type="ios-heart" />
        </p>
        <p>送达时间:44分钟</p>
      </div>
    </div>
    <!-- 评价内容 -->
    <div class="Evaluation-content">
      <!-- 按钮 -->
      <div class="Evaluation-btns">
        <div class="Evaluation-btn">
          <Button type="primary">全部</Button>
          <Button type="info">满意</Button>
          <Button>不满意</Button>
        </div>
        <p class="Evaluation-choose">只有什么什么</p>
      </div>
      <!-- 评论 -->
      <div class="Evaluation-comments">
        <div class="Evaluation-comments-list" v-for="(v,i) in evaluationlist" :key="i">
          <div class="Evaluation-comments-portrait">
            <img :src="v.avatar" width="30" />
          </div>
          <div class="Evaluation-nameRateTime-list">
            <p class="Evaluation-nameRateTime">
              <span>{{v.username}}</span>
              <span>{{v.rateTime}}</span>
            </p>
            <p>{{v.score}}星 {{v.deliveryTime}}分钟送达</p>
            <p>{{v.text}}</p>
            <p>
              <span v-for="(k,index) in v.recommend" :key="index">
                <Button type="dashed" size="small">{{k}}</Button>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { evaluation } from "../api/apis.js";
export default {
  data() {
    return {
      evaluationlist: {},
      delivery:{}
    };
  },
  created() {
    evaluation().then(v => {
      console.log(v.data);
      this.evaluationlist = v.data.data;
      this.delivery = v.data;
    });
  }
};
</script>

<style lang="less" scoped>
.Evaluation {
  background: #f4f5f7;
  height: 100%;
  .Evaluation-score {
    display: flex;
    text-align: center;
    align-items: center;
    padding: 15px 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #e6e6e6;
    background: #fff;

    .Evaluation-left {
      width: 35%;
      border-right: 1px solid #e6e6e6;
    }
    .Evaluation-right {
      width: 65%;
    }
  }
  .Evaluation-content {
    background: #fff;
    // 按钮
    .Evaluation-btns {
      margin: 0px 15px;

      .Evaluation-choose {
        line-height: 50px;
      }
      .Evaluation-btn {
        padding: 15px 0;
        border-bottom: 1px solid #e9e9e9;
        .ivu-btn-primary {
          margin-right: 15px;
        }
        .ivu-btn-info {
          margin-right: 15px;
        }
      }
    }
    // 评论内容
    .Evaluation-comments {
      border-top: 1px solid #e9e9e9;
      padding: 0 15px;

      .Evaluation-comments-list {
        padding: 20px 0;
        display: flex;
        border-bottom: 1px solid #e9e9e9;
        .Evaluation-comments-portrait {
          width: 40px;
          text-align: center;
          margin-right: 5px;
        }
        .Evaluation-nameRateTime-list {
          width: 100%;
          p {
            padding: 2px 0;
            width: 100%;
          }
          .Evaluation-nameRateTime {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
</style>