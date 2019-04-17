<template>
  <div class="home__service__tab__wraper mdc-tab-bar">
    <div class="mdc-tab-bar home__service__tab--nav" role="tablist">
      <div class="mdc-tab-scroller">
        <div class="mdc-tab-scroller__scroll-area">
          <div class="mdc-tab-scroller__scroll-content">
              <button class="mdc-tab" role="tab" aria-selected="true">
                <span class="mdc-tab__content">
                  <span class="mdc-tab__text-label">Test Title</span>
                </span>
                <span class="mdc-tab-indicator mdc-tab-indicator--active">
                  <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
              </button>
              <button class="mdc-tab" role="tab" aria-selected="true">
                <span class="mdc-tab__content">
                  <span class="mdc-tab__text-label">Test Title</span>
                </span>
                <span class="mdc-tab-indicator mdc-tab-indicator--active">
                  <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
              </button>
              <button class="mdc-tab" role="tab" aria-selected="true">
                <span class="mdc-tab__content">
                  <span class="mdc-tab__text-label">Test Title</span>
                </span>
                <span class="mdc-tab-indicator mdc-tab-indicator--active">
                  <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
              </button>
          </div>
        </div>
      </div>
    </div>
    <div class="home__service__tab--content__wraper">
        <div class="home__service__tab--content">
          <div class="home__service__tab--content--text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div class="home__service__tab--content">
          <div class="home__service__tab--content--text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div class="home__service__tab--content">
          <div class="home__service__tab--content--text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
    </div>
    <v-btn color="info">Info</v-btn>
    
  </div>
</template>

<script>


// import gf from '~/lib/gf'
//
// gf.forms();
export default {
  // async asyncData ({ params }) {
  //   return gf.froms()
  // },
  props: {
    slug: { type: Object }
  },
  methods : {

  },
  mounted() {
    // var ripple = document.querySelectorAll('.mdc-ripple-upgraded');
    //
    // if (ripple) {
    //   for (var i = 0; i < ripple.length; i++) {
    //     mdc.ripple.MDCRipple.attachTo(ripple[i]);
    //   }
    // }
    //
    // var tabs_home = document.querySelectorAll('.mdc-tab-bar');
    // for (var i = 0; i < tabs_home.length; i++) {
    //   var tabBar = new mdc.tabBar.MDCTabBar(tabs_home[i]);
    // }
  }
}


</script>
<style scoped lang="scss">
.home__service__tab__wraper{
  margin: 150px auto;
  width: 80%;
  background-color: white;
  color: black;
}
</style>
