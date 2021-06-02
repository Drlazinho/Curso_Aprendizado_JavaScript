var test = 'example';

(() => {
    var test;
    console.log(`Valor dentro da função "${teste}"`)

    if(true) {
        test = 'example';
        console.log(`Valor dentro do if "${teste}"`)
    }

    console.log(`Valor após a execução do if "${teste}"`)
})();