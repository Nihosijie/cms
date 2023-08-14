<template>
  <div class="login-pannel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <el-icon><i-ep-user /></el-icon>
          <span>账号密码登录</span>
        </template>
        <login-account />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <el-icon><i-ep-message /></el-icon>
          <span>短信登录</span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
</script>

<style scoped lang="less">
.login-pannel {
  width: 330px;
  margin-bottom: 160px;
}
</style>
