<template>
  <el-form label-width="80px">
    <el-form-item label="手机号">
      <el-input v-model="phone.number" />
    </el-form-item>
    <el-form-item label="验证码">
      <div class="get-code">
        <el-input v-model="phone.code" />
        <el-button type="primary" class="get-btn">发送验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const phone = reactive({
  number: '',
  code: '',
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;
}

.get-btn {
  margin-left: 10px;
}
</style>
