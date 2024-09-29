const displayButtons = (container,pages,index) => {
  let buttons= pages?.map((_,pageIndex)=>{
    console.log({ pageIndex, currentIndex: index, isActive: pageIndex === index });

    return `<button data-value=${index} class="page-btn ${
      pageIndex === index ? "active-btn" : ''
    }" data-index=${pageIndex}>${pageIndex + 1}</button>`;
  })
  
   buttons.push('<button class="next-btn">next</button>')
   buttons.unshift('<button class="prev-btn">prev</button>');
   container.innerHTML=buttons.join('')
}
// const pageBtns = container.querySelectorAll('.page-btn');
// pageBtns.array.forEach(element => {
  
// });
export default displayButtons
