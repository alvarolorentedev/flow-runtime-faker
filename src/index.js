import * as faker from 'faker'

const mapper = {
  "NumberType": ()=> faker.random.number(1000),
  "StringType": ()=> faker.random.word(),
  "BooleanType": () => faker.random.boolean(),
  "NullLiteralType": () => null,
  "VoidType": () => undefined,
}
  
const type = (base) => {
  return base.properties
            .map(property => ({key: property.key, type: property.value.typeName}))
            .reduce((acc, value) => ({
              ...acc,
              [value.key]: mapper[value.type]()
            }), {})
}

export default { type }