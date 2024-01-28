module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'react-native-reanimated/plugin',
        {
          relativeSourceLocation: true,
        },
      ],
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@hooks': './src/hooks',
            '@types': './src/types',
            '@templates': './src/templates',
            '@images': './src/images',
            '@stores': './src/stores',
            '@services': './src/services',
          },
        },
      ],
      'nativewind/babel',
      'expo-router/babel',
    ],
  };
};
