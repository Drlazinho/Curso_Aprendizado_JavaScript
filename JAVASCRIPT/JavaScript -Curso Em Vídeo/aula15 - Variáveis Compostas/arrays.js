let num = [5, 8, 2, 9, 3]
num[2] = 6 //adiciona ou altera um elemento, adiciona se o numero do elemento ainda não está no array nesse caso o [5].
num.push(4) //O "push" este comando é pra adicionar um elemento na ultima posição
num.length //"length" conta os elementos
num[num.length-1] // O último elemento do array
console.log(`Nosso vetor é o ${num} e tem ${num.length} posições.`)
console.log(`O 1º valor do vetor é ${num[0]}`)
console.log('')

num.sort() //organizar os elementos em ordem
console.log(`Nosso vetor é o ${num} e tem ${num.length} posições.`)
console.log(`O 1º valor do vetor é ${num[0]}`)
console.log('')

let pos = num.indexOf(4) // o indexof serve para encontrar o valor no array, se o valor não for encontrado ele retornará -1 do array.
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}
console.log(`O valor está na posição ${pos}`)

