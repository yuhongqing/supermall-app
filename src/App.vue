<template >
  <div id="app">
    <router-view/>
    <!-- <FooterGuide v-show="$route.meta.showFooter"/> -->
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
// import {reqFoodTypes} from './api'
export default {

   mounted () {
   this.$store.dispatch('getAddress')
  },
  
  components: {
    FooterGuide
 }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

  #app{
    width:100%
    height:100%
    color:#f5f5f5
  }
</style>
