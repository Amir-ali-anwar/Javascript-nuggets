const form = document.getElementById('myForm');
const dataTable = document.getElementById('dataTable');
const SetItemsInLocalStorage = (key, data) => {
    return localStorage.setItem(key, JSON.stringify(data))
}
const GetItemsFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key)) || []
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const userData = { name, email }
    let localStorageData = GetItemsFromLocalStorage('Crud')
    const localStorageUpdatedData = localStorageData.concat(userData);
    SetItemsInLocalStorage('Crud', localStorageUpdatedData);
    updateTable();
    form.reset()
})
const updateTable = () => {
    const localStorageData = GetItemsFromLocalStorage('Crud');
    console.log(localStorageData);
    const singleItem = document.querySelector('.items'); 
   return  singleItem.innerHTML = localStorageData?.map((item) => {
        return `<div class="single-item">
            <p>${item.email}</p>
            <p>${item.name}</p>
            <button class="btn remove-btn">delete</button>
        </div>`;
    }).join(" ");
}

updateTable();
