// Spread ...
var partes = ['ombro', 'joelho'];
var musica = ['cabeca',...partes, 'e', 'pés'];
//Esta retornando isso aqui
//var musica = ['cabeca','ombro', 'joelho', 'e', 'pés'];

function fn(x, y, z){}
var args = [0,1,2];
fn (...args);
//Está fazendo isso aqui =>  x = 0, y = 1, z = 2