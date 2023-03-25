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