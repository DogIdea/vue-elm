<template>
  <div id="app">
    <elm-header :seller='seller'></elm-header>
    <div class='tab border-1px border-1px-top'>
      <div class="tab-item">
        <router-link to='/goods'>商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/ratings'>评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/seller'>商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller='seller'></router-view>
    </keep-alive>
  </div>
</template>

<script>
import elmHeader from './components/header/header';
import {urlParse} from './common/js/util';
const ERR_OK = 0;
export default{
  data() {
    return {
      seller:{
        id:(() => {
          let queryParam =urlParse();
          return queryParam.id;
        })()
      }
    };
  },
  created() {
    this.$axios.get('/api/seller?id='+ this.seller.id).then((res) => {
      let response = res.data;
      if (response.errno === ERR_OK) {
        // this.seller = response.data;
        this.seller = Object.assign({},this.seller,response.data);
      }
    });
  },
  components: {
    elmHeader
  }
};
</script>

<style lang='stylus'>
@import "./common/stylus/mixin.styl";
  #app
    .tab
      display:flex
      width:100%
      height:40px
      line-height:40px
      border-1px(rgba(7,17,27,0.1))
      border-1px-top(rgba(7,17,27,0.1))
      .tab-item
        flex:1
        text-align:center
        & > a
          display:block
          font-size:14px
          color:rgb(77,85,93)
          &.active
            color:rgb(240,20,20)
</style>
