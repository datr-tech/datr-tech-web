import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
  entry: './src/index.tsx',
  mode: 'production',
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: 'public' }],
    }),
  ],
  resolve: {
    alias: {
      '@app-dtw': path.resolve(__dirname, 'src'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
};

export default config;
