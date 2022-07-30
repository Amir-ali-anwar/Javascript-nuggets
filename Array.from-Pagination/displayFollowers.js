const container = document.querySelector(".container");
const display = (followers) => {
  const newpagination = followers
    ?.map((follower) => {
      const { avatar_url, login, html_url } = follower;
      return `<article class="card">
        <img src="${avatar_url}">
        <h4>${login}</h4>
         <a href="${html_url}" class="btn">view profile</a>
    </article>`;
    })
    .join("");

  container.innerHTML = newpagination;
};

export default display;
