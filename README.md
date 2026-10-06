# AI译镜静态官网

独立静态站点，源码位于 `dist/`，无框架、无运行时依赖，不改动现有客户端和后端。直接打开 `dist/index.html` 即可浏览；部署时上传整个 `dist` 目录。

## 本地预览

在此目录执行 `python -m http.server 4173 --directory dist`，访问 `http://localhost:4173`。也可以使用任意静态服务器。

## 上线前配置

编辑 `dist/config.js`：

- `windowsDownloadUrl`：Windows 安装包 HTTP(S) 地址。
- `macDownloadUrl`：macOS 安装包 HTTP(S) 地址。
- `contactEmail`：官方联系邮箱。
- `contactUrl`：客服或联系页面 HTTP(S) 地址，设置后优先于邮箱。
- `contactLabel`：联系链接显示文字。

未提供正式链接时，页面如实显示即将开放，不会创建虚假下载或提交成功提示。注册赠送额度为展示文案，注册与额度发放由现有客户端和后端负责。本次未调整后端赠送额度逻辑。

界面中的聊天内容为排版演示，并非真实客户数据。聊天平台仍处于内测适配阶段，不宣称所有平台已完成兼容验证。品牌及平台名仅用于说明使用场景。

`dist/styles.css` 包含桌面和手机布局；`dist/app.js` 负责移动导航、年份、下载及联系配置；无需构建即可托管。

## SEO 与搜索引擎收录

站点已经提供以下搜索引擎入口：

- `https://www.yijingtrans.com/robots.txt`
- `https://www.yijingtrans.com/sitemap.xml`
- 首页、网页翻译页和企业出海页各自独立的标题、描述和 canonical 地址。
- Organization、WebSite、SoftwareApplication、FAQPage 等 JSON-LD 结构化数据。

发布后，在 Google Search Console 和 Bing Webmaster Tools 中验证 `www.yijingtrans.com`，然后提交 `https://www.yijingtrans.com/sitemap.xml`。站点内容发生较大变化时，更新 `sitemap.xml` 的 `lastmod` 日期并重新部署。

GitHub Pages 如果从仓库根目录发布，根目录文件会直接生效；如果从其他托管服务发布，则上传完整的 `dist/`。两处文件应始终保持同步。
