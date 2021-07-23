//Symbols
//Simbol nunca é igual ao outro, ele é um identificador único, não sendo uma string ou array.
const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');
console.log(uniqueId === uniqueId2) //false
const obj = {
    [uniqueId]: 'Hello'
}
console.log(obj); //{ [Symbol(Hello)]: 'Hello' }
//---Well know symbols--------------------------- 
Symbol.iterator
Symbol.split
Symbol.toStringTag
const obj2 = {
    [Symbol.iterator](){}
}
console.log(obj2); // { [Symbol(Symbol.iterator)]: [Function: [Symbol.iterator]] }
const arr = [1,2,3,4]
const it = arr[Symbol.iterator]()
while(true) {
    let {value, done} = it.next()
    if (done) {
        break;
    }
}
console.log(it.next());
//-------------ou----------------
for(let value of arr) {
    console.log(value) // 1,2,3,4
}
//-------------------------
const str = 'Digital Innovation One'
const obj3 = {
    values: [1,2,3,4],
    [Symbol.iterator](){
            let i = 0;

            return {
                next: () => {
                    i++;
                    return {
                        value: this.values[i -1],
                        done: i > this.values.length
                    }
                }
            }
    }
}
const arr2 = [...obj3]