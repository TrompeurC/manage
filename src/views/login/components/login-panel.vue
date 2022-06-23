<template>
  <div class="login-panel-container">
    <h2 class="login-title">
      后台管理系统
    </h2>
    <el-tabs
      type="border-card"
      stretch
      v-model="activeTab"
    >
      <el-tab-pane name="user">
        <template #label>
          <span>
            <el-icon><user-filled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-user ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="iphone">
        <template #label>
          <span>
            <el-icon><iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-iphone />
      </el-tab-pane>
    </el-tabs>
    <div class="login-footer">
      <div class="login-options">
        <el-checkbox v-model="isKeepPassword">
          记住密码
        </el-checkbox>
        <el-button
          type="primary"
          link
        >
          忘记密码
        </el-button>
      </div>
      <el-button
        class="login-button"
        type="primary"
        @click="login"
      >
        登陆
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { UserFilled, Iphone } from '@element-plus/icons-vue';
import LoginUser from './login-user.vue';
import LoginIphone from './login-iphone.vue';
import { ElMessage } from 'element-plus';

const activeTab = ref('user');
const accountRef = ref<InstanceType<typeof LoginUser>>();
const isKeepPassword = ref(true);

const login = () => {
  if (activeTab.value === 'user') {
    accountRef.value?.loginAccount();
  } else {
    ElMessage.info('暂时还未开放手机登录!');
  }
};
</script>

<style scoped lang="less">
.login-panel-container {
  width: 350px;

  .login-title {
    text-align: center;
  }

  .login-footer {
    .login-options {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }
  }
  .login-button {
    width: 100%;
  }
}
</style>
