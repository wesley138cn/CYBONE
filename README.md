# CYBONE

**个人数字分身 · Personal Digital Counterpart**

将日常通知、个人会话、记忆、健康与餐饮记录组织在一起，让个人信息更容易回顾，让交互更贴近日常生活。

[在线体验](https://wesley138cn.github.io/CYBONE/) · [English](README.en.md) · [设计说明](docs/DESIGN.md) · [功能与演示边界](docs/CAPABILITIES.md) · [来源与许可](NOTICE.md)

## 这个仓库提供什么

这里公开 CYBONE 的部分交互原型、设计组件与设计说明。你可以运行和修改完整的公开原型，体验 TODAY、WITH、记忆、健康和餐饮五个页面。

产品能力介绍与本仓库可运行内容分别说明：原型采用虚构数据，WITH 回复由固定规则生成。它不是完整产品源码或可安装的手机应用。

## 快速开始

需要 Node.js 22 或更新版本。原型使用原生 HTML、CSS 和 JavaScript，无第三方运行依赖，无需 npm install。

```sh
git clone https://github.com/wesley138cn/CYBONE.git
cd CYBONE
npm run check
npm start
```

打开 <http://127.0.0.1:4175>。`npm run check` 执行语法检查、状态测试并生成 `dist/`；也可单独执行 `npm run build`。`dist/` 可部署到任何静态网站服务。自定义本地端口：`PORT=4180 npm start`。

## 通知与本地记录

CYBONE 的产品设计围绕 Android 通知收集，以及通过蓝牙 ANCS 接收已配对 iPhone 授权共享的通知，并将记录保存到运行 CYBONE 的 Android 设备本地。

Android 端需要用户授予通知访问权限；iPhone 端需要配对并开启共享系统通知。通知可见范围受系统设置与连接状态影响，断连期间的通知不保证补齐。

公开原型提供按来源筛选与原文查看，使用固定虚构通知，不读取真实通知。

## WITH：个人 Agent

公开设计聚焦会话与记忆：会话保留交流过程，记忆通过明确的确认、编辑和删除操作进行管理。

在演示里，问“我的记忆”可以看到已确认的示例偏好，问“餐饮记录”可以看到当前记录汇总。聊天不会自动成为记忆，回复不会调用外部模型。

## 健康与餐饮

健康页面展示步数、睡眠、静息心率和七日趋势的设计组件，数值全部虚构。餐饮页面支持手动记录餐次、名称、热量与删除记录，并汇总当前记录的热量。

餐食照片可在本页选择并预览，不上传、不持久保存，也不进行识别。演示中的热量由用户手动输入，不是模型估算。健康与热量信息用于日常记录参考，不用于医疗诊断。

## 数据与隐私

- 示例和新增文字记录只保存在当前浏览器的 `localStorage` 中，未加密，请勿输入敏感信息。
- “关于”提供导出和重置。清除浏览器网站数据也会删除保存的演示记录。
- 浏览器存储不可用时，演示回退到当前页面内存，并显示提示。
- 原型不上传数据、不调用模型、不包含遥测。打开外部文档链接会访问对应网站。
- 产品本地保存描述的是存储位置；若使用外部模型服务，相关输入可能发送至所配置的服务。本地保存不等于所有 AI 处理均离线完成。

## 技术基础与致谢

CYBONE 产品的 Agent 运行能力基于 [DeepSeek Harness（DSH）](https://github.com/deepseek-ai/deepseek-harness)，Android 运行基础使用了 [DeepCode（dsh-mobile-apk）](https://github.com/kelai141/dsh-mobile-apk) 及相关组件。

本仓库的公开原型独立运行，不包含或分发上述运行时及其源码。CYBONE 是独立项目，与上述上游项目不存在官方隶属或背书关系。详见 [NOTICE.md](NOTICE.md)。

## 许可与贡献

本仓库原创代码及文档采用 [MIT License](LICENSE)。CYBONE 名称与标识的使用见 [BRAND.md](BRAND.md)。欢迎通过 Issue 提交设计反馈或通过 Pull Request 改善公开组件；请使用虚构示例，参见 [贡献指南](CONTRIBUTING.md)。
