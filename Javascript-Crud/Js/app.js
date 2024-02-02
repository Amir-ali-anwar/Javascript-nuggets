
document.addEventListener('DOMContentLoaded', () => {
    const [form, singleItem,] = [document.querySelector('#myForm'), document.querySelector('.items')];

    singleItem.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-btn')) {
            const itemId = event.target.closest('.single-item').dataset.id;
            deleteItem(itemId)
        }
    })
    const SetItemsInLocalStorage = (key, data) => {
        return localStorage.setItem(key, JSON.stringify(data));
    };
    const GetItemsFromLocalStorage = (key) => {
        return JSON.parse(localStorage.getItem(key)) || [];
    };

    const deleteItem = (itemId) => {
        const storedItems = GetItemsFromLocalStorage('Crud')
        const filteredItems = storedItems.filter((storedItem) => storedItem.id !== itemId)
        SetItemsInLocalStorage('Crud', filteredItems);
        updateTable()
        return
    }
    const generateUniqueId = () => {
        const randomBytes = new Uint8Array(5);
        window.crypto.getRandomValues(randomBytes);
        const uniqueId = Array.from(randomBytes).map(byte => byte.toString(16).padStart(2, '0')).join('');
        const timestamp = Date.now().toString(16).padStart(12, '0');

        return uniqueId + timestamp;
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const uniqueId = generateUniqueId();
        const userData = { name, email, id: uniqueId };
        let localStorageData = GetItemsFromLocalStorage('Crud');
        const localStorageUpdatedData = localStorageData.concat(userData);
        SetItemsInLocalStorage('Crud', localStorageUpdatedData);
        form.reset();
        updateTable();
    });
    const localStorageDataLength = GetItemsFromLocalStorage('Crud');
    if (localStorageDataLength.length === 0) {
        const Nodata = document.createElement('p')
        Nodata.setAttribute('class', 'No-data');
        const headingText = document.createTextNode("No Items in the list");
        Nodata.appendChild(headingText)
        document.querySelector('.section-center').appendChild(Nodata);
    }
    const updateTable = () => {
        const localStorageData = GetItemsFromLocalStorage('Crud');

        return singleItem.innerHTML = localStorageData?.map((item) => {
            return `<div class="single-item" data-id=${item.id}>
                <p>${item.name}</p>
                <p>${item.email}</p>
                <button class="btn remove-btn">delete</button>
            </div>`;
        }).join(" ");
    };

    updateTable();
});


