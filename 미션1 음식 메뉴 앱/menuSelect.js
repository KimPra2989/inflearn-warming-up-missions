import { data } from "./data.js";
import renderMenu from "./renderMenu.js";

const menuCategory = document.querySelector('.menu-nav')

export let selected = 'all'

menuCategory.addEventListener('click', e => {
    if (e.target.tagName != 'LI') return
    
    let prevSelected =  document.querySelector('.selected')
    if (prevSelected == e.target) return
    prevSelected.classList.remove('selected')

    selected =  e.target.getAttribute('name')
    renderMenu(data, selected)
    e.target.className = 'selected'
})
