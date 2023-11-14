module.exports = {
    entry: './src/index.tsx', 
    mode: 'development',
    module: {
    rules: [
        {
          test: /\.(ts|tsx)$/,
          use: ['style-loader', 'css-loader'],
          exclude: /node_modules/,
        },
    ],
},
resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
},
  };
  