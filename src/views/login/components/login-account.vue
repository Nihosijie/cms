<template>
  <div class="login-account">
    <el-form
      :model="account"
      :rules="rules"
      ref="formRef"
      label-width="80px"
      label-position="right"
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="account.name" placeholder="请输入用户名" clearable />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="account.password"
          type="password"
          placeholder="请输入密码"
          show-password
          clearable
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { ElForm } from 'element-plus'

import { rules } from '../config/account-config'

const account = reactive({
  name: '',
  password: '',
})

const formRef = ref<InstanceType<typeof ElForm>>()
</script>

<style scoped lang="less"></style>
