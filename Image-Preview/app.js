const formSubmit= document.querySelector('.submit--form')
console.log(formSubmit);
const image= document.querySelector('#fileInput')
const imagePreview=document.querySelector('#image-preview')
while (imagePreview.firstChild) {
    imagePreview.removeChild(imagePreview.firstChild);
}
console.log(imagePreview.firstChild);
const Noimg=document.querySelector('#image-preview p')
formSubmit.addEventListener('submit',(event)=>{
    console.log("click");
    event.preventDefault();
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0]; // Get the first file
        let fileReader= new FileReader()
        const imgElement = new Image();
        fileReader.onload=(e)=>{
            const imageSrc = e.target.result;
            imgElement.src=imageSrc
            imgElement.style.maxWidth = '100%';
            imgElement.style.height = '400px';
            imgElement.style.objectFit='contain'
            imagePreview.appendChild(imgElement)
            Noimg.classList.add('no-img')
          
        }
        fileReader.readAsDataURL(file)
    }
    formSubmit.reset()
})

// console.log(image?.files[0]);