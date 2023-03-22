let searchprd = document.querySelector('.search-prd');

document.querySelector('#sharp').onclick = () =>{
    searchprd.classList.toggle('active');
}

let login = document.querySelector('.login');

document.querySelector('#user').onclick = () =>{
    login.classList.toggle('active');
}

let pr = document.querySelector(".a2");

pr.onclick = function() {
    location.href = "/#Pr";
}

let shpg = document.querySelector('.shop');

document.querySelector('#shp').onclick = () =>{
    shpg.classList.toggle('active');
}