import data from './data.js'
let slideContainer = document.querySelector(".slide-container");
let prevContainer = document.querySelector(".prev-btn");
let nextContainer = document.querySelector(".next-btn");

let slideItems= [...data]
slideContainer.innerHTML=slideItems?.map((person,index)=>{
    const {img,job,name,text}=person
    let position='next'
    if(index===0){
      position='active'
    }
    if (index === slideItems.length - 1) {
      position = "last";
    }
     if (slideItems.length <= 1) {
       position = "active";
     }
    return ` <article class="slide ${position}" data-id=${index}>
        <img src=${img}
          class="img" alt=${name} />
        <h4>${name}</h4>
        <p class="title">${job}</p>
        <p class="text">
          ${text}
        </p>
        <div class="quote-icon">
          <i class="fas fa-quote-right"></i>
        </div>
      </article>`;
}).join('')

const startSlider=(type)=>{
  
}

prevContainer.addEventListener('click',()=>{
  startSlider()
});
nextContainer.addEventListener("click", () => {
  startSlider();
});