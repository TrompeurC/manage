import { FormRules } from 'element-plus';

export const accountRules: FormRules = {
  username: [
    {
      required: true,
      message: '请输入账号!',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码!',
    },
    {
      validator(rule, value, callback) {
        if (value.length < 6) {
          return callback(new Error('密码大于6位数'));
        }
        callback();
      },
    },
  ],
};

export const iphoneRules: FormRules = {
  iphone: [
    {
      required: true,
      message: '请输入正确的手机号',
    },
    {
      validator(rule, value, callback) {
        if (/^1[0-9]{10}$/.test(value)) callback();
        callback(new Error('请输入正确的手机号!'));
      },
    },
  ],
  code: [
    {
      required: true,
      message: '请输入验证码',
    },
  ],
};
