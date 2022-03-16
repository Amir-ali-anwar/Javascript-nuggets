//Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

function curry(r) {
    return function (a) {
        return function (b) {
            return r(a, b)
        }
    }
}
function sum(a, b) {
    return a + b
}
let curryingsum = curry(sum)
console.log(curryingsum(12)(20))