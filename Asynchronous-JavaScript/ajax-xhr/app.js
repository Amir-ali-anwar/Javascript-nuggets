const btn = document.querySelector('.btn');
const loading = document.querySelector('.loading');
const xhr = new XMLHttpRequest();
// Sepcify method and endpoint/URL
// xhr.open('GET', './movies.json');
xhr.open('GET', 'https://api.github.com/users/bradtraversy/repos')
// readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready
xhr.onreadystatechange = function () {
    if (this.readyState == 2 && this.status !== 200) {
        console.log('000');
        loading.style.display='block'  
        return
    }
    if (this.readyState === 4 && this.status === 200) {
        const Users = JSON.parse(this.responseText)
        // loading.style.display='none'  
        const result = Users?.map((User) => {
            const { name, description } = User
            return `
            <li class="data data-${User.id}">
            <strong>${name}</strong-${description} 
            </li>
          `
        })
        document.querySelector('#results').innerHTML = result;
    }
}
const sendRequest = () => {
    xhr.send();
}

btn.addEventListener('click', sendRequest)

