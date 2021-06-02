//prototype

'use strict';

const myText = String('Heelo prototype!');

console.log(myText.__proto__.split); //ou
console.log(String.prototype.split);
//f split() { [native code]}

console.log(myText.__proto__.split === String.prototype.split)
//true

console.log(myText.constructor === String);
//true

//const myText = String('Heelo prototype!');
myText.constructor = String
myText.__proto__ = String.prototype

//Exemplo com New Foo
