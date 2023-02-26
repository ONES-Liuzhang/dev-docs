# dev docs for ONES Design

依赖版本：

- vite v4
- storybook v6

## 配置

在项目根目录下新建文件 `dev-docs.config.js`

导出 `projectPath`，可以是相对路径也可以是绝对路径

```js
// dev-docs.config.js
module.exports = {
  // ONES Design 项目路径
  projectPath: "E:/workspace/ones/ones-design",
};
```

## 运行

```
npm i

npm run docs
```

## 常见错误

1. 错误 1：
   20:03:33 [vite] error while updating dependencies:
   Error: ENOENT: no such file or directory, rename 'E:\workspace\ones\dev-docs\node_modules\.vite-storybook\deps_temp' -> 'E:\workspace\ones\dev-docs\node_modules\.vite-storybook\deps'

感觉这个可能是 storybook 的锅，看起来应该是路径处理的问题，issue 地址：https://github.com/vitejs/vite/issues/9986

解决办法：删除 `node_modules/.cache` 和 `node_modules/.vite-storybook`，然后重启服务
