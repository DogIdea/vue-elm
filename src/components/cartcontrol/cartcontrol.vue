<!--  -->
<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCar">
          <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
      <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
      <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>
<script>
export default {
  props: {
    food: {
      type:Object
    }
  },
  methods: {
    addCart(event) {
      if (!event._constructed) {
        return;
      }
      if (!this.food.count) {
        this.$set(this.food,'count',1);
      } else {
        this.food.count++;
      }
      this.$emit('cartAdd', event.target);
    },
    decreaseCar(event) {
      if (!event._constructed) {
        return;
      }
      if (this.food.count) {
        this.food.count--;
      }
    }
  }
};
</script>
<style lang='stylus'>
    .cartcontrol
        font-size:0
        .cart-decrease,.cart-count,.cart-add
          display:inline-block
        .cart-decrease
          padding:6px
          .inner
            display:inline-block
            font-size:24px
            line-height:24px
            color:rgb(0,160,220)
            transition:all 0.4s linear
          &.move-leave-active,&.move-enter-active
            transition:all 0.4s linear
            opacity:1
            transform:rotate(0)
            transform:translate3d(0,0,0)
          &.move-enter,&.move-leave-to
            opacity:0
            transform:translate3d(24px,0,0)
            .inner
              transform:rotate(180deg)
        .cart-add
            font-size:24px
            line-height:24px
            padding:6px
            color:rgb(0,160,220)
        .cart-count
            vertical-align:top
            width:12px
            padding-top:6px
            line-height:24px
            text-align:center
            font-size:10px
            color:rgb(147,153,159)
</style>
