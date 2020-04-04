// colocar as fotos dentro fde

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("fotos");

  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) adicionaClass(x[i], "show");
  
  }
}

// adicionar classe e jogar dentro de um array

function adicionaClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  // arr1 pega a classe do elemento, split retorna um array contendo uma string vazia
  arr2 = name.split(" ");
//  arr2 pega a classe show
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
      //  arr1 pega os elemento pela classe e pela posicao, indexOf faz uma verificação se existe a classe show no arr1
      // arr2 adiciona a classe show

      console.log(arr2);
  }
}


function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
  // join separador de itens no array
}


// ativar filter

var listaEstrutura = document.getElementsByClassName("lista__estrutura");
console.log(listaEstrutura);

var listaTrabalhos = document.getElementsByClassName("lista__trabalhos__a");
console.log(listaTrabalhos);
for (var i = 0; i < listaTrabalhos.length; i++) {
  listaTrabalhos[i].addEventListener("click", function(){
   
  });
}
