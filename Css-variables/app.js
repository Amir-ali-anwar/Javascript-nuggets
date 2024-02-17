const toggleBtn= document.querySelector('.btn')
const root=document.querySelector(':root')

toggleBtn.addEventListener('click',()=>{
    const rootStyles = getComputedStyle(root);
    const current = rootStyles.getPropertyValue('--clr-bcg');
    const colorValue = current === '#fff' ? '#282c35' : '#fff';
    const fontValue = current === '#fff' ? '#fff' : '#282c35';
    root.style.setProperty('--clr-bcg',colorValue)
    root.style.setProperty('--clr-font',fontValue)


})