const toggleBtn= document.querySelector('.btn')
const root=document.querySelector(':root')
const heading3= document.querySelector('.post h3')
toggleBtn.addEventListener('click',()=>{
    const rootStyles = getComputedStyle(root);
    const headingStyles= getComputedStyle(heading3).getPropertyValue('letter-spacing')
    console.log(headingStyles);
    const current = rootStyles.getPropertyValue('--clr-bcg');
    const colorValue = current === '#fff' ? '#282c35' : '#fff';
    const fontValue = current === '#fff' ? '#fff' : '#282c35';
    root.style.setProperty('--clr-bcg',colorValue)
    root.style.setProperty('--clr-font',fontValue)


})
const variableHeading= document.querySelector('.post h3')
const headingStyles= getComputedStyle(variableHeading).getPropertyValue('margin')
console.log(headingStyles);