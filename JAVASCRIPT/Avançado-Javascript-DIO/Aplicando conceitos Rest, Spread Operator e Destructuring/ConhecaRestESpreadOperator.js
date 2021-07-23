//Forma Antiga
// function sum (a,b) {
//     var value = 0;
//     for (var i = 0; i < arguments.length; i++){
//         value += arguments[i];
//     }

//     return value
// }
// console.log(sum(5, 5, 5, 2, 3))
//Nova Forma------Rest operato...
// function sum (...args) {
//     console.log(args) //return array
//     console.log(arguments) //return objeto
//     return args.reduce((acc, value) => acc + value, 0) //return a soma total
// }
// console.log(sum(5, 5, 5, 2, 3))
//trabalho Array Function em Rest Operator
// const sum = (a, b, ...rest) => {
//     console.log(a,b,rest)
// }
// console.log(sum(5, 5, 5, 2, 3))

//----RestOperato se refere aos 3 pontos no parametros-------
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
const sum = (...rest) => {
    return multiply.apply(undefined, rest);
};
console.log(sum(5,5,5,2,3))//750

//----Spread operator ...--------
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
const sum = (...rest) => {
    return multiply(...rest);
};
console.log(sum(5,5,5,2,3))//750

//--------------------
//Spread funciona em string, arrays, literals objetcs e objetos iteraveis
const str = 'Digital Innovation One';
function logArgs(...args) {
    console.log(args);
}
logArgs(...str); //Um array de letras de str

//-------Usando Arguments----------
const str = 'Digital Innovation One';
function logArgs() {
    console.log(arguments);
}
logArgs(...str); //Um array em lista de letras de str

//----------------------------------
const str = 'Digital Innovation One';
const arr = [1,2,3,4];
function logArgs(a,b,c) {
    console.log(a,b,c);
}
logArgs(...arr); //cada item entrar como argumento

//----------------------------------
const str = 'Digital Innovation One';
const arr = [1,2,3,4];
function logArgs(a,b,c) {
    console.log(a,b,c);
}
const arr2 = arr.concat([5,6,7]);
console.log(arr2); // um array combinado

//----------------------------
const str = 'Digital Innovation One';
const arr = [1,2,3,4];
function logArgs(a,b,c) {
    console.log(a,b,c);
}
const arr2 = [5,6,7, ...arr];
const arr3 = [...arr2, ...arr, 0 , 12]
console.log(arr3); // um array combinado

//----------Arry Clonado-------
const str = 'Digital Innovation One';
const arr = [1,2,3,4];
function logArgs(a,b,c) {
    console.log(a,b,c);
}
const arrClone = [...arr];
console.log(arrClone); // um array 
//------Objetos iterais-------
const obj = {
    test: 123
};
const obj2 = {
    ...obj,
    test2: "hello"
}
console.log(obj2);
//Não pode usar spread em objetos não iteraveis,a não ser para construir novos objetos
//-----------------------------
const obj = {
    test: 123
};
const obj2 = {
    test:456,
    ...obj
};
const objMerged = {
    ...obj, ...obj2
}
console.log(obj2) // sai o útlimo valor declarado
console.log(objMerged) //A ordem importa
//----------Clonar objets------
const obj = {
    test: 123
};
const obj2 = obj;
obj2.test = 456;
console.log(obj); //456
//----------------------------
const obj = {
    test: 123,
    subObj: {
        test: 123
    }
};
const obj2 = {...obj, subObj: {...obj.subObj}};
obj2.subObj.test = 456;
console.log(obj);
//---------------------------






// function sum (a,b) {
//     console.log(arguments);
//     return a + b;
// }
// console.log(sum(5, 5, 5, 2, 3))

