import { loadPage } from './loadPage';
import { loadMenu } from './loadMenu';
import { loadAboutUs } from './loadAboutUs';
import './style.css'
loadPage();
// loadMenu()
// loadAboutUs()
let Home = document.querySelector('#home')
let Menu = document.querySelector('#menu')
let About = document.querySelector('#about')

Home.addEventListener('click', function() {
    loadPage()
})
Menu.addEventListener('click', function() {
    loadMenu()
})
About.addEventListener('click', function() {
    loadAboutUs()
})