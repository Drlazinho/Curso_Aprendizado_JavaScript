// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//Arrow Function
//Forma antiga de função
let soma = function(a, b) {
  return a + b
}
console.log(soma(10, 22))

//Nova forma de Function usando Arrow Function
let novasoma = (d, e) => d + e
console.log(novasoma(45, 5))
//Se a função tiver apenas 1 argumento, pode omitir os paranteses
let umasoma = f => 5
console.log(umasoma)

//Declaração de objeto com arrow function
var createObje = () => ({test:123})
console.log(createObje())

//Antiga forma com funções construtoras, ainda permanece.
function car() {
  this.foo = "bar"
}
console.log(new car());

//Função hosting - chamar a função antes da Declaração usando o Arrow Function
log('teste');
var log = value => {
  console.log(value)
}