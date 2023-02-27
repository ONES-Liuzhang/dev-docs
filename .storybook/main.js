const { mergeConfig } = require("vite");
const path = require("path");
const fs = require("fs");
const MODIFY_VARS = require("./modify-vars");

if (!fs.existsSync(path.resolve(__dirname, "../dev-docs.config.js"))) {
  console.error("请先阅读 README.md，在根目录下创建 dev-docs.config.js 文件，并导出 projectPath 字段");
  process.exit(1);
}

const ROOT_PATH = path.resolve(process.cwd(), require("../dev-docs.config").projectPath);

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)", `${ROOT_PATH}/stories/**/*.stories.mdx`],
  features: {
    storyStoreV7: true,
    buildStoriesJson: true,
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        viewport: false,
      },
    },
    "@storybook/addon-interactions",
    "@etchteam/storybook-addon-status",
    "@storybook/addon-links",
  ],
  framework: "@storybook/react",
  async viteFinal(config) {
    return mergeConfig(config, {
      css: {
        preprocessorOptions: {
          less: {
            javascriptEnabled: true,
            modifyVars: MODIFY_VARS,
          },
        },
        postcss: {
          plugins: [
            require("postcss-import"),
            require("postcss-custom-selectors"),
            require("postcss-nested"),
            require("autoprefixer"),
            require("cssnano")({
              preset: [
                "default",
                {
                  mergeLonghand: false,
                  mergeRules: false, // 合并不支持的选择器的规则会导致支持的也不可用
                },
              ],
            }),
          ],
        },
      },
      resolve: {
        alias: {
          "@ones-design/table": `${ROOT_PATH}/packages/table/src/scripts/index.ts`,
          "@ones-design/core": `${ROOT_PATH}/packages/core/src/scripts/index.ts`,
          "@ones-design/icons": `${ROOT_PATH}/packages/icons/src/components/index.tsx`,
          "@ones-design/locale": `${ROOT_PATH}/packages/locale`,
        },
      },
      server: {
        fs: {
          // Allow serving files from one level up to the project root
          allow: [".."],
        },
      },
      optimizeDeps: {
        include: [
          "dayjs",
          "@storybook/addon-links/react",
          "@storybook/react",
          "storybook-design-token",
          "@storybook/addon-links",
          "@storybook/react/dist/esm/client/docs/config",
          "@storybook/react/dist/esm/client/preview/config",
          "@storybook/addon-docs/preview.js",
          "@storybook/addon-actions/preview.js",
          "@storybook/addon-backgrounds/preview.js",
          "@storybook/addon-measure/preview.js",
          "@storybook/addon-outline/preview.js",
          "@storybook/addon-interactions/preview.js",
          "@storybook/addon-links/preview.js",
        ],
      },
    });
  },
};
