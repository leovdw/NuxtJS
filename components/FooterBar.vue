<template>
  <footer>
      <div v-if="get_fetch_status" class="loader">
        <img src="/load_2.gif" alt="">
      </div>
    <nav>
      <ul v-if="menu && menu.items">
        <li v-for="items in menu.items" v-bind:key="items.ID" @click="set_current_nav(items.ID)">
          <nuxt-link :to="slugify(items.title)">{{ items.title }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>

import { mapGetters, middlewares } from 'vuex'

export default {
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
  },
  computed: {
    menu () {
      return this.$store.getters['nav/getMenuByName']('footer')
    },
    ...mapGetters('nav', [
      'get_fetch_status'
    ])
  },
}
</script>
<style lang="scss" scoped>
  footer {
    background-color: #EFF5F7;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5%;
    nav ul {
      display: flex;
      flex-direction: row;
      li {
        list-style-type: none;
        a {
          font-size: 20px;
          font-weight: 300;
          margin: 0 10px;
          position: relative;

        }

      }
    }
    .logo,
    nav a {
      color: #4d638F;
      text-decoration: none;
    }
    .logo {
      font-weight: 600;
      font-size: 30px;
      text-transform: uppercase;
    }
  }
.loader{
  z-index: 99999;
  background-color: white;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  img{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
