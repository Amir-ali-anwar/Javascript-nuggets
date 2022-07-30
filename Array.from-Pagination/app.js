import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayButtons.js";
const title = document.querySelector(".section-title h1");
const btnContainer = document.querySelector(".btn-container");
let index = 0;
let pages = [];

const setUpUI = () => {
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
};
const init = async () => {
  const followers = await fetchFollowers();
  title.textContent = "Pagination";
  pages = paginate(followers);
  setUpUI();
};
btnContainer.addEventListener('click',function(e){
  let style = e.target.classList.contains("page-btn");
  if(style){
    index = e.target.dataset.index;
   parseInt(index)
  }
  if (e.target.classList.contains("next-btn")) {
    index++
    if (index > pages.length-1) {
      index=0
    }
  }
   if (e.target.classList.contains("prev-btn")) {
     index--;
     if (index<0) {
       index = pages.length - 1;
     }
   }
  setUpUI()
});
window.addEventListener("load", init);
