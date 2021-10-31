const header = document.querySelector('header')
const headerButton = document.querySelector('header button')

headerButton.addEventListener('click',()=> {
    header.style.opacity = '0'
    header.style.zIndex = '-99'
})