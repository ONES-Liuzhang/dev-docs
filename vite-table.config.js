const { defineConfig } = require("vite");
const postcss = require("rollup-plugin-postcss");

module.exports = defineConfig({
  plugins: [
    postcss({
      extensions: [".css"],
      inject: {
        insertAt: "top",
      },
    }),
  ],
});
