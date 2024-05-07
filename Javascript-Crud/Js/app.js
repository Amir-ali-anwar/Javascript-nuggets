
document.addEventListener('DOMContentLoaded', () => {
    const [form, singleItem, Nodata] = [document.querySelector('#myForm'), document.querySelector('.items'), document.querySelector('.No-data')];
    const btn = document.querySelector('.btn')
    singleItem.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-btn')) {
            const itemId = event.target.closest('.single-item').dataset.id;
            deleteItem(itemId)
        }
        if (event.target.classList.contains('update-btn')) {
            const itemId = event.target.closest('.single-item').dataset.id;
            UpdateItem(itemId, form)
        }
    })
    const updateTable = () => {
        const localStorageData = GetItemsFromLocalStorage('Crud');
        if (localStorageData.length > 0) {
            Nodata.setAttribute('style', 'display:none')
        } else {
            Nodata.setAttribute('style', 'display:block')
            Nodata.textContent = "No Items in the list"
        }
        return singleItem.innerHTML = localStorageData?.map((item) => {
            return `<div class="single-item" data-id=${item.id}>
                <p>${item.name}</p>
                <p>${item.email}</p>
                <button class="btn remove-btn">delete</button>
                <button class="btn update-btn">Update</button>
            </div>`;
        }).join(" ");
    };
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
    const UpdateItem = (itemId, formElement) => {
        const btn = formElement.querySelector('button'); // Assuming btn is defined somewhere in your code
    
        btn.textContent = "Update Item";
        const storedItems = GetItemsFromLocalStorage('Crud');
        const index = storedItems.findIndex((storedItem) => storedItem.id === itemId);
    
        if (index === -1) {
            throw new Error('Your item not Found in LocalStorage');
        }
    
        const { name, email } = storedItems[index];
        formElement.querySelector('#name').value = name;
        formElement.querySelector('#email').value = email;
    
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent form submission
            const formData = new FormData(formElement);
            const updatedName = formData.get('name');
            const updatedEmail = formData.get('email');
    
            // Update the item in the array
            storedItems[index].name = updatedName;
            storedItems[index].email = updatedEmail;
    
            // Save the updated items back to localStorage
            SetItemsInLocalStorage('Crud', storedItems);
            
            // Perform any additional operations here, like updating the UI
            updateTable();
        });
    };
    
    const generateUniqueId = () => {
        const randomBytes = new Uint8Array(5);
        window.crypto.getRandomValues(randomBytes);
        const uniqueId = Array.from(randomBytes).map(byte => byte.toString(16).padStart(2, '0')).join('');
        const timestamp = Date.now().toString(16).padStart(12, '0');

        return uniqueId + timestamp;
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        btn.textContent="Submit"
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

    updateTable();
});


