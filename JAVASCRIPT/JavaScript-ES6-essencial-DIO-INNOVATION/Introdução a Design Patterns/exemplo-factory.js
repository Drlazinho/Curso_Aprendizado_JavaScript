function Pessoa(custonProperties) {
    return {
        name: 'Lázaro',
        lastname: 'Pimentel',
        ...custonProperties
    }
}

const p = Pessoa({name: 'Custon Name', age: 24});
console.log(p);