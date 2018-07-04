// TODO: http://qiita.com/zaki-yama/items/3567b316f0fb62986809#eslint-plugin-flowtype-%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB

module.exports = {
  extends: ['airbnb-base'],
  env: {
    browser: true,
    node: true,
    es6: true
  },

  parser: 'babel-eslint',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: false
  },

  globals: {
    browser: true
  },

  rules: {
    /*
     * common
     */
    'no-param-reassign': 'off',      // 同じ関数内で戻り値を返すreturnと返さないreturnがあったら怒る 無効化 serverで困る
    'one-var': 'off',                // 1行につき1宣言 無効化 FLの流儀と合わない
    eqeqeq: ['error', 'always'],     // 比較演算子はすべて===か!==
    'no-duplicate-imports': 'off',   // importの重複を不許可 無効化 flowtypeのimport typeと相性が悪い
    'class-methods-use-this': 'off', // classのメソッド内では必ずthisを使う 無効化
    'object-property-newline': 'off',
    'no-underscore-dangle': 'off',
    'max-len': ['error', 120, 2,
      {
        'ignoreUrls': true,
        'ignoreComments': true,
        'ignoreRegExpLiterals': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true
      }
    ],
    'no-unused-vars': ['warn', { caughtErrors: 'none', varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    'arrow-parens': ['error', 'as-needed'],
    'require-jsdoc': 'off',
    // 未使用変数 警告 ただし、先頭に_のついている変数、引数はOKとする
    'no-unused-vars': [
      'warn',
      {
        caughtErrors: 'all',
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_'
      }
    ],
    // thisを参照しないクラスメソッドはstaticでなければいけない 無効化 オブジェクト指向ってそういうもんではないと思う
    'class-methods-use-this': 'off',

    /*
     * import
     */
    // exportが1件だけならdefaultにする 無効化 気にしない
    'import/prefer-default-export': 'off',
    // package系、.js、.ts以外は拡張子を要求
    'import/extensions': ['error', 'never', {
      '.jsx': 'always',
      '.tsx': 'always',
      '.html': 'always',
      '.ejs': 'always',
      '.hbs': 'always',
      '.txt': 'always',
      '.csv': 'always',
      '.json': 'always',
      '.md': 'always',
      '.frag': 'always',
      '.ejs': 'always',
      '.svg': 'always',
      '.jpg': 'always',
      '.png': 'always',
      '.gif': 'always'
    }]
  }
};
