let headMenu = document.querySelector('.headerMenu');

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 10){
        headMenu.classList.add('shadow');
    }else{
        headMenu.classList.remove('shadow');
    }
});