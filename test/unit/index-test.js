import fake from '../../src/index'
import * as faker from 'faker'

describe('flow generator', () => {
    test('should generate basic type for number', () => {
        type test = {
            foo: number
        }
        let result = fake.type(test)
        expect(typeof result.foo).toBe("number")
    });

    test('should generate basic type for string', () => {
        type test = {
            foo: string
        }
        let result = fake.type(test)
        expect(typeof result.foo).toBe("string")
    });

    test('should generate basic type for booleans', () => {
        type test = {
            foo: boolean
        }
        let result = fake.type(test)
        expect(typeof result.foo).toBe("boolean")
    });

    test('should generate basic type for null', () => {
        type test = {
            foo: null
        }
        let result = fake.type(test)
        expect(typeof result.foo).toBe(typeof null)
    });

    test('should generate basic type for undefined', () => {
        type test = {
            foo: void
        }
        let result = fake.type(test)
        expect(typeof result.foo).toBe(typeof undefined)
    });
    
    test('should allow primitive numerical types like 2', () => {
        const numberLiteral = faker.random.number()
        type test = {
            foo: 2
        }
        test.properties.forEach(element => console.log(element.value.typeName))
        let result = fake.type(test)
        expect(result.foo).toBe(2)
    });
    
    test('should allow primitive numerical types like 3', () => {
        const numberLiteral = faker.random.number()
        type test = {
            foo: 3
        }
        let result = fake.type(test)
        expect(result.foo).toBe(3)
    });
    
    test('should allow union of primitives types', () => {
        const possibleValues = [42, 7, 32, "Some", "Some Other", false]
        type test = {
            foo: 42 | 7 | 32 | "Some" | "Some Other" | false
        }
        test.properties.forEach(element => console.log(element.value.typeName))
        let result = fake.type(test)
        expect(possibleValues).toContainEqual(result.foo)
    });

    test('should work for multiple properties', () => {
        type test = {
            foo: number,
            bar : string
        }
        let result = fake.type(test)
        expect(typeof result.foo).toBe("number")
        expect(typeof result.bar).toBe("string")
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
