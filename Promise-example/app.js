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
            reject(new Error(`Opps there is error in your ${url}`))
        })
        img.src = url;
    })
}