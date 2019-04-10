<template>

 <section class="container">

   <nav class="slider">
     <ul>
       <!-- <li v-for="(item, index) in slider" :key="index"><nuxt-link :to="slugify(item.title)">{{ item.title }}</nuxt-link></li> -->
     </ul>
   </nav>
 </section>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  data() {
    return {
      slider: [
        { title: 'Home' },
        { title: 'About' },
        { title: 'Services' },
        { title: 'Contact' }
      ],
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
    }
  }
}
</script>

<style lang="scss">
.slider {
  ul li {
    list-style-type: none;
    &.is-active {
      font-size: 30px;
    }
  }
}
</style>
