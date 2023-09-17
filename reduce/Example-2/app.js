// separate the strings, numbers and special characters from given array

const a1 = ["S", "U", " . ", "$", "1", "2", "3", "g", "h", "#"];

const organizedArray = a1.reduce(
  (result, element) => {
    if (/[0-9]/.test(element)) {
      result.numbers.push(element);
    } else if (/[a-zA-Z]/.test(element)) {
      result.strings.push(element);
    } else {
      result.specialCharacters.push(element);
    }
    return result;
  },
  { strings: [], numbers: [], specialCharacters: [] }
);
const string= organizedArray.strings
const numbers = organizedArray.numbers.map((str)=>parseFloat(str));
// const specialCharacters = organizedArray.specialCharacters?.map((character)=>character.replace(/'/g, ''))

console.log({string});
console.log({numbers});
// console.log({specialCharacters});



function abc(a,b,c,...rest){
  console.log(a,b,c,+rest);
 return a+b+c+(+rest)
}

let array=[1,2,4,5]

console.log(abc(...array));