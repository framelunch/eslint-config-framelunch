// TODO: http://qiita.com/zaki-yama/items/3567b316f0fb62986809#eslint-plugin-flowtype-%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB

module.exports = {
  extends: [
    'airbnb',
    'plugin:flowtype/recommended'
  ],

  env: {
    browser: true,
    node: true,
    es6: true
  },

  plugins: [
    'flowtype',
    'flowtype-errors'
  ],

  parser: 'babel-eslint',

  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  },

  globals: {
    browser: true
  },

  rules: {
    /*
     * common
     */
    'no-param-reassign': 'off',    // 同じ関数内で戻り値を返すreturnと返さないreturnがあったら怒る 無効化 serverで困る
    'one-var': 'off',              // 1行につき1宣言 無効化 FLの流儀と合わない
    eqeqeq: ['error', 'always'],   // 比較演算子はすべて===か!==
    "no-duplicate-imports": 'off', // importの重複を不許可 無効化 flowtypeのimport typeと相性が悪い

    /*
     * React
     */
    "react/sort-comp": 'off',     // reactコンポーネントのメソッド順を強制 無効化 flowtypeと相性が悪い
    "react/no-multi-comp": 'off'  // 1ファイルに複数のコンポーネントを定義させない 無効化 やりたいこともある
  }
};
