<template>
  <a-layout-header>
    <div class="logo"><img alt="Vue logo" src="@/assets/logo.svg" /></div>
    <a-menu theme="dark" mode="horizontal" :default-selected-keys="['1']">
      <a-menu-item key="1">
        <router-link :to="'/'">Home</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link :to="'/login'">Login</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link :to="'/contact'">Contact</router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
export default {
  name: 'NavBar',
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
