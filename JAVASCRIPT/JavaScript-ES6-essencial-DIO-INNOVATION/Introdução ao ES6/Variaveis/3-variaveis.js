const name = 'Lázaro';

//não podemos alterar o valor
//name = 'Lázaro';

const user = {
    name: 'Lázaro' //Você pode não mudar a const, mas o valor dentro da função
};

//Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Outro nome';

//Não podemos fazer o objeto "apontar" para outro lugar
//user = {
//    name: 'Lázaro'
//};

const persons = ['Lázaro', 'Pedro', 'Jennifer'];

//Podemos adicionar novos itens
persons.push('João');
//['Lázaro', 'Pedro', 'Jennifer', 'João']

//Podemos remover algum item
persons.shift(); //Removeu o primeiro (Lázaro)
// ['Pedro', Jennifer, João]

//Podemos alterar diretamente
persons[1] = 'James';
// ['Pedro','James', 'João']

console.log('\nArray após as alterações: ', persons);
console.log("")