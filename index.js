module.exports = {
  extends: [
    'airbnb'
  ],

  env: {
    browser: true,
    node: true
  },

  globals: {
    browser: true
  },

  rules: {
    'no-param-reassign': 'off', // 同じ関数内で戻り値を返すreturnと返さないreturnがあったら怒る 無効化 serverで困る
    'one-var': 'off', // 1行につき1宣言 無効化 FLの流儀と合わない
    eqeqeq: ['error', 'always'] // 比較演算子はすべて===か!==
  }
};
