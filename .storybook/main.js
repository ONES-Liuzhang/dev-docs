const { mergeConfig } = require("vite");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  core: {
    builder: "@storybook/builder-vite",
  },
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: "@storybook/react",
  async viteFinal(config) {
    const tableViteConfig = await import('../vite-table.config.js')

    return mergeConfig(config, {
      ...tableViteConfig,
      resolve: {
        alias: {
          "@ones-design/table": "/Users/liuzhang/workspace/ones/ones-design/packages/table/src/scripts/index.ts",
        },
      },
    });
  },
};
