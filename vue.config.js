module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/styles/_variables.scss";`
        }
      }
    },
    pwa: {
      manifestOptions: {
        name: "uocify",
        short_name: "uocify",
        display: "standalone",
        theme_color: "#F7F7F8",
        icons: [
          {
            src: "./img/icons/icon.png",
            sizes: "500x500",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      themeColor: "#F7F7F8",
      msTileColor: "#FFFFFF",
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'white',
      iconPaths: {
        maskicon: null,
        favicon32: "./img/icons/favicon-32x32.png",
        favicon16: "./img/icons/favicon-16x16.png",
        appleTouchIcon: null,
        msTileImage: null,
      },
      // configure the workbox plugin
      workboxPluginMode: 'GenerateSW'
    }
};