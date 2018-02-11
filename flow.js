module.exports = {
  extends: [
    './index.js',
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

