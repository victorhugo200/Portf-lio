// 1-Selecionar elementos que devem ser animados
// 2- definir a classe que deve ser adicionada a animacao
// 3- criar função de animacao
// 3.1 - verificar  a distancia do scrolle o topo do site
// 3.2 - verificar a distancia do 3.1 + offset é maior que a distancia entre elemnto e o topo da pagina
// 4 - ativar animação quando der scroll
// 5 - Otimizar a animação


const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args){

        const context = this;
        const later = function(){
            timeout = null;
            if(!immediate) func.apply(context,args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(cotext,args);
    };
};





const target = document.querySelectorAll('[data-animacao]');

const animationClass = 'animate';


function animeScroll() {
    const windowTop  = window.pageYOffset + ((window.innerHeight * 3)/ 4);

    target.forEach(function(element){
        if((windowTop) > element.offsetTop) {

            element.classList.add(animationClass);
        }
        else {
            element.classList.remove(animationClass);
        }

    })
}

animeScroll();


if(target.length){
    
    window.addEventListener('scroll', debounce(function(){
        animeScroll();
       
    }, 100));
}


