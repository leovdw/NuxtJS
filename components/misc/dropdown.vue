<template>
    <div class="home__service">
      <div class="home__service__tab__wraper mdc-tab-bar">
        <div class="mdc-tab-bar home__service__tab--nav" role="tablist">
          <div class="mdc-tab-scroller">
            <div class="mdc-tab-scroller__scroll-area">
              <div class="mdc-tab-scroller__scroll-content">
                <template  v-for="(item, index) in content" >
                 <button
                   :class="['mdc-tab', (index == 0) ? 'active mdc-tab--active' : '']"
                   role="tab"
                   :aria-selected="(index == 0) ? true : false"
                   :tabindex="(index == 0) ? '0' : '-1'"
                   @click="setActiveTab(index)"
                   :key="index"
                 >
                   <span class="mdc-tab__content">
                     <span class="mdc-tab__text-label">{{item.tab}}</span>
                   </span>
                   <span v-bind:class="['mdc-tab-indicator', (index == 0) ? 'mdc-tab-indicator--active' : '']">
                     <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                   </span>
                   <span class="mdc-tab__ripple"></span>
                 </button>
               </template>
             </div>
           </div>
         </div>
       </div>
      <div class="home__service__tab--content__wraper">
        <transition-group
          appear
          name="flip-list"
          tag="div"
          v-bind:css="true"
        >
          <template v-for="(item, index) in content" >
           <div
             v-if="activeTab === index"
             :class="['home__service__tab--content', direction, {active: activeTab === index}]"
             :key="index"
           >
             <div class="home__service__tab--content--img" style="background-color:rgb(239, 245, 247)"></div>
             <div class="home__service__tab--content--fill"></div>
             <div class="home__service__tab--content--text">
               {{item.text}}
             </div>
           </div>
         </template>
       </transition-group>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  data : function () {
    return {
      activeTab : 0,
      direction : 'left',
    }
  },
  props: ['content'],
  methods: {
    setActiveTab : function (index) {
      this.activeTab > index ? this.direction = 'left' : this.direction = 'right';
      this.activeTab = index;
    }
  },
  computed: {

  },
}
</script>
<style lang="scss" scoped>

$main-color : #4d638F;

.home__service{
   width: 75%;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   height: 100%;
   justify-content: space-around;

   h2{
     text-align: center;
   }
   & > a{
     align-self: center;
     margin-bottom: 5vh;

     & .mdc-button{
       background-color: $main-color;
     }
   }

   &__tab{
     &__wraper{
       overflow: hidden;
       background-color: white;
     }

     &--nav{
       display: flex;
       justify-content: space-between;
       margin-bottom: 6vh;
       border-bottom: 1px solid $main-color;
       position: relative;

       & .mdc-tab-scroller{
         width: 100%;

         button{
           // @include font-size(16px);
         }
       }
     }

     &--content{
       width: 90%;
       margin-left: 5%;
       margin-right: 5%;
       display: flex;
       justify-content: space-between;
       transition: 1s ease all;
       &.right{
         transform: translateX(100%);
       }
       &.left{
         transform: translateX(-100%);
       }
       &.active{
         transform: translateX(0);
       }

       &__wraper{
         display: -webkit-box;
         transition: 0.4s ease all;
       }

       &--img{
         flex: 26%;
         border-radius: 5px;

         // @include breakpoint(small, down){
         //   margin-bottom: 30px;
         //   flex: 0;
         //  }

         img{
           width: 100%;
           height: auto;
           border-radius: 3px;
         }
       }
       &--text{
         flex: 63%;

         ul li{
           list-style: disc;
         }

         // @include breakpoint(small, down){
         //   margin-bottom: 20px;
         //  }
       }
       &--fill{
         flex: 8%;

         // @include breakpoint(small, down){
         //   display: none;
         // }
       }
     }
   }
 }

 .list-complete-item {
   transition: all 1s;
   display: inline-block;
   margin-right: 10px;
 }
 .list-complete-enter, .list-complete-leave-to
 /* .list-complete-leave-active below version 2.1.8 */ {
   opacity: 0;
   transform: translateY(30px);
 }
 .list-complete-leave-active {
   position: absolute;
 }
</style>
