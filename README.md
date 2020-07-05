# eslint-config-daneden

Additional rules for ESLint based on my personal preferences.

## Installation

1. Install with `yarn add -D eslint-config-daneden`
2. Add to `.eslintrc` configs:

```json
{
  ...
  "extends": [
    "daneden",
  ]
}
```

3. Enable specific rules:

```json
{
  ...
  "rules": {
    "daneden/no-inferred-let": "warn",
  }
}
```

## Rules

### `explicit-let-type`

Checks that `let` and `var` constants without an initialised value have an explicit type
