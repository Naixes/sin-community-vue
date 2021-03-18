module.exports = {
  publicPath: process.env.NODE_ENV === 'prod' ? '/sin-community-vue-fe' : '',
  devServer: {
    proxy: 'http://localhost:3000',
  },
};
