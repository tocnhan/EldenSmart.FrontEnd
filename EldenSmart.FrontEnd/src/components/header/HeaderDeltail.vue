<script setup>
import HelloWorld from '../HelloWorld.vue';
import NavbarDeltail from '../navbar/NavbarDeltail.vue';
</script>

<template>
    <NavbarDeltail />
    <h1>HEADER</h1>
    
      <HelloWorld msg="You did it!" />  
    
    <div class="logo">MyApp</div>
    
</template>

<script>
    export default {
    name: 'HeaderDeltail',
    };
</script>

<style scoped>
.logo {
  float: left;
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
}
</style>