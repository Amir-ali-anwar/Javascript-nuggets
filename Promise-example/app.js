const button = document.querySelector('.btn');
const imgContainer = document.querySelector('.image-container');
console.log(imgContainer)

const url = 'https://source.unsplash.com/random';

button.addEventListener('click', () => {
    Loadimage()
})

const Loadimage = () => {
    return new Promise((resolve, reject) => {
        let img = new Image();
        console.log(img)
    })
}