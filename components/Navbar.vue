<template>
  <header>
    <div class="burger" @click="menu_state = !menu_state" :class="{cross: menu_state}">
      <span></span>
    </div>
    <transition
    name="fade"
    v-on:before-enter="bg_beforeEnter"
    v-on:enter="bg_enter"
    v-on:leave="bg_leave"
    >
      <nav v-show="menu_state" v-if="menu">
        <div class="bg_opa"></div>
        <transition-group
        appear
        name="list"
        tag="ul"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
        >
          <li
          v-for="(items, index) in menu.items"
          v-bind:key="items.ID"
          @click="set_current_nav(items.ID), menu_state = !menu_state"
          v-if="menu_state"
          v-bind:data-index="index"
          >
            <nuxt-link :to="slugify(items.title)">
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
              </svg>
              {{ items.title }}
            </nuxt-link>
          </li>
        </transition-group>
      </nav>
    </transition>
  </header>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  data : function () {
    return {
      menu_state : false,
    }
  },
  methods: {
    slugify: function(text) {
      if (text) {
        return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
      }
    },

    set_current_nav : function (value) {
      this.$store.dispatch('nav/setCurrent', value);
    },

    current_nav(){
      return this.$store.getters['nav/get_current']
    },
    // ==== Text Animations ====
    beforeEnter: function (el) {
      // el.style.opacity = 0;
      el.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)';
      el.style.transform = 'translate(0%, 100%)';
    },

    enter: function (el, done) {
      setTimeout(function () {
        var delay = el.dataset.index * 200
        setTimeout(function () {
          // el.style.opacity = 1;
          el.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
          el.style.transform = 'translate(0%, 0%)';
        }, delay)
      }, 550)
    },

    leave: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        el.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)';
        el.style.transform = 'translate(0%, -100%)'
      }, delay)
    },

    // ==== Background / Nav Animation ====
    bg_beforeEnter: function (el) {
      el.style.opacity = 1;
      el.style.transform = 'translate(0%, -100%)';
      el.classList.add('pseudo_el');
    },

    bg_enter: function (el, done) {
      el.classList.add('active');

      setTimeout(function () {
        el.style.transform = 'translate(0%, 0%)';
        // done();
      }, 120)
    },
    bg_leave: function (el, done) {
      el.style.transform = 'translate(0%, -100%)'

      setTimeout(function () {
        el.classList.remove('active');
        //
      }, 700)

      // done();
    },
  },
  computed: {
    menu () {
      return this.$store.getters['nav/getMenuByName']('header');
    },
  },
}
</script>
<style lang="scss" scoped>

header {
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  // padding: 20px 5%;

  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #EFF5F7;
    display: flex !important;
    justify-content: center;
    flex-direction: column;
    z-index: 1;
    transition: 1s ease all;
    transform: translateY(-100%);

    .bg_opa{
      content: '';
      position: fixed;
      width: 100%;
      height: 0%;
      bottom: 0;
      left: 0;
      background-color: #EFF5F7;
      opacity: 0.6;
      z-index: -1;
      transition: .5s ease all;
      transform: translateY(0%);
    }

    &.pseudo_el{
      & .bg_opa{
        height: 0%;
        transform: translateY(-1%);
        transition: .5s ease all;
      }
    }
    &.pseudo_el.active{
      & .bg_opa{
        height: 100%;
        transform: translateY(100%);
        transition: .5s ease all;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 20%;
      width: 100%;
      margin: 0;
      padding: 0;
      align-items: center;

      li {
        list-style-type: none;
        line-height: 40px;
        padding: 20px 0;
        position: relative;
        z-index: 99;

        a {
          font-size: 40px;
          font-weight: 700;
          padding: 13px 15px;
          position: relative;
          color: #4d638F;
          text-transform: uppercase;
          overflow: hidden;
          display: flex;

          svg {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;

            rect {
              fill: none;
              stroke: #4d638F;
              stroke-width: 5;
              stroke-dasharray: 0, 500;
              transition: 1000ms all;
            }


            &:hover{
              rect {
                stroke-dasharray: 422, 0;
                transition: 1000ms ease all;
              }
            }
          }

          &.nuxt-link-active{
            border-bottom: 3px solid #4d638F;

            svg{
              height: calc(100% + 3px);
            }
          }
        }
      }
    }
  }
  .logo,
  nav a {
    color: #FFFFFF;
    text-decoration: none;
  }
  .logo {
    font-weight: 600;
    font-size: 30px;
    text-transform: uppercase;
  }
}
a:not(.md-button):hover{
  text-decoration: none;
}
.burger{
  width: 35px;
  height: 32px;
  margin: auto;
  cursor: pointer;
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 2;

  &.cross{
    &::before,
    &::after,
    span{
      background-color: #4d638F;
      transition: .4s ease all;
    }
  }
}

.burger:before, .burger span, .burger:after {
  width: 100%;
  height: 4px;
  display: block;
  background: #4d638F;
  border-radius: 2px;
  position: absolute;
  opacity: 1;
}

.burger:before, .burger:after {
  transition: top .35s cubic-bezier(.23,1,.32,1),transform .35s cubic-bezier(.23,1,.32,1),opacity .35s cubic-bezier(.23,1,.32,1),background-color 1.15s cubic-bezier(.86,0,.07,1);
  content: "";
}

.burger:before {
  top: 4px;
}

.burger span {
  top: 15px;
}

.burger:after {
  top: 26px;
}

/* Click */
.burger.cross span {
  opacity: 0;
}

.burger.cross:before, .burger.cross:after {
  top: 40%;
}

.burger.cross:before {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=5); /*for IE*/
}

.burger.cross:after {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=-5); /*for IE*/
}

.burger:focus {
  outline: none;
}

.fade-in-before-enter{
  transform: translateY(0%);
}
.fade-in-enter{
  transform: translateY(-100%);
}

.fade-leave-active {
  transition-delay: .6s;
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}

</style>
