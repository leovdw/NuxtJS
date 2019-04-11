<template>
  <div>
      <NavBar/>
      <nuxt/>
      <FooterBar/>
  </div>
</template>
<script>
import NavBar from '~/components/Navbar.vue';
import FooterBar from '~/components/FooterBar.vue';

export default {
  components: {
    NavBar,
    FooterBar
  },

}

</script>
<style>
</style>
