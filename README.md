# ![logo](https://user-images.githubusercontent.com/3071208/48891796-a7796780-ee3c-11e8-93a0-69b06f1a1198.png)

## Motivation 

Type definitions in javascript can help adding type safety for classes. But should not make more complicated property based testing. This package aims to generate random objects based on their flow definitions 

## Installation

`yarn add flow-runtime-faker -D` or `npm install flow-runtime-faker --save-dev`

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

| Done? | Flow Type    |
|-------|--------------|
|   ✅  | number       |
|   ✅  | string       |
|   ✅  | boolean      |
|   ✅  | null         |
|   ✅  | void         |
|   ✅  | numeric literals     |
|       | string literals     |
|       | boolean literals     |
|   ✅  | union        |
|   ✅  | maybe        |
|   ✅  | optional     |
|   ✅  | arrays       |
|   ✅  | subtypes     |