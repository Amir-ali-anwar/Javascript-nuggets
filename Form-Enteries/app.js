let form = document.querySelector('.form');
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = [... new FormData(e.currentTarget).values()];
   if(formData.includes('')){
     throw new Error("Please enter all the values")
   }
   const formObject= Object.fromEntries(formData)
   console.log(formObject);
   currentTarget.reset();
});
