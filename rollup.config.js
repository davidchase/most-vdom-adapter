import buble from 'rollup-plugin-buble';

export default {
  entry: 'src/index.js',
  format: 'umd',
  plugins: [ buble() ],
  globals: {
    most: 'most'
  }
};
