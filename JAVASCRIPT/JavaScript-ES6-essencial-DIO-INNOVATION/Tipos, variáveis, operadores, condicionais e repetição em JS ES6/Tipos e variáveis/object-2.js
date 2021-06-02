//Recupera as chaves do objeto
console.log('Propriedade do objeto user:', Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

//Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores:', Object.entries(users));

//Mergear propriedades de objetos
Object.assign(user, {fullName: 'Lázaro Pimentel Bonfim'});

console.log('\n Adiciona a propriedade fullName no objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age:24}));

// Previne todas as alterações em um objeto
const newObj = { foo: 'bar'};
Object.freeze(newObj); // o freeze congela tudo, não permite alterar/criar/remover propriedades

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações:', newObj);

//Permite apenas a alteração de propriedades existentes em um objeto
const person = {name: 'Lázaro'};
Object.seal(person); //O seal permite trocar o valor que já existe em nele, mas permite que cria/delete.

person.name = 'Lázaro Pimentel';
delete person.name;
person.age =24;

console.log('\nVarável person após as alterações:'. person);

