let headMenu = document.querySelector('.headerMenu');
let nextImg = document.querySelector('.customers__arrowUseNext');
let prevImg = document.querySelector('.customers__arrowUsePrev');
let imgAll = document.querySelectorAll('div.customers__users > img');
let blockText = document.querySelectorAll('div.customers__blockText > p');
let btnIndividual = document.querySelector('.plan__individual');
let btnCompany = document.querySelector('.plan__company');
let afterBlock = document.querySelector('.plan__btnToggle');
let blockIndividual = document.querySelector('.plan__blockIndividual');
let blockCompany = document.querySelector('.plan__blockCompany');

let currentImg = 1;

//---Шапка
window.addEventListener('scroll', function(){
    if(window.pageYOffset > 10){
        headMenu.classList.add('shadow');
    }else{
        headMenu.classList.remove('shadow');
    }
});


//---Карусель

// Пребір масиву querySelectorAll
function arrayImgUsers(){
    for(i = 0; i < imgAll.length; i++){
        for(j = 0; j < blockText.length; j++){

                
    // Перший користувач

        if(0 === currentImg){
            imgAll[0].classList.add('activeImg');
            blockText[0].classList.add('activeBlockText');
        } else{
            imgAll[0].classList.remove('activeImg');
            blockText[0].classList.remove('activeBlockText');
            }
    
    // Другий користувач

        if(1 === currentImg){
            imgAll[1].classList.add('activeImg');
            blockText[1].classList.add('activeBlockText');
        } else{
            imgAll[1].classList.remove('activeImg');
            blockText[1].classList.remove('activeBlockText');
            }

    // Третій користувач

        if(2 === currentImg){
            imgAll[2].classList.add('activeImg');
            blockText[2].classList.add('activeBlockText');
        } else{
            imgAll[2].classList.remove('activeImg');
            blockText[2].classList.remove('activeBlockText');
            }
        }
    }
}

// Пребір картинок
nextImg.addEventListener('click', function(){
    currentImg++;
    if(currentImg == 3){
        currentImg = 0;
    };

    arrayImgUsers();

});

prevImg.addEventListener('click', function(){
    currentImg--;
    if(currentImg == -1){
        currentImg = 2;
    };

    arrayImgUsers();
    
});

//--- Вибір плану

// Перемикач секції Plan

btnIndividual.addEventListener('click', function(){
    afterBlock.classList.remove('activeBtnPlan');
    blockIndividual.classList.remove('deactivated');
    blockCompany.classList.add('deactivated');
});

btnCompany.addEventListener('click', function(){
    afterBlock.classList.add('activeBtnPlan');
    blockIndividual.classList.add('deactivated');
    blockCompany.classList.remove('deactivated');
});
