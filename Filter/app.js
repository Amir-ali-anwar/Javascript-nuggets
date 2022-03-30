//iterates over an array
//return new array after the complete iteration]
//does not iterates over the array with empty elements
//filter method does not change the origional array
//return empty array when not condition meets

const foodItems= ['milk','water','sugar','jam'];
let Istrue= foodItems.filter((item)=>{
    return item==='meat'
})
console.log(Istrue)

 const isAvailable= foodItems.filter((item)=>{
    return item==='milk'
})
console.log(isAvailable)