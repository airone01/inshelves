module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  ignorePatterns: ['src-tauri/target/**/*.js', 'src-tauri/WixTools/**/*.js', '.output/**/*.js'],
  plugins: [],
  // add your custom rules here
  rules: {},
}
