const form = document.querySelector(".js-form");
const greeing = document.querySelector(".js-greeting")
const input = form.querySelectorAll("input");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeing.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadname(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser = null){

    }
    else{
        paintGreeting(currentUser);
    }
}

function init(){

}

init();