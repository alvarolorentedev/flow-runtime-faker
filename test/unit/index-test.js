import fake from '../../src/index'
import * as faker from 'faker'

describe('flow generator', () => {
    test('should generate basic type for number', () => {
        type test = {
            foo: number
        }
        let result = fake(test)
        expect(typeof result.foo).toBe("number")
    });

    test('should generate basic type for string', () => {
        type test = {
            foo: string
        }
        let result = fake(test)
        expect(typeof result.foo).toBe("string")
    });

    test('should generate basic type for booleans', () => {
        type test = {
            foo: boolean
        }
        let result = fake(test)
        expect(typeof result.foo).toBe("boolean")
    });

    test('should generate basic type for null', () => {
        type test = {
            foo: null
        }
        let result = fake(test)
        expect(typeof result.foo).toBe(typeof null)
    });

    test('should generate basic type for undefined', () => {
        type test = {
            foo: void
        }
        let result = fake(test)
        expect(typeof result.foo).toBe(typeof undefined)
    });
    
    test('should allow primitive numerical types like 2', () => {
        type test = {
            foo: 2
        }
        test.properties.forEach(element => console.log(element.value.typeName))
        let result = fake(test)
        expect(result.foo).toBe(2)
    });
    
    test('should allow primitive numerical types like 3', () => {
        type test = {
            foo: 3
        }
        let result = fake(test)
        expect(result.foo).toBe(3)
    });
    
    test('should allow union of primitives types', () => {
        const possibleValues = [42, 7, 32, "Some", "Some Other", false]
        type test = {
            foo: 42 | 7 | 32 | "Some" | "Some Other" | false
        }
        let result = fake(test)
        expect(possibleValues).toContainEqual(result.foo)
    });

    test('should allow union of primitives types', () => {
        const possibleValues = ['boolean', "string", "number"]
        type test = {
            foo: number | string | boolean
        }
        let result = fake(test)
        expect(possibleValues).toContainEqual(typeof result.foo)
    });
    
    test('should allow maybe types', () => {
        const possibleValues = ['string', typeof null, 'undefined']
        type test = {
            foo: ?string,
        }
        let result = fake(test)
        expect(possibleValues).toContainEqual(typeof result.foo)
    });
    
    test('should allow optional types', () => {
        const possibleValues = ['number', 'undefined']
        type test = {
            foo?: number
        }
        let result = fake(test)
        expect(possibleValues).toContainEqual(typeof result.foo)
    });

    test('should work for multiple properties', () => {
        type test = {
            foo: number,
            bar : string
        }
        let result = fake(test)
        expect(typeof result.foo).toBe("number")
        expect(typeof result.bar).toBe("string")
    });

    test('should work for array properties', () => {
        type test = {
            foo: number[],
        }
        let result = fake(test)
        expect(Array.isArray(result.foo)).toBeTruthy()
    });

    test('should work for type alias properties', () => {
        type otherType = {
            bar: number
        }
        type test = {
            foo: otherType,
        }
        let result = fake(test)
        expect(typeof result.foo).toBe('object')
        expect(typeof result.foo.bar).toBe('number')
    });

});
