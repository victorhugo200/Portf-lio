let name = document.querySelector('.input__name');
let email = document.querySelector('.input__email');
let subject = document.querySelector('.input__subject');
let message = document.querySelector('.text__message');
let botao= document.querySelector('.get__botao');
let infoUser = [];




botao.addEventListener('click', function(event){
event.preventDefault();


function dadosUser() {
    for(let i = 0; i >= infoUser.lenght ; i++){

    }
    let dados = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    };
    
    infoUser.push(dados);
    
        name.value = '';
        email.value = '';
        subject.value = '';
        message.value = ''; 
    
}
return dadosUser();


})

