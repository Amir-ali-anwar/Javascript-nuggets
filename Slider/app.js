import data from './data.js'
let slideContainer = document.querySelector(".slide-container");
let prevContainer = document.querySelector(".prev-btn");
let nextContainer = document.querySelector(".next-btn");

let slideItems= [...data]
slideContainer.innerHTML=slideItems?.map((person,index)=>{
    const {img,job,name,text}=person
    return ` <article class="slide" data-id=${index}>
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

