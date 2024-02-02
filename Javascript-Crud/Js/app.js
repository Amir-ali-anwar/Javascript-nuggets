
const [form, dataTable, singleItem] = [document.querySelector('#myForm'), document.querySelector('#dataTable'), document.querySelector('.items')];
const deleteItem = document.querySelector('.remove-btn')
console.log(deleteItem);
const SetItemsInLocalStorage = (key, data) => {
    return localStorage.setItem(key, JSON.stringify(data))
}
const GetItemsFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key)) || []
}
const generateUniqueId = () => {
    const randomBytes = new Uint8Array(5)
    window.crypto.getRandomValues(randomBytes)
    const uniqueId = Array.from(randomBytes).map(byte => byte.toString(16).padStart(2, '0')).join('');
    const timestamp = Date.now().toString(16).padStart(12, '0');

    return uniqueId + timestamp;
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const uniqueId = generateUniqueId()
    const userData = { name, email, id: uniqueId }
    let localStorageData = GetItemsFromLocalStorage('Crud')
    const localStorageUpdatedData = localStorageData.concat(userData);
    SetItemsInLocalStorage('Crud', localStorageUpdatedData);
    form.reset()
    updateTable();
})

const updateTable = () => {
    const localStorageData = GetItemsFromLocalStorage('Crud');
    console.log(localStorageData);

    return singleItem.innerHTML = localStorageData?.map((item) => {
        console.log(item);
        return `<div class="single-item" data-id=${item.id}>
            <p>${item.name}</p>
            <p>${item.email}</p>
            <button class="btn remove-btn">delete</button>
        </div>`;
    }).join(" ");
}

updateTable();
