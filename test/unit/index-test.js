import fake from '../../src/index'

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
    
    test('should allow primitive numerical types like', () => {
        type test = {
            foo: 2
        }
        test.properties.forEach(element => console.log(element.value.typeName))
        let result = fake(test)
        expect(result.foo).toBe(2)
    });

    test('should allow primitive string types', () => {
        type test = {
            foo: "pepe"
        }
        let result = fake(test)
        expect(result.foo).toBe("pepe")
    });

    test('should allow primitive boolean types', () => {
        type test = {
            foo: true
        }
        let result = fake(test)
        expect(result.foo).toBe(true)
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

    test('should allow union with complex types', () => {
        const possibleValues = ["string", "number"]
        type someOtherType = {
            bar: number
        }
        type someMoreType = {
            bar: string
        }
        type test = {
            foo: someMoreType | someOtherType
        }
        let result = fake(test)
        expect(possibleValues).toContainEqual(typeof result.foo.bar)
    });
    
    test('should allow maybe types', () => {
        const possibleValues = ['string', typeof null, 'undefined']
        type test = {
            foo: ?string,
        }
        let result = fake(test)
        expect(possibleValues).toContainEqual(typeof result.foo)
    });
    
    test('should allow maybe types of complex', () => {
        const possibleValues = ['object', typeof null, 'undefined']
        type otherType = {
            bar: 32
        }
        type test = {
            foo: ?otherType,
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
    
    test('should work for mixed properties', () => {
        const possibleValues = ['boolean', "string", "number", typeof null]
        type test = {
            foo: mixed
        }
        let result = fake(test)
        expect(possibleValues).toContainEqual(typeof result.foo)
    });

    test('should work for any properties', () => {
        const possibleValues = ['boolean', "string", "number", typeof null, 'undefined']
        type test = {
            foo: any
        }
        let result = fake(test)
        expect(possibleValues).toContainEqual(typeof result.foo)
    });

    test('should work for array properties', () => {
        type test = {
            foo: number[],
        }
        let result = fake(test)
        expect(Array.isArray(result.foo)).toBeTruthy()
        expect(typeof result.foo[Math.floor(Math.random()*result.foo.length)]).toBe('number')
    });

    test('should work for array properties of complex types', () => {
        type someOtherType ={
            bar: number
        }
        type test = {
            foo: someOtherType[],
        }
        let result = fake(test)
        expect(Array.isArray(result.foo)).toBeTruthy()
        expect(typeof result.foo[Math.floor(Math.random()*result.foo.length)]).toBe('object')
        expect(typeof result.foo[Math.floor(Math.random()*result.foo.length)].bar).toBe('number')
    });

    test('should work for function definitions of complex types', () => {
        type someOtherType ={
            bar: number
        }
        type test = {
            foo: (a:number, b:string) => someOtherType
        }
        let result = fake(test)
        expect(typeof result.foo()).toBe('object')
        expect(typeof result.foo().bar).toBe('number')
    });

    test('should work for function definitions', () => {
        type test = {
            foo: (a:number) => number
        }
        let result = fake(test)
        expect(typeof result.foo()).toBe('number')
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
