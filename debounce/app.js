const btn = document.querySelector('.btn')

const decounce = () => {
  console.log("clicked")
  let timeOutID;
  return () => {
    clearTimeout(timeOutID)
    console.log(timeOutID)
    timeOutID = setTimeout(() => {
      console.log('you clicked me')
    },2000)
  }
}

btn.addEventListener('click', decounce());