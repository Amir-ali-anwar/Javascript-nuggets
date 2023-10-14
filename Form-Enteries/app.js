let form = document.querySelector('.form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = [... new FormData(e.currentTarget).values()];
  console.log(formData);
  if (formData.includes('')) {
    showError("Please enter all the values")
    throw new Error("Please enter all the values")
  }
  const formObject = Object.fromEntries(formData)
  let values = []
  for (const [key, value] of formObject) {
    values.push(`${key}: ${value}`);
  }
  const message = values.join('\n');
  showSuccess({message})
  currentTarget.reset();
});
function showError(msg) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: msg,
  })
}

function showSuccess(msg) {
  Swal.fire({
    icon: 'Success',
    title: 'Your form Values',
    text: msg,
  })
}