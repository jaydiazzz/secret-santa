<template lang="pug">
.v-slides

  .swiper.my-swiper
    .swiper-wrapper
      slot(name='slides')
    .swiper-button-next(v-if='options.navigation && options.navigation.nextEl === ".swiper-button-next"')
    .swiper-button-prev(v-if='options.navigation && options.navigation.prevEl === ".swiper-button-prev"')
    .swiper-pagination(v-if='options.pagination && options.pagination.el === ".swiper-pagination"')
    .swiper-scrollbar(v-if='options.scrollbar && options.scrollbar.el === ".swiper-scrollbar"')
</template>

<script>
import Swiper from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

export default {
  name : 'v-slides',

  props : {

    options : {
      type : Object,
    }

  },

  data : () => ( {

    swiperInstance : null,

  } ),

  mounted() {

    this.swiperInstance = new Swiper( '.my-swiper', this.options );

    this.$emit( 'init', this.swiperInstance );

  },
};
</script>

<style lang="scss">
.v-slides {

  .swiper {

    .swiper-wrapper {

      .swiper-slide {

        &.swiper-slide-active {

          > * {
            visibility: initial;
          }
        }

        > * {
          visibility: hidden;
        }
      }
    }
  }
}
</style>