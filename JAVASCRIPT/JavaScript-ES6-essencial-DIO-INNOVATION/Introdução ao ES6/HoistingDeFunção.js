function fn() {
    function log(value) {
        console.log(value);
    }

    log('Hoisting de função')
}

fn();

//É uma boa pratica declarar uma função antes de usar!!
// O hoisting de função permite chamar a função antes de ser declarada!!