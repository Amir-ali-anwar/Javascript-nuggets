const displayButtons = (container,pages,index) => {
  let buttons= pages?.map((_,pageIndex)=>{
    return `<button data-value=${index} class="page-btn ${
      pageIndex === Number(index) ? "active-btn" : ''
    }" data-index=${pageIndex}>${pageIndex + 1}</button>`;
  })
  
   buttons.push('<button class="next-btn">next</button>')
   buttons.unshift('<button class="prev-btn">prev</button>');
   container.innerHTML=buttons.join('')
}

export default displayButtons
