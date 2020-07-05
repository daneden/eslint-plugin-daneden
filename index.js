const reqAll = require("req-all")

module.exports = {
  rules: reqAll("rules", { camelize: false }),
  configs: {
    recommended: {
      env: {
        es6: true,
      },
      parserOptions: {
        ecmaVersion: 2016,
        sourceType: "module",
      },
      rules: {
        "explicit-let-type": "error",
      },
    },
  },
}
