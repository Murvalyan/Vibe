import 'normalize.css'
import './styles/main.scss'

const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu')
const body = document.querySelector('body')

burger.addEventListener('click', function () {
    this.classList.toggle('header__burger_active')
    menu.classList.toggle('header__menu_active')
    body.classList.toggle('_lock')
})