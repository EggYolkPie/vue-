import {
  DIC
} from '@/const/dic'

export default {
  dicData: DIC,
  submitText: '完成',
  labelWidth: 120,
  column: [
    {
      label: "存储位置名称",
      prop: "dbSourceName",
      rules: [{
        required: true,
        message: "请输入存储位置名称",
        trigger: "blur"
      }],
    },
    {
      label: "IP",
      prop: "hostName",
      rules: [{
        required: true,
        message: "请输入IP",
        trigger: "blur"
      }],
    },
    {
      label: "端口",
      prop: "serverPort",
      rules: [{
        required: true,
        message: "请输入端口",
        trigger: "blur"
      }],
    },
    {
      label: "用户名",
      prop: "userName",
      rules: [{
        required: true,
        message: "请输入用户名",
        trigger: "blur"
      }],
    },
    {
      label: "密码",
      prop: "passwd",
      rules: [{
        required: true,
        message: "请输入密码",
        trigger: "blur"
      }],
    },
    {
      label: "存储路径",
      prop: "localPath",
      rules: [{
        required: true,
        message: "请输入存储路径",
        trigger: "blur"
      }],
    }

  ]
};
