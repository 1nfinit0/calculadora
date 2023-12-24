//document es la representación del archivo html que proporciona el navegador, como es 
//el obejto que se utiliza para manipular el DOM, es en parte posible decir que document es el DOM

//addEventListener es un método que permimte ejecutar algo cuando ucurra un evento

//DOMContentLoaded es un evento que se dispara cuando el documento html se ha cargado completamente, es decir, cuando el navegador ha terminado de construir el DOM

//function es una palabra reservada de javascript que permite definir una función

document.addEventListener('DOMContentLoaded', function () {
  //Creando el buffer principal, que contendrá las primera entrada de la calculadora
  let buffer = [0];
  displayR = document.getElementsByClassName('display__resultado')[0];
  numbers = document.getElementsByClassName('number')
  
  Array.from(numbers).forEach(function (element) {
    element.addEventListener('click', function () {
      const valor = element.textContent;
      buffer.push(valor);
      displayR.innerHTML = parseInt(buffer.join(''));
    });
  });
    

  // //recorriendo la constante keys con un ciclo for
  // number.forEach(function (element) {
  //   element.addEventListener('click', function () {
      

  //   });
  // })
});
