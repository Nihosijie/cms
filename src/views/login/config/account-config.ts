export const rules = {
  name: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur',
    },
    {
      pattern: /^[a-zA-Z0-9]{6,10}$/,
      message: '用户名必须由6~10个大小写字母或数字组成',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
    {
      pattern: /^[0-9a-zA-Z]{6,16}$/,
      message: '密码必须由8-16个大小写字母或数字组成',
      trigger: 'blur',
    },
  ],
}
