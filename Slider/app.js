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

const startSlider = (type) => {
  let active = document.querySelector(".active");
  let last = document.querySelector(".last");
  let next = active.nextElementSibling;
  if (!next) {
    next = slideContainer.firstElementChild;
  }
  active.classList.remove(["active"]);
  last.classList.remove(["last"]);
  next.classList.remove(["next"]);
  if (type === "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;
    if (!next) {
      next = slideContainer.lastElementChild;
    }
    next.classList.remove(['next'])
    next.classList.add('last')
    return;
  }
  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
};

prevContainer.addEventListener('click',()=>{
  startSlider("prev");
});
nextContainer.addEventListener("click", () => {
  startSlider()
});