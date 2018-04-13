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
    'arrow-parens': ['error', 'as-needed']
  }
};
