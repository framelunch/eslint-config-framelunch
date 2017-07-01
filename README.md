# FRAME LUNCH ESLint config

フレームランチのESLint設定(基本)

## 依存

- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype)
- [eslint-plugin-flowtype-errors](https://github.com/amilajack/eslint-plugin-flowtype-errors)

## 使い方

### インストール

```bash
yarn add -D git+https://github.com/framelunch/eslint-config-framelunch
```

### .eslintrc

```json
{
  "extends": ["framelunch"]
}
```

拡張したいならこんな感じで

```json
{
  "extends": ["framelunch"],
  "rules": {
    "no-alert": "off"
  }
}
```

## こんなにスッキリ

```diff
// package.json

-    "eslint": "^3.19.0",
-    "eslint-config-airbnb": "^15.0.1",
-    "eslint-plugin-import": "^2.2.0",
-    "eslint-plugin-jsx-a11y": "^5.0.3",
-    "eslint-plugin-react": "^7.0.1",
+    "eslint-config-framelunch": "git+https://github.com/framelunch/eslint-config-framelunch",
```
