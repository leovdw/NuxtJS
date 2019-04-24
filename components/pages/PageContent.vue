<template>
  <div class="home" v-scroll="handleScroll" v-scroll.prevent="handeScroll">

    <div class="home__sections" key='sec_1' v-on:transitionend="set_finish">
      <div class="home__intro" style="background-color : #EFF5F7; background-position:">
        <div class="home__intro--wraper">
          <h2 class="home__intro--title">
            title
          </h2>
          <h4 class="home__intro--subtitle">
            Subtitle
          </h4>
        </div>
      </div>
    </div>

    <div class="home__sections down" key='sec_2' v-on:transitionend="set_finish">
      <div class="home__mako">
        <h2>Title</h2>
        <h4>Subtiltle</h4>

        	<div class="home__mako__box__wraper">
            <div class="home__mako__box">
              <div class="home__mako__box--img" style="background-color: #EFF5F7">
              </div>
              <div class="home__mako__box--content">
                <h3>My H3 title</h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <a href="">Learn more</a>
              </div>
            </div>
            <div class="home__mako__box">
              <div class="home__mako__box--img" style="background-color : #EFF5F7">
              </div>
              <div class="home__mako__box--content">
                <h3>My H3 title</h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <a href="">Learn more</a>
              </div>
            </div>
            <div class="home__mako__box">
              <div class="home__mako__box--img" style="background-color : #EFF5F7">
              </div>
              <div class="home__mako__box--content">
                <h3>My H3 title</h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <a href="">Learn more</a>
              </div>
            </div>
          </div>
      </div>
    </div>

    <div class="home__creation even down" v-on:transitionend="set_finish">
      <div class="home__creation__contentwrap">
        <div class="home__creation--img" style="background-color:rgb(239, 245, 247)">
        </div>
        <div class="home__creation--content">
          <h2>The Creation Title</h2>
          <div class="home__creation--content--desc">
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <ul>
              <li>Date :</li>
              <li>Mai 1980</li>
            </ul>
          </div>
          <a href="" class="home__creation--seemore">
            <button class="mdc-button mdc-button--raised mdc-ripple-upgraded">
                Voir plus
            </button>
          </a>
        </div>
      </div>
    </div>

    <div class="home__creation odd down" v-on:transitionend="set_finish">
      <div class="home__creation__contentwrap">
        <div class="home__creation--content">
          <h2>The Creation Title</h2>
          <div class="home__creation--content--desc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <ul>
              <li>Date :</li>
              <li>Fev 1790</li>
            </ul>
          </div>
          <a href="<?php the_permalink(); ?>" class="home__creation--seemore">
            <button class="mdc-button mdc-button--raised mdc-ripple-upgraded">
              Voir plus
            </button>
          </a>
        </div>
        <div class="home__creation--img" style="background-color:rgb(239, 245, 247)">
        </div>
      </div>
    </div>

    <div class="home__creation even down" v-on:transitionend="set_finish">
      <div class="home__creation__contentwrap">
        <div class="home__creation--img" style="background-color:rgb(239, 245, 247)">
        </div>
        <div class="home__creation--content">
          <h2>The Creation Title</h2>
          <transition
          name="component-fade"
          mode="out-in">
            <div class="home__creation--content--desc">
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <ul>
                <li>Date :</li>
                <li>Mai 1980</li>
              </ul>
            </div>
          </transition>
          <a href="" class="home__creation--seemore">
            <button class="mdc-button mdc-button--raised mdc-ripple-upgraded">
                Voir plus
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import { MDCRipple } from '@material/ripple/index';

export default {
  data : function () {
    return {
      current : 0,
      section: 0,
      is_finished: 1,
    }
  },
  props: {
    slug: { type: Object }
  },
  methods: {
    handleScroll: function (evt, el) {
      if (this.section == 0) {
        let sec = document.querySelectorAll('.home__sections, .home__creation').length;
        this.section = sec;
      }

      // v-scroll.prevent="handeScroll"

      let scroll = Math.round(event.deltaY);
      if (scroll > 1){
        if(
            (this.current == this.section - 1 || this.current <= this.section - 1)
            && this.current !== this.section - 1
          ){
          this.current = this.current + 1;
        }
      }
      if (scroll < -1){
        if (this.current !== 0){
          this.current = this.current - 1;
        }
      }

    },
    handle_creation : function (el, oldel) {
      let creation_txt = el.querySelector('.home__creation--content');
      creation_txt.classList.add('seen');

      if (oldel.classList.contains('home__creation')) {
        let creation_txt_old = oldel.querySelector('.home__creation--content');
        creation_txt_old.classList.remove('seen');
      }
    },
    set_finish : function(){
      this.is_finished = 1;
    },

    enter : function () {
      console.log('entered');
    }
  },
  watch: {
      current: function(val, oldVal) {
        // console.log(MDCRipple);
        let sec = document.querySelectorAll('.home__sections, .home__creation');


        if (val - oldVal == 1) {
          sec[val].classList.remove('down');
          sec[oldVal].classList.add('up');
        }else if (val == oldVal - 1) {
          sec[val].classList.remove('up');
          sec[oldVal].classList.add('down');
        }

        if (sec[val].classList.contains('home__creation')) {
          this.handle_creation(sec[val], sec[oldVal]);
        }
      },
  }
}


</script>
<style scoped lang="scss">
$main-color : #4d638F;

.home{
  height: 100vh;
  overflow: hidden;
  position: relative;

  &__sections{
    height: 100vh;
    width: 100%;
    transition: 1s ease all;
    position: fixed;
    top: 0;
    left: 0;

    &.down{
      transform: translateY(100%);
    }

    &.up{
      transform: translateY(-100%);
    }

    // @include breakpoint(small, down){
    //   height: auto;
    //   margin-bottom: 100px;
    //
    //   &:first-child{
    //     height: 100vh;
    //   }
    //
    //   &:nth-child(8){
    //     margin-top: 100px;
    //     margin-bottom: 0;
    //   }
    //  }
    // @include breakpoint(small, down){
    //   width: 100%;
    // }
  }

  &__option{

    &--toggler{
      position: fixed;
      bottom: 20px;
      left: 20px;
      background-color: #4d638F;
      width: 40px;
      display: flex;
      justify-content: center;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;

      // @include breakpoint(small, down){
      //  display: none;
      // }

      img{
        align-self: center;
        width: 30px;
        height: 30px;
      }
    }

    &--wraper{
      position: fixed;
      bottom: 70px;
      left: 0;
      display: flex;
      flex-direction: column;
      background-color: white;
      padding: 20px 20px;
      padding-top: 30px;
      border-radius: 4px;
      transition: .3s ease all;
      transform: translateX(-100%);

      label{
        color: #4d638F;
        margin-right: 20px;
      }

      &.seen{
        transform: translateX(0%);
        transition: .3s ease all;
        left: 20px;
      }
    }
  }
}

.home__creation{
  height: 100vh;
  width: 100%;
  transition: 1s ease all;
  position: fixed;
  top: 0;
  left: 0;

  &.down{
    transform: translateY(100%);
  }

  &.up{
    transform: translateY(-100%);
  }

  &__contentwrap{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    max-width: 75%;
    margin: 0 auto;
    padding-bottom: 10vh;
    overflow: hidden;
  }
  &--img{
    width: 20em;
    height: 20em;
    border-radius: 8px;
  }
  &--content{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding-left: 8%;
    flex: calc(60% - 30px);
    overflow: hidden;
    transform: translateX(-100%);
    z-index: -1;
    transition: 0.8s ease all;

    &--desc{
      display: flex;
      flex-wrap: wrap;
      background-color: white;

      p{
        margin-bottom: 2em;
        width: 100%;
      }

      ul{
        display: flex;
        align-items: baseline;

        &:nth-child(3){
          margin-left: 20px
        }

        li{
          font-size: 14px;
          list-style: none;

           &:nth-child(1){
             text-transform: uppercase;
             font-weight: bold;
             padding-right: 5px;
             color: #00809B;
           }
           &:nth-child(2){
             font-weight: 300;
           }
        }
      }

      & + a{
        margin-right: auto;


      }
    }
    &.seen{
      transition: 0.8s ease all;
      transform: translateX(0);
    }
    & .mdc-button--raised{
      background-color: $main-color;
    }
  }

  &.odd{
    & .home__creation--content{
      padding-right: 8%;
      padding-left: 0;
      transform: translateX(100%);
      z-index: -1;

       &--desc{
         flex-direction: row-reverse;

         ul:nth-child(3){
           margin-right: 20px;
         }

         & + a{
           margin-left: auto;
           margin-right: 0;
         }
      }
      &.seen{
        transform: translateX(0);
      }

      h2{
        text-align: right;

      }
      p{
        text-align: right;

      }
      a{
        text-align: right;

      }
    }
    & .home__creation--img{

    }
  }
}


.home__creation--seeall{
  position: fixed;
  bottom: 30px;
  left: 50%;
  z-index: -1;
  opacity: 0;
  transform: translateX(-50%) translateY(0%);
  transition: 0.5s ease all;

  &.not_active{
    z-index: 0;
    opacity: 1;
    position: relative;
    left: 0;
    margin-top: 20px;

    button{
      position: relative;
      left: 50%;
      transform: translateX(-50%) translateY(0%);
    }
  }

  &.is_seen{
    z-index: 0;
    opacity: 1;
    transition: 0.5s ease all;
  }
}

.home__creation--sectiontitle{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 90px;
  font-size: 42px;
}

.page-template-page-templatehome-php{
  height: 100vh;
}
.page-template-home{
  overflow-x: hidden;
}

.home__intro{
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &--wraper{
    width: 75%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    height: 100%;
  }
  &--title{
    font-size : 24px;
    width: 50%;
    max-width: 600px;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 10px;
    color: #4d638F;
  }
  &--subtitle{
    font-size : 24px;
    width: 50%;
    max-width: 600px;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: normal;
    padding-bottom: 12vh;
    color: #4d638F;
  }
}

.home__mako{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
  margin: 0 auto;
  height: 100%;

  // @include breakpoint(medium , down){
  //   width: 90%;
  //  }

  h2{
    text-align: center;
    font-size: 30px;
    width: 75%;
    max-width: 50em;
    margin: 0 auto;
    margin-bottom: 25px;

    // @include breakpoint(small, down){
    //   width: 100%;
    //   max-width: 100%;
    //  }
  }
  h4{
    text-align: center;
    width: 80%;
    font-weight: normal;
    margin: 0 auto;
    font-size: 20px;
    margin-bottom: 30px;
    //
    // @include breakpoint(small, down){
    //   width: 100%;
    //   max-width: 100%;
    //  }
  }

  &__box{
    display: flex;
    width: 30%;
    flex-direction: column;
    justify-content: space-around;

    // @include breakpoint(small, down){
    //   width: 100%;
    //
    //   &:not(:last-child){
    //     margin-bottom: 50px;
    //   }
    //  }

    &__wraper{
      display: flex;
      justify-content: space-between;
      margin-bottom: 15vh;
      background-color: white;

      // @include breakpoint(small, down){
      //   flex-direction: column;
      //   margin-bottom: 0;
      //  }
    }

    &--img{
      border-radius: 7px;
      width: 100px;
      height: 100px;
      align-self: center;
      margin-bottom: 15px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;

      // @include breakpoint(small, down){
      //   width: 200px;
      //   height: 200px;
      //  }
    }
    &--content{
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h3{
        text-align: center;
        margin-bottom: 10px;
      }
      p{
        text-align: center;
        margin-bottom: 10px;
      }
      a{
        position: relative;
        padding-right: 20px;
        color:#4d638F;

        align-self: center;

        &::after{
          content: '';
          position: absolute;
          right: 0;
          top: 50%;
          width: 10px;
          height: 10px;
          transform: rotate(-45deg) translateY(-50%);
          border-bottom: 1px solid #4d638F;
          border-right: 1px solid #4d638F;
          transition: 0.2s ease all;
        }

        &:hover::after{
          transition: 0.2s ease all;
          right: -10px;
        }
      }
    }
  }
}
</style>
