// new set is used to get the unique values from array
// Returns an object

const data=[1,2,3,4,5,6,6,6,6,7,8,9,9,9,9,9,]
let output= [... new Set(data)]
console.log(output)
console.log(typeof output)