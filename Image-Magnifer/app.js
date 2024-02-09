const formSubmit = document.querySelector('.submit--form');
const image = document.querySelector('#fileInput');
const imagePreview = document.querySelector('#image-preview');
const Noimg = document.querySelector('#image-preview p');
const magnifier = document.getElementById('magnifier');

function showMagnifier(event) {
    magnifier.style.display = 'block';
}

function hideMagnifier(event) {
    magnifier.style.display = 'none';
}

formSubmit.addEventListener('submit', (event) => {
    event.preventDefault();
    if (image.files.length > 0) {
        const file = image.files[0]; // Get the first file
        let fileReader = new FileReader();
        const imgElement = new Image();
        fileReader.onload = (e) => {
            const imageSrc = e.target.result;
            imgElement.src = imageSrc;
            imgElement.style.maxWidth = '100%';
            imgElement.style.height = '400px';
            imgElement.style.objectFit = 'contain';
            // Remove previous image if exists
            while (imagePreview.firstChild) {
                imagePreview.removeChild(imagePreview.firstChild);
            }
            imagePreview.appendChild(imgElement);
            Noimg.classList.add('no-img');
        };
        fileReader.readAsDataURL(file);
    }
    formSubmit.reset();
});

function handleMouseEnter(event) {
    const imgElement = event.target.children.item(0);
    if (imgElement && imgElement.tagName === 'IMG') {
        const rect = imgElement.getBoundingClientRect();
        const clientX = event.clientX - rect.left;
        const clientY = event.clientY - rect.top;
        magnifier.style.left = event.pageX + 'px';
        magnifier.style.top = event.pageY + 'px';
        const backgroundPositionX = -clientX + 'px';
        const backgroundPositionY = -clientY + 'px';
        magnifier.style.backgroundPosition = `${backgroundPositionX} ${backgroundPositionY}`;
    }
}

if (imagePreview) {
    imagePreview.addEventListener('mouseenter', showMagnifier);
    imagePreview.addEventListener('mouseleave', hideMagnifier);
    imagePreview.addEventListener('mousemove', handleMouseEnter);
}
