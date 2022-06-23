<template>
  <div c>
    <el-form
      ref="formRef"
      :model="account"
      label-width="70px"
      :rules="accountRules"
    >
      <el-form-item
        label="账号"
        prop="username"
      >
        <el-input
          v-model.number="account.username"
          type="text"
          autocomplete="off"
          placeholder="请输入账号"
        />
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
      >
        <el-input
          v-model.number="account.password"
          autocomplete="off"
          type="password"
          placeholder="请输入密码"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ElForm } from 'element-plus';
import { ref } from 'vue';
import { accountRules } from './rules';

const account = ref({
  username: '',
  password: '',
});

const formRef = ref<InstanceType<typeof ElForm>>();

const loginAccount = () => {
  formRef.value?.validate((isValid) => {
    if (!isValid) return;
    console.log(account.value);
  });
};
defineExpose({
  loginAccount,
});
</script>

<style lang="scss" scoped></style>
