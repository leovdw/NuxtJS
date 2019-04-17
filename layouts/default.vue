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
  async mounted(){
   await this.$nextTick();

   this.$nuxt.$loading.start();

   await this.$store.dispatch('nav/fetchData');

   this.$nuxt.$loading.finish();
 },
}

</script>
<style>
</style>
