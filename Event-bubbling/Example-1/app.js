const parent = document.querySelector('.child');
parent.addEventListener('click', function(event) {
    console.log('Clicked on child element');
    event.stopPropagation()
  })