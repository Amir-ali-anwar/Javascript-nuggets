const BASEURL = "https://dummyjson.com";
//Promise are used to run Asynchronous operations in javascript,
//Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code.
//Promise are use to avoid the callback hell
//pending, Rejected, Fulfilled

// let Promises = new Promise((resolve, reject) => {
//     const firstvalue = 'uncle tom'
//     const secondvalue = 'uncle tom'
//     if (firstvalue === secondvalue) {
//         resolve()
//     } else {
//         reject()
//     }

// })

// Promises.then(() => {
//     console.log('Success');
// }).catch(() => {
//     console.log('Some error has occurred');
// });

// Examples
let success = true;

// function getUsers() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (success) {
//                 resolve([
//                     { username: 'john', email: 'john@test.com' },
//                     { username: 'jane', email: 'jane@test.com' },
//                 ]);
//             } else {
//                 reject('Failed to the user list');
//             }
//         }, 1000);
//     });
// }

// function onFulfilled(users) {
//     console.log(users);
// }
// function onRejected(error) {
//     console.log(error);
// }

// const promise = getUsers();
// promise.then(onFulfilled, onRejected);


//Created generic the "customFetch" function to take in a endpoint and handle errors (including a wrong endpoint)
// const customFetch = async (endpoints, options) => {
//     try {
//         const res = await fetch(`${BASEURL}/${endpoints}`, { ...options });
//         if (!res.ok) throw new Error("response not valid")
//         const json = await res.json();
//         return json;
//     } catch (error) {
//         console.log(error.message);
//     }
// }
async function customFetch(endpoint, options) {
  try {
    const res = await fetch(`${BASEURL}/${endpoint}`, { ...options });
    if (!res.ok) {
      throw new Error(`${res.status}: ${res.statusText}`)
    }
    const json = await res.json();
    return json
  } catch (err) {
    console.error(err.message)
  }
}
//Create a function called "getProducts" that returns all the products in an array. Then list all the products in the DOM in an unordered list.

const getCommentsOnUsersPosts = async (id) => {
  if (!id) throw Error('Please enter value')
  const postByUser = await customFetch(`users/${id}/posts`);
  const singlePost = await postByUser?.posts?.map((post) => {

    const { title, body, reactions } = post
    return { title, body, reactions }
  })
  return singlePost
}


async function abc() {
  const data = await getCommentsOnUsersPosts(5)
  console.log(data);
}

abc()