//Retorna o tamanho de uma string, quantidade de caracteres que tem na string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

// Retorna um array quebrando a string por um delimitador
const splittedText = 'Text'.split('x');
console.log(`\nArray com as posições separadas pelo delimitador:`, splittedText);

//Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT');
console.log(`\nSubstituição de valor:`, replacedText);

//Retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1);
console.log(`\nÚltima letra de uma string:`, lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log(`\nValor da string da primeira letra menos a última`, allWithoutLastChar);

const secondToEnd = 'Texo'.slice(1);
console.log(`\nValor da string da segunda letra até a última:`, secondToEnd);

//  Retonr N caracters a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('\nAs duas letras primeiras são:', twoCharsBeforeFirstPos);