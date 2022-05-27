const TerserPlugin = require("terser-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);
const host = process.env.VUE_APP_BASE_HOST;
const port = process.env.VUE_APP_BASE_PORT;

module.exports = {
  devServer: {
    port: Number(port) /*|| 3000*/,
    proxy: {
      "/api": {
        target: host /*|| "http://192.168.20.110:8080/"*/,
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
        secure: false,
      },
    },
  },
  lintOnSave: false,
  chainWebpack: config => {
    config.plugin("loadshReplace").use(new LodashModuleReplacementPlugin());

    config.resolve.alias
      .set("@", resolve("src"))
      .set("@lib", resolve("src/lib"))
      .set("@utils", resolve("src/utils"))
      .set("@store", resolve("src/store"))
      .set("@views", resolve("src/views"))
      .set("@assets", resolve("src/assets"))
      .set("@router", resolve("src/router"))
      .set("@components", resolve("src/components"));
  },
  configureWebpack: () => {
    // eslint-disable-line
    if (process.env.NODE_ENV === "production") {
      return {
        optimization: {
          minimizer: [
            new TerserPlugin({
              sourceMap: false,
              terserOptions: {
                compress: {
                  drop_console: true,
                },
              },
            }),
          ],
        },
        plugins: [
          new FileManagerPlugin({
            events: {
              onEnd: {
                archive: [
                  {
                    source: "./dist",
                    destination: `./dist/otn.dist.${Date.now()}.zip`,
                  },
                ],
              },
            },
          }),
        ],
      };
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/_var.scss";`,
      },
    },
  },
};
