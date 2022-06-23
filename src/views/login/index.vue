<template>
  <div class="login-container">
    <login-panel />
  </div>
</template>

<script setup lang="ts">
import loginPanel from './components/login-panel.vue';
</script>

<style scoped lang="less">
.login-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	background: url("@/assets/img/login-bg.svg");
	object-fit: fill;
}
</style>
