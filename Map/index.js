//iterates over an array
// returns new array after performing some manipulations
//use extenstion Quokka to get the output in Vs code
//do not change the result of origional array
let newarray=[1,2,3,4,5,6,7,8]

let result= newarray.map((item)=>{
    return item
})
console.log(result) 

let numberarray=[1,2,3,4,5,6,7,8,9,10]
const SquareRoots=numberarray.map((item)=>(Math.sqrt(item)))
console.log(SquareRoots)
