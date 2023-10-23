//target =>refers to the element where clicked
// currentTarget => referes to the  element where the listner is added
let isSubmitted = false;
let error=""
const form = document.querySelector('.form');
const formValues = document.querySelector('#form-data');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  isSubmitted=true;
  const formData = new FormData(e.currentTarget);
  const formObject = Object.fromEntries(formData);
  if (!formObject.name) {
    error= "Please enter Name"
    console.log('Please enter Name')
  }
  if (!formObject.email) {
    error= "Please enter Email"
    console.log('Please enter Email')
    if(formObject.email){
      if(!isValidEmail(formObject.email)){
        console.log('Please enter a valid email address')
        // alert('Please enter a valid email address');
      }
    }
  }
  if (!formObject.password) {
    error= "Please enter Password"
    console.log('Please enter Password')
  }
  e.currentTarget.reset();
})

if (isSubmitted) {
  formValues.style.display = 'block'
} else {
  formValues.style.display = 'none'
}


function isValidEmail(email) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

