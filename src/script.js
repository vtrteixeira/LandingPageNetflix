const video = document.querySelector(".fundo-trailer");
const btn =  document.querySelector(".play");
const close = document.querySelector(".close");
const frame = document.querySelector(".frame");
const menuIcon = document.querySelector (".menu-btn");
const menu = document.querySelector (".menu-responsive");


btn.addEventListener("click", function playTrailer() {
    video.style.display = "flex";
    video.style.backgroundColor = "rgb(0, 0, 0, .7)";
});

close.addEventListener("click", function closeVideo(){
    window.location.reload();
})

menuIcon.addEventListener ("click", function abrirMenu(){
    
    if(menu.style.display == 'flex') {
        menu.style.display = 'none';} 
        
    else{
        menu.style.display = 'flex';
    }
})