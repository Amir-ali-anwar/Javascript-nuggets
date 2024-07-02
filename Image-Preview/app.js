const formSubmit = document.querySelector('.submit--form');
const image = document.querySelector('#fileInput');
const imagePreview = document.querySelector('#image-preview');
const Noimg = document.querySelector('#image-preview p');

formSubmit.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const previousImage = imagePreview.querySelector('img');
    if (previousImage) {
        imagePreview.removeChild(previousImage);
        Noimg.classList.remove('no-img');
    }

    if (image.files.length > 0) {
        const file = image.files[0]; // Get the first file
        const maxFileSizeInKB = 500;

        // Check if the file size exceeds the limit
        if (file.size > maxFileSizeInKB * 1024) {
            alert("File size exceeds " + maxFileSizeInKB + "KB. Please choose a smaller file.");
            return;
        }

        let fileReader = new FileReader();
        const imgElement = new Image();
        fileReader.onload = (e) => {
            const imageSrc = e.target.result;
            imgElement.src = imageSrc;
            imgElement.style.maxWidth = '100%';
            imgElement.style.height = '400px';
            imgElement.style.objectFit = 'contain';
            imagePreview.appendChild(imgElement);
            Noimg.classList.add('no-img');
        };
        fileReader.readAsDataURL(file);
    }
    formSubmit.reset();
});
