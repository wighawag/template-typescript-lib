# template for typescript libraries (using bun)

## Getting Started

Click the [Use this template](https://github.com/wighawag/template-typescript-lib /generate) button to create a new repository using this template.

OR

Run `bun create wighawag/template-typescript-lib  <my-lib>`.

## Setup

```bash
# install dependencies
bun install

# run tests
bun test

# bundle the library (including type definitions)
bun run build
```

```bash
# bundle the library but without type definition (faster)
bun run build --no-dts
```
