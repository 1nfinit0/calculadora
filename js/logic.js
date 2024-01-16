//document es la representación del archivo html que proporciona el navegador, como es 
//el obejto que se utiliza para manipular el DOM, es en parte posible decir que document es el DOM

//addEventListener es un método que permimte ejecutar algo cuando ucurra un evento

//DOMContentLoaded es un evento que se dispara cuando el documento html se ha cargado completamente, es decir, cuando el navegador ha terminado de construir el DOM

//function es una palabra reservada de javascript que permite definir una función
let buffer = [0];

document.addEventListener('DOMContentLoaded', function () {
  //Creando el buffer principal, que contendrá las primera entrada de la calculadora
  displayR = document.getElementsByClassName('display__resultado')[0];
  numbers = document.getElementsByClassName('number');
  del = document.querySelectorAll('.delete')[0];
  clean = document.querySelectorAll('.clean')[0];
  
  Array.from(numbers).forEach(function (element) {
    element.addEventListener('click', function () {
      const valor = element.textContent;
      buffer.push(valor);
      bufferValor = parseInt(buffer.join(''));
      if (buffer.length > 0) {
        displayR.innerHTML = bufferValor;
      }
    });
  });

  del.addEventListener('click', function () {
    buffer.pop();
    bufferValor = parseInt(buffer.join(''));
    if (buffer.length === 1) {
      displayR.innerHTML = '';
    } else {
      displayR.innerHTML = bufferValor;
    }
  });

  clean.addEventListener('click', function () {
    buffer = [0];
    displayR.innerHTML = '';
  });
  
});
