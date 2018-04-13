module.exports = {
  extends: [
    './index.js',
    'plugin:flowtype/recommended'
  ],

  plugins: [
    'flowtype',
    'flowtype-errors'
  ],

  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  },

  rules: {
  }
};

