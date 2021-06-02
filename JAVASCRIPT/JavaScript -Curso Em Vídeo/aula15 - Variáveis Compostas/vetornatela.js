let valores = [8, 5, 4, 3, 9, 1]

console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/*
for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    // é a forma classica de recurso de precursores
    //console.log(valores[pos])
}
*/

// este código tem a mesma funcionalidade da de cima,
// No entanto é a forma mais simplificada e atualizada.
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
