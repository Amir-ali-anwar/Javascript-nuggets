const person ={
    name:'amir',
    state:'pakistan'
}
console.log(person)

let newapp='job-portal'
const app={
    [newapp]:true
}
console.log(app);

const state={
    loading:true,
    name:"amir",
    job:'developer'
}
const updateState=(key='',value='')=>{
    state[key]= value
}
updateState('food',['banna','apple'])
updateState('loading','false')
updateState('name','Amir Ali Anwar')

console.log(state);