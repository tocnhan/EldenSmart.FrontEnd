<script setup>
// import { mixinGlobal } from '@/mixins/global.js';


// import TheWelcome from './components/TheWelcome.vue'
import LoginDeltail from './views/Login/LoginDeltail.vue';
import FooterDeltail from './components/footer/FooterDeltail.vue';
import HeaderDeltail from './components/header/HeaderDeltail.vue';
</script>

<template>
  <a-layout>
    <!-- header -->
    <a-layout-header style="background: #7dbcea; color: white; text-align: center;">
     <HeaderDeltail />
    </a-layout-header>

    <!-- main -->
    <a-layout-content style="min-height: 280px; padding: 24px;">
      <LoginDeltail />
    </a-layout-content>

    <!-- footer -->
     <a-layout-footer style="text-align: center;">
      <FooterDeltail></FooterDeltail>
    </a-layout-footer>
  
  
  </a-layout>
  
</template>

<script>
export default {
    // mixins: [mixinGlobal],
  }
</script>

<style scoped>

</style>
