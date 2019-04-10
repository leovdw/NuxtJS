<template>
  <section class="container">
    <div class="heading">
      <!-- <h1>{{ slug.title.rendered }}</h1>
      <p class="subheading">{{ slug.acf.subheading }}</p> -->
    </div>
    <div class="content">
      <!-- {{forms}} -->
    </div>
  </section>
</template>

<script>
import gf from '~/lib/gf'

gf.forms();
export default {
  // async asyncData ({ params }) {
  //   return gf.froms()
  // },
  props: {
    slug: { type: Object }
  },
  methods : {

  }
}


</script>
