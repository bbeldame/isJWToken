# is-jwtoken

> Simple regex tester for jwtoken

## Install

```
$ npm install is-jwtoken
```

## Usage

```js
const numIsFinite = require('is-jwtoken');

isJWToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0Ijo0NjU0NjQ0NjU0NH0.JG9ys4Rr4CT3RKZwO3OIwYrWf3aY5Z4B9RKIE7j83n4");
// => true

isJWToken("eyJ0ZWFzZXIiOnRydWUsImRpYWxvZyI6ZmFsc2UsInNpZGViYXIiOm51bGwsInNpZGViYXJDb250YWluZXJTdHlsZSI6e319");
// => false

isJWToken("anything but a jwtoken"):
// => false
```

## Caution

To be used with the [jwtoken library](https://www.npmjs.com/package/jsonwebtoken) if you want to verify that the token is valid. This lib only test it via regex.
