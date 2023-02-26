const { mergeConfig } = require("vite");
const path = require("path");
const MODIFY_VARS = require("./modify-vars");
const postcss = require("postcss");
const ROOT_PATH = path.resolve(
  process.cwd(),
  require("../dev-docs.config").projectPath
);

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    `${ROOT_PATH}/stories/**/*.stories.mdx`,
  ],
  features: {
    storyStoreV7: true,
    buildStoriesJson: true,
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
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
      },
      plugins: [
        ,
        postcss({
          extensions: [".css"],
          inject: {
            insertAt: "top",
          },
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
        }),
      ],
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
        include: ["dayjs", "@storybook/addon-links/react"],
      },
    });
  },
};
