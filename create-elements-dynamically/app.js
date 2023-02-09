const main= document.querySelector('.main-div')
const bodydiv= document.createElement('div')

const newelement= document.createTextNode('hello this is the text node');
bodydiv.appendChild(newelement)

document.body.appendChild(bodydiv)