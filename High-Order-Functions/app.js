// passing function as a parameter to the another is called callback, and the function that is receving the function as a paramater is called
// higher oder function


function goodfriend(name) {
    return `${name}`
}
function visitor(name) {
    return `${name}`
}
function greatfriends(name, cbFn) {
    console.log(`Hi ${cbFn(name)} and welcome to this Higher order funtion tutorial`)
}

// greatfriends('amir', goodfriend)
greatfriends('mamoon', visitor)
