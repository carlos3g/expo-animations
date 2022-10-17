import 'dotenv/config';

export default {
  expo: {
    name: 'expo-animations',
    slug: 'expo-animations',
    version: '1.0.0',
    githubUrl: 'https://github.com/carlos3g/expo-starter',
    orientation: 'portrait',
    icon: './src/assets/images/icon.png',
    backgroundColor: '#ededf1',
    userInterfaceStyle: 'light',
    primaryColor: '#5c6cfc',
    splash: {
      image: './src/assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ededf1',
    },
    updates: {
      enabled: false,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/images/adaptive-icon.png',
        backgroundColor: '#ededf1',
      },
    },
    androidStatusBar: {
      barStyle: 'dark-content',
    },
    androidNavigationBar: {
      barStyle: 'dark-content',
      backgroundColor: '#ededf1',
    },
    web: {
      favicon: './src/assets/images/favicon.png',
    },
    extra: {
      PEXELS_API_KEY: process.env.PEXELS_API_KEY,
    },
  },
};
