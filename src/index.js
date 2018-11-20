import * as faker from 'faker'

const mapper = {
  "NumberType": ()=> faker.random.number(1000),
  "StringType": ()=> faker.random.word(),
  "BooleanType": () => faker.random.boolean(),
  "NullLiteralType": () => null,
  "VoidType": () => undefined,
  "NumericLiteralType": content => content.value,
  "UnionType": content => content.types.map(option => option.value)[Math.floor(Math.random()*content.types.length)],
}
  
const type = (base) => 
  base.properties
    .map(property => ({key: property.key, content: property.value}))
    .reduce((acc, {key, content}) => ({
      ...acc,
      [key]: mapper[content.typeName](content)
    }), {})

export default { type }