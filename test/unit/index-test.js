//@flow
import fake from '../../src/index'
import * as faker from 'faker'

describe('flow generator', () => {
    test('should generate basic types pased a definition', () => {
        let propName =faker.random.word()
        type test = {
            foo: number
        }
        let result = fake.type(test)
        expect(result.foo).toBeDefined()
    });
});

// let unfold = (type) =>  type.properties.map(property => {
//   if(property.value.typeName ==="TypeAlias")
//       return {key: property.key, type: property.value.typeName, metadata : { content: unfold(property.value) }}
//   else if(property.value.typeName ==="ArrayType")
//       return {key: property.key, type: property.value.typeName, metadata : {type: property.value.elementType.typeName}}
//   else
//       return {key: property.key, type: property.value.typeName}

// })

// test('empty test', async () => {
//     // console.log(unfold(MyObject))
//     expect(true).toEqual(true)
// })
