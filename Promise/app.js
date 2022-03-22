//Promise are used to run Asynchronous operations in javascript,
//Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code.
//Promise are use to avoid the callback hell
//pending, Rejected, Fulfilled

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

// Examples
let success = true;

function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve([
                    { username: 'john', email: 'john@test.com' },
                    { username: 'jane', email: 'jane@test.com' },
                ]);
            } else {
                reject('Failed to the user list');
            }
        }, 1000);
    });
}

function onFulfilled(users) {
    console.log(users);
}
function onRejected(error) {
    console.log(error);
}

const promise = getUsers();
promise.then(onFulfilled, onRejected);