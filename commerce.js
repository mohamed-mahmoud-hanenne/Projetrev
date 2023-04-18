let searchprd = document.querySelector('.search-prd');

document.querySelector('#sharp').onclick = () =>{
    searchprd.classList.toggle('active');
}

let login = document.querySelector('.login');

document.querySelector('#user').onclick = () =>{
    login.classList.toggle('active');
}





let shpg = document.querySelector('.shop');

document.querySelector('#shp').onclick = () =>{
    shpg.classList.toggle('active');
}

let bout = document.querySelector('.bttn');

window.onscroll = function() {
    if(window.scrollY >= 1000){
        bout.style = "display = block", "float = right" ;
    }
    else {
        bout.style.display = "none";
    }
}

bout.onclick = function() {
  window.scrollTo({
    top:0,
    left : 0,
    behavior : "smooth"
  })
}


// use location href

let prod  = document.querySelector(".a2");


prod.onclick = function(){
    location.href = "#prod";
}


let promt = document.querySelector(".a3");


promt.onclick = function(){
    location.href = "#promotion";
}


let cmt = document.querySelector(".a4");

//use window open 
cmt.onclick = function(){
    // location.href = "#commentaire";
    window.open("#commentaire", "_self");
}


let cont = document.querySelector(".a5");


cont.onclick = function(){
    // location.href = "#contact";
    window.open("#contact", "_self");
}