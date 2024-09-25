// The nullish coalescing operator (??) in JavaScript is used to provide a default value 
 //when dealing with null or undefined values. It is similar to the logical OR (||) operator but only considers null and undefined as the cases where
 // the default value is used. This means it will not use the default value if the left-hand side expression evaluates to other falsy values like 0, false, 
 // or an empty string.


 // Syntax
 //let result = value1 ?? value2;



 let myName= false;
 let defaultName= 'Amir Ali Anwar'

 let finalName= myName ?? defaultName
 console.log(finalName);
 