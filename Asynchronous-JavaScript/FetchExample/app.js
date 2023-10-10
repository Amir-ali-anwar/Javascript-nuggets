
const button = document.querySelector(".fetch-data");
const stories = document.querySelector(".stories");
const nodata = document.querySelector(".loading");
const noData= document.querySelector('.no-data')
// import axios from 'axios'
const response=  await axios.get('https://jsonplaceholder.typicode.com/posts')
console.log(response);
// console.log(axios.get('https://jsonplaceholder.typicode.com/posts'));
// console.log(axios.get('https://jsonplaceholder.typicode.com/posts'));
let buttonClickCount = 0;
async function fetchdata() {
  let buttonClicked = true;
  let fetchdata = true;
  buttonClickCount++;
    try {
      buttonClicked && nodata.classList.add("d-block");
      noData.style.display='none'
      buttonClicked = false;
      if (buttonClickCount > 1 && fetchdata) {
        stories.style.display = "none";
        noData.style.display='none'
      }
      const response = await fetch("https://hn.algolia.com/api/v1/search?");
      const data = await response.json();
      fetchdata && nodata.classList.replace("d-block", "d-none");
      fetchdata && (stories.style.display = "grid");
      noData.style.display='none'
      fetchdata = false;
      stories.innerHTML = data?.hits
        ?.map((story) => {
          const { objectID, title, num_comments , points, author } = story;
          return `<article  class='story' id=${objectID}>
        <h4>${title}</h4>
        <p class='info'>
          ${points} points by <span>${author} | </span> ${num_comments}
          comments
        </p>
      </article>`;
        })
        .join("");

      console.log(fetchdata);
    } catch (error) {
      throw new Error(error)
    }
    
  }
button.addEventListener("click", fetchdata);
