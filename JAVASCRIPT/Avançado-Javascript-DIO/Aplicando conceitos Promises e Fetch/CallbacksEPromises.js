//Forma antiga, no entanto quando for pra resolver um erro, o código fica muito sujo.
function doSomething(callback) {
    setTimeout(function() {
        // did something
        callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function() {
        //did other thing
        callback('Second data');
    }, 1000);
}
// Nova forma utilizando Promisse
//Fazer ambas as coisas // forma antiga
const doSomethingPromise = () => 
    new Promise((resolve, reject) => {
        setTimeout(function(){
            //did something
            resolve('First data');
        }, 1000);
});

const doOtherThingPromise = () =>   
    new Promise((resolve, reject) => {
    setTimeout(function(){
        //did other thing
        resolve('Second data');
    }, 1000);
});
//Executando as duas ao mesmo tempo
Promise.all([doSomethingPromise(), doSomethingPromise()]).then((data => {console.log(data)}))

//Executando multiplataformas, mas imprimindo que sai primeiro
Promise.race([doSomethingPromise(), doSomethingPromise()]).then((data => {console.log(data)}))

//Executando 1 por 1
doSomethingPromise()
    .then(data => { 
        console.log(data.split(''));
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', error));
// Uma Promisse pode ter 3 status
//Pending - quando está em execução
//Fulfilled - quando já terminou de executar
//Rejected - quando deu erro na execução
