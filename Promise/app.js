//Promise are used to run Asynchronous operations in javascript,
//Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code.
//Promise are use to avoid the callback hell


let Promises = new Promise((resolve, reject) => {
    const firstvalue = 'uncle tom'
    const secondvalue = 'uncle tom'
    if (firstvalue === secondvalue) {
        resolve()
    } else {
        reject()
    }

})

Promises.then(() => {
    console.log('Success');
}).catch(() => {
    console.log('Some error has occurred');
});