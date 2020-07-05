# eslint-plugin-daneden

Additional rules for ESLint based on my personal preferences.

## Installation

1. Install with `yarn add -D eslint-config-daneden`
2. Add to `.eslintrc` configs:

```json
{
  ...
  "plugins": [
    "daneden",
  ]
}
```

3. Enable specific rules:

```json
{
  ...
  "rules": {
    "daneden/explicit-let-type": "warn",
  }
}
```

## Rules

### `explicit-let-type`

Checks that `let` and `var` constants without an initialised value have an explicit type

```tsx
const a = 1 // Passes
let b: number = 1 // Passes
let c = 1 // Passes
let d: number // Passes
d = 1

let e // Fails
```
