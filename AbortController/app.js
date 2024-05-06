document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetchButton');
    const outputDiv = document.getElementById('output');
    let controller;

    fetchButton.addEventListener('click', () => {
        if (controller) {
            controller.abort(); // Abort the previous request if any
        }

        controller = new AbortController();
        const signal = controller.signal;

        fetch('https://jsonplaceholder.typicode.com/posts', { signal })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                renderData(data);
            })
            .catch(error => {
                if (error.name === 'AbortError') {
                    console.log('Fetch operation aborted');
                } else {
                    console.error('Fetch operation failed:', error);
                }
            });
    });

    function renderData(data) {
        outputDiv.innerHTML = ''; // Clear previous content

        data.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('output-item');

            const title = document.createElement('h2');
            title.textContent = item.title;

            const body = document.createElement('p');
            body.textContent = item.body;

            itemDiv.appendChild(title);
            itemDiv.appendChild(body);

            outputDiv.appendChild(itemDiv);
        });
    }
});
