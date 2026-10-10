# 来源与许可 / Attribution

本公开原型的 HTML、CSS、JavaScript 与文档为独立编写的 CYBONE 公开设计实现，按根目录 MIT License 分发。界面延续 CYBONE 的炭黑、薄荷绿与本地记录设计语言。字体使用系统字体，不附带字体文件。示例数据为虚构数据。

## 产品技术来源

CYBONE 产品使用以下技术基础，谨向上游贡献者致谢：

- DeepSeek Harness（DSH）：<https://github.com/deepseek-ai/deepseek-harness>
- DeepCode（dsh-mobile-apk）及相关组件：<https://github.com/kelai141/dsh-mobile-apk>

这些链接说明产品来源；本公开原型不包含这些项目的代码或二进制，不需要启动它们即可运行。上游项目各自的许可由各自仓库与实际使用版本的许可文件决定，本仓库的 MIT License 不对上游作品重新授权。

CYBONE 是独立项目，不代表上游官方产品或官方背书。

## 构建工具

原型无第三方 JavaScript 运行依赖。Node.js 作为外部开发工具使用，不随此仓库分发。GitHub Actions 使用 actions/checkout、actions/setup-node、actions/upload-artifact 的公开工作流动作，动作本体不随此仓库分发。

添加第三方代码、素材或运行时的贡献必须同时提供对应来源、许可证及必要版权声明。
