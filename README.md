# Learning Jest

This repository is dedicated to learning and experimenting with Jest, a delightful JavaScript Testing Framework with a focus on simplicity. It aims to provide examples and practices for writing tests using Jest.

## Introduction

Jest is a powerful testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly. Jest is well-documented, requires little configuration and can be extended to match your requirements.

## Writing Tests

Tests are written in the `*.test.js` files next to the code they are testing. For example, if you have a function in `sum.js` that adds two numbers, you would create a file named `sum.test.js` for the test.

Here's a simple test for a hypothetical `sum` function:

```javascript
// sum.test.js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

## Running Tests
To run your tests, add the following section to your package.json:

"scripts": {
  "test": "jest"
}

## Learning Resources

For more detailed information on getting started with Jest, writing tests, and configuring Jest, visit the [Jest Getting Started Guide](https://jestjs.io/docs/getting-started).