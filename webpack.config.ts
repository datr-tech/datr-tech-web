import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';

const config = {
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
    hot: true,
  },
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
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
