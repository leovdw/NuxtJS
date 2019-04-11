<template>
  <footer>
    <nav>
      <ul>
        <li v-for="items in menus.menu.footer" v-bind:key="items.ID" @click="set_current_nav(items.ID)">
          <nuxt-link :to="slugify(items.title)">{{ items.title }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>

import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  data() {
    return {
      loader : true,
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
      return this.$store.getters.nav/get_current
    }
  },
  computed: {
    menus(){
      return this.$store.state.nav;
    },
  }
}
</script>
<style lang="scss">
  footer {
    background-color: #3498db;
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
          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 1px;
            background-color: #FFFFFF;
            transition: width cubic-bezier(0.155, 0.005, 0.000, 1.000) 1200ms;
          }
        }
        &:hover {
          a::after {
            width: 100%;
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


</style>
