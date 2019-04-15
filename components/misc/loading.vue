<template>
  <div v-if="loading" class="loading-page">
    <img src="/load_2.gif" alt="">
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-page {
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

</style>
