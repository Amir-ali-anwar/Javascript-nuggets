const displayButtons = (container,pages,index) => {
  let buttons= pages?.map((_,pageIndex)=>{
    console.log({pageIndex});
    console.log({index});
    return `<button class="page-btn ${
      pageIndex === index ? "active-btn" : null
    }" data-index=${pageIndex}>${pageIndex + 1}</button>`;
  })
  
   buttons.push('<button class="next-btn">next</button>')
   buttons.unshift('<button class="prev-btn">prev</button>');
   container.innerHTML=buttons.join('')
}

export default displayButtons
