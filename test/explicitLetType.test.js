// we import the check-before-type-validation ESLint rule
const rule = require("../rules/explicitLetType.js")
const RuleTester = require("eslint").RuleTester

const ruleTester = new RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
})

// Here we pass the 'missing' messageId since it is the error we expect to be reported by the rule
const errors = [{ messageId: "missing" }]

// Our test run with all the different test cases
ruleTester.run("explicit-let-type", rule, {
  valid: ["const a = 1", "let a: number = 1"],
  invalid: [
    {
      code: "let a; a = 1",
      errors,
    },
    {
      code: "let a",
      errors,
    },
  ],
})
