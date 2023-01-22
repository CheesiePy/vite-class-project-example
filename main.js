import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import {main_page} from './modules/main_page.js'
// import {projects_page} from './modules/projects_page.js'
import {login_page} from './modules/login_page.js'


let loggedIn = false;

if(loggedIn){
  document.querySelector('#app').innerHTML = main_page.outerHTML;
}else{
  document.querySelector('#app').innerHTML = login_page.outerHTML;
}





setupCounter(document.querySelector('#counter'))
