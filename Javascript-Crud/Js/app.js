const form = document.getElementById('myForm');
const dataTable = document.getElementById('dataTable');
const dataBody = document.getElementById('dataBody');
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
    const Email = formData.get('email')
    const userData = { name, Email }
    let localStorageData = GetItemsFromLocalStorage('Crud')
    const localStorageUpdatedData = localStorageData.concat(userData);
    SetItemsInLocalStorage('Crud', localStorageUpdatedData);

})
const updateTable = () => {
    const localStorageData = GetItemsFromLocalStorage('Crud');
    if (!localStorageData.length === 0) {
        throw new Error("No items exist in localstorage")
    }
    console.log({ localStorageData });

}
updateTable();