
import './modules/Games/tstyle.css'
import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import {main_page} from './modules/main_page.js'
// import {projects_page} from './modules/projects_page.js'
import {login_page} from './modules/login_page.js'
import {board} from './modules/Games/ticktakto.js'
import { RunGame } from './modules/Games/game_logic'

let loggedIn = false;

// if(loggedIn){
//   document.querySelector('#app').innerHTML = main_page.outerHTML;
// }else{
//   document.querySelector('#app').innerHTML = login_page.outerHTML;
// }


function f(){
  

}


document.querySelector('#app').innerHTML = board.outerHTML;
RunGame();




// let button = document.createElement('button');

// button.addEventListener("click", () => {
//   document.querySelector('#app').innerHTML = login_page.outerHTML;
// })



// document.querySelector('#app').appendChild(button);



// setupCounter(document.querySelector('#counter'))
