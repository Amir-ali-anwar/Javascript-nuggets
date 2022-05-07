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
