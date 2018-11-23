import { some } from './index'
import fake from 'flow-runtime-faker'

test('should fake', () => {
    const value = fake(some)
    console.log(value)
    expect(typeof value.a).toBe('number')
});