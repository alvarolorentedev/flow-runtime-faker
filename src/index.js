import * as faker from 'faker'

const typeMapper = option => option.typeName.includes("LiteralType") ? option.value : mapper[option.typeName]()

const mapper = {
  "NumberType": ()=> faker.random.number(1000),
  "StringType": ()=> faker.random.word(),
  "BooleanType": () => faker.random.boolean(),
  "NullLiteralType": () => null,
  "VoidType": () => undefined,
  "NumericLiteralType": content => content.value,
  "UnionType": content => content.types.map(typeMapper)[Math.floor(Math.random()*content.types.length)],
  "NullableType": content => [mapper[content.type.typeName](), null, undefined][Math.floor(Math.random()*3)],
  "ArrayType": content => Array(faker.random.number(1000)).fill(0).map(_ => mapper[content.elementType.typeName]())
}
  
const valueGenerator = ({optional, content})  => optional
    ? [mapper[content.typeName](content), undefined][Math.floor(Math.random() * 2)]
    : mapper[content.typeName](content)

const fake = (base) => 
  base.properties
    .map(property => ({key: property.key, content: property.value, optional: property.optional}))
    .reduce((acc, {key, ...rest}) => ({
      ...acc,
      [key]: valueGenerator(rest)
    }), {})

export default fake


