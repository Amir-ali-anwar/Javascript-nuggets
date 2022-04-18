const button = document.querySelector('.btn');
const imgContainer = document.querySelector('.image-container');
console.log(imgContainer)

const url = 'https://source.unsplash.com/random';

button.addEventListener('click', async () => {
    try {
        const resp = await Loadimage(url);
        imgContainer.appendChild(resp)
    } catch (error) {
        console.log(error)
    }
})

const Loadimage = (url) => {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.addEventListener('load', () => {
            resolve(img)
        })
        img.addEventListener('error', () => {
            reject(`there was error in you ${url}`)
        })
        img.src = url;
    })
}