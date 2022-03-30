//iterates over an array
//return new array after the complete iteration]
//does not iterates over the array with empty elements
//filter method does not change the origional array
//return empty array when not condition meets

const foodItems= ['milk','water','sugar','jam'];
const Istrue= foodItems.filter((item)=>{
    return item==='meat'
})
console.log(Istrue)