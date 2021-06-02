function Pessoa() {
    if (!Pessoa.instance) {
        Pessoa.instance = this;
    }

    return Pessoa.instance;
}
const p = Pessoa.call({name: 'Lázaro'});

const p2 = Pessoa.call({})

console.log(p);
console.log(p2);