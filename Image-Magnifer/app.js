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
        const maxFileSizeInKB = 1024;

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
            // Remove previous image if exists
            while (imagePreview.firstChild) {
                imagePreview.removeChild(imagePreview.firstChild);
            }
            imagePreview.appendChild(imgElement);
            Noimg.classList.add('no-img');
            
            // Attach event listeners to the newly added imgElement
            imgElement.addEventListener('mouseenter', showMagnifier);
            imgElement.addEventListener('mouseleave', hideMagnifier);
            imgElement.addEventListener('mousemove', handleMouseEnter);
        };
        fileReader.readAsDataURL(file);
    }
    formSubmit.reset();
});
function handleMouseEnter(event) {
    const imgElement = event.target;
    const rect = imgElement.getBoundingClientRect();
    const clientX = event.clientX - rect.left;
    const clientY = event.clientY - rect.top;

    // Calculate background position for magnifier
    const bgPosX = -clientX * 2 + magnifier.offsetWidth / 2;
    const bgPosY = -clientY * 2 + magnifier.offsetHeight / 2;

    // Position and update magnifier
    magnifier.style.left = event.pageX + 'px';
    magnifier.style.top = event.pageY + 'px';
    magnifier.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
    magnifier.style.backgroundImage = `url('${imgElement.src}')`;
}

