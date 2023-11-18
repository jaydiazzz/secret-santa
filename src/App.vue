<template lang='pug'>
.home

  .back.spacey(
    v-if='activeSlide === 1'
    @click='slideBack'
  ) BACK

  .ghost.ghost-1
  .ghost.ghost-2

  v-slides.container(
    :options='swiperConfig'
    @init='slidesInit'
  )

    template(
      v-slot:slides
    )

      .swiper-slide.slide-1
        .input
          p.label Enter your name here
          input(placeholder='Name' v-model='user')
        .button(@click='slideNext') Next

      .swiper-slide.slide-2
        h2 Click button below to figure out who your spooky basket will be given to
        .button(
          :class='[buttonState]'
          @click='findPerson'
        ) Click Here
        h2.error(v-if='err') {{ err }}
        h2.loading(v-if='buttonState === "loading"') Loading...
        h2(v-if='receiver') You are {{ receiver }}'s Secret Santa!

  .trees

    .tree.tree-1
    .tree.tree-2
    .tree.tree-3

</template>

<script>
import { defineAsyncComponent, nextTick } from 'vue';
import { write } from '@/lib/write';

export default {
  name : 'home',

  data : () => ( {

    user     : '',
    receiver : null,

    err : null,

    swiper : null, // null be default until the component is loaded in by the parent.

    swiperConfig : {
      autoHeight     : true,
      spaceBetween   : 100,
      allowTouchMove : false,
    },

    activeSlide : 0,

    buttonState : 'active',

  } ),

  created() {

    const state = localStorage.getItem( 'buttonState' );

    if ( state ) {
      this.buttonState = state;
    }

  },

  methods : {

    slideBack() {

      this.activeSlide -= 1;

      this.localSlides.slideBack();

    },

    slideNext() {

      this.activeSlide += 1;

      this.localSlides.slideNext();

    },

    findPerson() {

      this.buttonState = 'loading';

      write( this.user, ( person ) => {
        console.log( 'person', person );
        this.buttonState = 'disabled';
        localStorage.setItem( 'buttonState', 'disabled' );
        this.receiver = person;
      }, ( err ) => {
        this.err = err;
      } );

    },

    slidesInit( slidesObj ) {

      this.localSlides = slidesObj;

      if ( this.resizeObserver ) {

        this.resizeObserver.disconnect();

      }

      this.resizeObserver = new ResizeObserver( () => {

        this.localSlides.update();

      } );

      nextTick( () => {

        if ( this.$refs.campaignTypeSelector ) {

          this.resizeObserver.observe( this.$refs.campaignTypeSelector.$el );

        }

        if ( this.$refs.campaignForm ) {

          this.resizeObserver.observe( this.$refs.campaignForm.$el );

        }

        this.localSlides.update();

      } );

    },

  },

  components : {
    VSlides : defineAsyncComponent( () => import( '@/components/VSlides.vue' ) ),
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/DEFAULT.scss';

  .home {
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: #f2f2f2;
    overflow: hidden;

    .back {
      position: absolute;
      top: 15px;
      left: 30px;
      cursor: pointer;
      z-index: 1000;
    }

    .ghost {
      width: 300px;
      height: 300px;
      background-image: url( './assets/santa.gif' );
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: center;
      position: absolute;
    }

    .ghost-1 {
      transform: rotate(-25deg) rotateY(180deg);
      left: 300px;
      animation: goUp infinite;
      animation-duration: 30s;
    }

    .ghost-2 {
      top: 80%;
      right: -300px;
      animation: goAcross infinite;
      animation-duration: 30s;
    }

    @-webkit-keyframes goAcross {
      0%, 60% {
        right: -300px;
        top: 50%;
      }

      80%, 100% {
        right: calc( 100% + 300px );
        top: 40%;
      }
    }

    @-webkit-keyframes goUp {
      0%, 20% {
        left: -300px;
        top: 80%;
      }

      40%, 100% {
        left: calc( 100% + 300px );
        top: -300px;
      }
    }

    .trees {
      display: flex;
      flex-flow: row nowrap;
      align-items: flex-end;
      justify-content: center;
      width: 100%;
      position: absolute;
      bottom: 0;
      z-index: 0;

      .tree {
        width: 20vw;
        height: 20vw;
        background-image: url( './assets/tree.svg' );
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center bottom;

        &.tree-1, &.tree-3 {
          height: 25vw;
          width: 25vw;
        }
      }
    }

    .container {
      width: 500px;
      height: 100%;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;

      .button {
        width: 50px;
      }

      .swiper {
        width: 100vw;
      }

      .swiper-slide {
        display: flex;
        flex-flow: column;
        justify-content: center;
      }

      .swiper-slide {

        .button {
          margin: 30px auto;
        }
      }

      .slide-1 {

        .input {
          display: flex;
          flex-flow: column;
          align-items: center;

          .label {
            color: $color-primary;
            font-size: 24px;
            font-family: 'Nunito', sans-serif;
            text-align: left;
          }

          input {
            box-shadow: $inputBoxShadow;
            padding: 10px 15px;
            border-radius: 5px;
            margin-top: 10px;
          }
        }
      }

      .slide-2 {

        h2 {
          text-align: center;
        }
      }
    }
  }

  @media screen and (max-width: 450px) {
    .home {
      align-items: center;

      .ghost-2 {
        animation: mobileGoAcross infinite;
        animation-duration: 30s;
      }

      @-webkit-keyframes mobileGoAcross {
        0%, 60% {
          right: -300px;
          top: 50%;
        }

        80%, 100% {
          right: calc( 100% + 300px );
          top: 30%;
        }
      }

      .trees {

        .tree {

          &.tree-1 {
            height: 375px;
            width: 375px;
            flex: 0 0 375px;
          }

          &.tree-3 {
            height: 325px;
            width: 325px;
            flex: 0 0 325px;
          }

          &.tree-2 {
            flex: 0 0 0;
          }
        }
      }

      .container {
        margin: auto;
        width: 100%;
      }
    }
  }
</style>
