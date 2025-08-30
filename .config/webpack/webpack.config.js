// webpack.config.js

const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production', // Режим сборки
  entry: './src/module.ts', // Точка входа
  cache: false, // Отключаем кэширование
  devtool: 'source-map', // Генерация source maps
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Обработка TypeScript файлов
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: false, // Включаем проверку типов
            compilerOptions: {
              jsx: 'react-jsx', // Настройка JSX
            },
          },
        },
        exclude: /node_modules/, // Исключаем node_modules
      },
      {
        test: /\.jsx?$/, // Обработка JavaScript/JSX файлов
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }], // Поддержка современных браузеров
              ['@babel/preset-react', { runtime: 'automatic' }], // Поддержка React
              '@babel/preset-typescript', // Поддержка TypeScript
            ],
            sourceMaps: true, // Явно включаем source maps для Babel
          },
        },
        exclude: /node_modules/, // Исключаем node_modules
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'], // Расширения для разрешения модулей
  },
  output: {
    path: path.resolve(__dirname, '../../dist'), // Выходная директория
    filename: 'module.js', // Имя выходного файла
    libraryTarget: 'amd', // Целевой формат библиотеки
    devtoolModuleFilenameTemplate: 'webpack:///[namespace]/[resource-path]', // Корректные относительные пути
  },
  externals: {
    // Внешние зависимости
    'react': 'react',
    'react-dom': 'react-dom',
    '@grafana/data': '@grafana/data',
    '@grafana/ui': '@grafana/ui',
    '@grafana/runtime': '@grafana/runtime',
  },
  optimization: {
    minimize: true, // Минификация
    minimizer: [
      new TerserPlugin({
        extractComments: false, // Не создавать .LICENSE.txt
        terserOptions: {
          keep_fnames: true, // Сохраняем имена функций
          keep_classnames: true, // Сохраняем имена классов
          format: {
            comments: false, // Удаляем комментарии
          },
        },
      }),
    ],
  },
  performance: {
    hints: false, // Отключаем предупреждения о больших файлах
  },
};