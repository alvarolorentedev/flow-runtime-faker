# ![logo](https://user-images.githubusercontent.com/3071208/48891796-a7796780-ee3c-11e8-93a0-69b06f1a1198.png)
[![Build Status](https://travis-ci.org/kanekotic/flow-runtime-faker.svg?branch=master)](https://travis-ci.org/kanekotic/flow-runtime-faker)
[![Coverage Status](https://coveralls.io/repos/github/kanekotic/flow-runtime-faker/badge.svg?branch=master)](https://coveralls.io/github/kanekotic/flow-runtime-faker?branch=master)
[![npm](https://img.shields.io/npm/dy/flow-runtime-faker.svg)](https://github.com/kanekotic/flow-runtime-faker)
[![GitHub license](https://img.shields.io/github/license/kanekotic/flow-runtime-faker.svg)](https://github.com/kanekotic/flow-runtime-faker/blob/master/LICENSE)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/kanekotic/flow-runtime-faker/graphs/commit-activity)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/kanekotic/)
## Motivation 

Type definitions in javascript can help adding type safety for classes. But should not make more complicated property based testing. This package aims to generate random objects based on their flow definitions 

## Installation

`yarn add flow-runtime-faker -D` or `npm install flow-runtime-faker --save-dev`

if you use only `flow` and not `flow-runtime`. You can use this plugin by:
 - `yarn add flow-runtime babel-plugin-flow-runtime -D` or `npm install flow-runtime babel-plugin-flow-runtime --save-dev`
 - add the next configuration for tests phase on your `.babelrc`
 
 ```json
    {
    ...
     "env": {
        "test": {
            "plugins": [["flow-runtime", { "assert": false, "annotate": false }]]
        }
      }
    }
 ```

## Usage

```js
import faker from 'flow-runtime-faker'

type otherType {
    fuz: 42 | 7 | 32 | "Some" | "Some Other" | false
}

type myType = {
    foo: number,
    bar: number[],
    daz: string,
    don: otherType
}

let value = fake(test)

console.log(value)
/*
type myType = {
    foo: 10,
    bar: [1,6.40],
    daz: "something",
    don: {
        fuz: 42
    }
}
*/
```

## Support

| Done? | Flow Type          |
|-------|--------------------|
|   ✅  | number             |
|   ✅  | string             |
|   ✅  | boolean            |
|   ✅  | null               |
|   ✅  | void               |
|   ✅  | numeric literals   |
|   ✅  | string literals    |
|   ✅  | boolean literals   |
|   ✅  | union              |
|   ✅  | maybe              |
|   ✅  | optional           |
|   ✅  | arrays             |
|   ✅  | subtypes           |
|   ✅  | function           |