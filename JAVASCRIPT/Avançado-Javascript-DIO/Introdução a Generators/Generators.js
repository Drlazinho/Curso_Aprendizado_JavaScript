//Generators
//
function* hello(){
    console.log('Hello');
    yield 1;
    console.log('From');
    yield 2;
    console.log('Function!');
}
const it = hello();
console.log(it.next)
//---------------------------
const obj = {
    values: [1,2,3,4],
    *[Symbol.iterator]() {
        for(var i= 0; i < this.values.length; i++) {
            yield this.values[1];
        }
    }
};
for (let value of obj) {
    console.log(value);
}