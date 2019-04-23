<template>
  <div class="home" v-scroll="handleScroll">
    <transition-group
    name="list"
    tag="div"
    v-on:move="move"
    >
      <div class="home__sections" key='sec_1'>
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

      <div class="home__sections" key='sec_2' >
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
    <v-btn color="info">Info</v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    slug: { type: Object }
  },
  methods: {
    handleScroll: function (evt, el) {
      if (this.section == 0) {
        let sec = document.querySelectorAll('.home__sections');
        this.section.push({sec});
      }

      if (this.is_finished == 1){
        let scroll = Math.round(event.deltaY);
        if (scroll > 1){
          if( this.current !== this.section.length ){
            this.current = this.current + 1;
          }
        }
        if (scroll < -1){
          if (this.current !== 0){
            this.current = this.current - 1;
          }
        }
      }
    },
    move: function (){
      console.log('moved');
    }
  },
  watch: {
      current: function(val, oldVal) {
        // v();
        const sec = document.querySelectorAll('.home__sections');
        this.is_finished = 0;
        console.log(velocity());
        sec[val].velocity(
          "scroll",
          {
            duration: 1500,
            easing: "spring",
            complete : function () {
              this.is_finished = 1;
            }
          }
        )
      },
  }
}


</script>
<style scoped lang="scss">

.home{
  height: 100vh;
  overflow: hidden;

  &__sections{
    height: 100vh;
    width: 100%;
    transition: 1s ease all;

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

.list-move {
  transition: transform 1s;
}
</style>
