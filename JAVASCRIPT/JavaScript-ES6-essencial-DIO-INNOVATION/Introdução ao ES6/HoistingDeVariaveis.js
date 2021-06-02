//significa levantar ou suspender algo
function fn() {
    //Se uma variável for declarada e inicializada após usá-la, o valor será undefined
    console.log(text);
    
    var text = 'Exemplo';
    //Se você declarar a variável depois que ela for usada, mas inicializá-la antecipadamente, ela retornará o valor 
    console.log(text);
}
fn();