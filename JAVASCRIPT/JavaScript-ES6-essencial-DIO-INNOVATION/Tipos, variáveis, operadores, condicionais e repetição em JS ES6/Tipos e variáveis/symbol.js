const symbol1 = Symbol('name');
const symbol2 = Symbol('name');

// Symbols são unicos
console.log('symbol1 é igual a symbol2:', symbol1 === symbol2);

// Prevenir conflito entre nomeds de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Lázaro',
    [nameSymbol2]: 'Outro nome',
    lastName: 'Pimentel Bonfim'
}

console.log(user);

//Symbols cria propriedades que não são enumberables
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`\nValor da chave ${key}: ${user[key]}`);
    }
}

console.log('Propriedades do objeto user:', Object.keys(user));
console.log('Valores das propriedades do objeto user:', Object.values(user));

//Exibir symbols de um objeto
console.log('Symbols registrados no objeto user:', Object.getOwnPropertySymbols(user));

//Acessando todas as propriedades do objeto
console.log('Todas propriedades do objeto user:', Reflect.ownKeys(user));

//Criar um enum
const direction = {
    UP   : Symbol('UP'),
    DONW : Symbol('DOWN'),
    LEFT : Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
};