module.exports = {
  expo: {
    name: "ALM - Controle",
    slug: "ALM - Controle",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/pwa-512x512.png",
    userInterfaceStyle: "light",
  },
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#f2621a",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/pwa-512x512.png",
      backgroundColor: "#f2621a",
    },
  },
  web: {
    favicon: "./assets/favicon.png",
    backgroundColor: "#f2621a",
    primaryColor: "#f2621a",
  },
  extra: {
    wssUrl: process.env.WSS_URL,
  },
};
