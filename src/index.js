// @flow
// export type someOther = {
//     dol: string
// }
// export type MyObject = {
//     foo: number,
//     lol: number[],
//     bar: someOther,
//   };


  
const type = (base) => {
  const unfold = base.properties.map(property => ({key: property.key, type: property.value.typeName}))
  return { foo : "" }
}

export default { type }