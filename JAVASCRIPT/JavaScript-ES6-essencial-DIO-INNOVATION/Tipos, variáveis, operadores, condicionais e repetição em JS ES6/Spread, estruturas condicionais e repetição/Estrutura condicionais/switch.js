const fruta = 'banana';

switch (fruta) {
    case 'banana' :
    console.log ('R$: 3,00 /Kg');
    break; // pausar
    case 'mamao':
    case 'pera':
    console.log ('R$: 2,00 /Kg');
    break;
    default: // caso passa uma fruta que não existe retorna o default
    console.log ('Produto não existe no estoque');
    break;
}// lembrese de colocar o break se não retornara erro ou default.