<template>
  <div class="login-iphone-contianer">
    <el-form
      ref="formRef"
      :model="iphoneAccount"
      label-width="70px"
      :rules="iphoneRules"
    >
      <el-form-item
        label="手机号"
        prop="iphone"
        placeholder="请输入手机号"
      >
        <el-input
          v-model.number="iphoneAccount.iphone"
          type="text"
          autocomplete="off"
          placeholder="请输入手机号"
        />
      </el-form-item>
      <el-form-item
        label="验证码"
        prop="code"
        class="code-container"
      >
        <el-input
          v-model.number="iphoneAccount.code"
          type="text"
          autocomplete="off"
          placeholder="请输入验证码"
        />
        <el-button type="primary">
          验证码
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { iphoneRules } from './rules';

const iphoneAccount = ref({
  iphone: '',
  code: '',
});
</script>

<style scoped lang="less">
.login-iphone-contianer {
	.code-container .el-form-item__content {
		display: flex;

		.el-input {
			flex: 1;
			margin-right: 10px;
		}
	}
}
</style>
