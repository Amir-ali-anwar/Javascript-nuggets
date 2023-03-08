const button = document.querySelector('.btn');
const imgContainer = document.querySelector('.image-container');
const loadingText = document.querySelector('.loading-text')
// console.log(imgContainer)

const url = 'https://source.unsplash.com/random';

button.addEventListener('click', async () => {

    try {
     const resp = await Loadimage(url);
     if(!resp){
         throw new Error('No Image available')
     }
        imgContainer.appendChild(resp)
    } catch (error) {
        console.log(error)
    }
})

const Loadimage = (url) => {
    return new Promise((resolve, reject) => {
        let img = new Image();
        loadingText.style.display = 'block';
        img.addEventListener('load', () => {
            resolve(img)
            loadingText.style.display = 'none';
        })
        img.addEventListener('error', () => {
            reject(new Error(`Opps there is error in your ${url}`))
        })
        img.src = url;
    })
}