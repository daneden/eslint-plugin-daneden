const reqAll = require("import-modules")

module.exports = {
  rules: reqAll("rules", { camelize: false }),
}
