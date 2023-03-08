// Event Bubbling :
// Event Bubbling is a concept in the DOM (Document Object Model). 
//it happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) 
//to its parent and ancestor elements in the DOM tree until it gets to the root element.

const body = document.getElementsByTagName("body")[0]
const div = document.getElementsByTagName("div")[0]
const span = document.getElementsByTagName("span")[0]
const button = document.getElementsByTagName("button")[0]

body.addEventListener('click', () => {
    console.log("body was clicked")
  })
  
  div.addEventListener('click', () => {
    console.log("div was clicked")
  })
  
  span.addEventListener('click', () => {
    console.log("span was clicked")
  })
  
  button.addEventListener('click', (event) => {
    event.stopPropagation()
    console.log("button was clicked")
  })