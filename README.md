# dev docs for ONES Design V2

依赖版本：

- vite v4
- storybook v6

首次启动时，浏览器加载组件可能比较慢，因为开发环境下不会进行小包合并，浏览器会一次性发送大量请求

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

感觉这个可能是 storybook 的锅，看起来应该是路径处理的问题，issue 地址：<https://github.com/vitejs/vite/issues/9986>

解决办法：删除 `node_modules/.cache` 和 `node_modules/.vite-storybook`，然后重启服务

2. 错误 2，运行时错误，在加载 tree 组件时会报错
  ReferenceError: React is not defined at suffix

  产物中已经自动补充了 React，应该是 mdx 里的 args 参数中带了 Jsx 语法导致的问题，临时解决可以在顶部添加 React 导入

  ```js
    import __vite__cjsImport2_react from "/node_modules/.vite-storybook/deps/react.js?v=6afbfaf7";
    const useState = __vite__cjsImport2_react["useState"];
    const useCallback = __vite__cjsImport2_react["useCallback"];
    const useMemo = __vite__cjsImport2_react["useMemo"];
  ```

  解决方式：

  ```jsx
  // tree.stories.mdx
  import React from 'react'
  ```
