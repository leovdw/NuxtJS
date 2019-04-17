<template>
   <PageContent :slug="slug"/>
</template>
<script>
import PageContent from '~/components/pages/PageContent.vue'
import wp from '~/lib/wp'

export default {
  async asyncData ({ params, state }) { 
    return wp.slug( params.slug )
  },
  components: {
    PageContent
  }
}
</script>
