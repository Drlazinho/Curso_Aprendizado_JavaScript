var arr = ['Apple', 'Banana', 'Orange',['Tomato']];
var apple = arr[0];
var banana = arr[1];
var orange = arr[2]
var tomato = arr[3][0];

//Destructuring Assignment

var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['tomato']];
console.log(tomato2); //tomato

//--------------------------------------
var arr = [{ name: 'Apple', type:'fruit'}]
var obj = {
    name: 'Caelso', props: {
        age:26,
        favoriteColors: ['black', 'blue']
    }
};
var fruit1 = arr[0].name;
//var age = obj.props.age;
//Destructuring Assignment
var [{name: fruitName}] = arr;

// functions antiga
function sum(arr) {
    var a = arr[0]
    var b = arr[1]
    return arr[0] + arr[1]
}
console.log(sum([5,5]));

// functions nova
function sum2([c, d] = [4,5]){
    return c + d;
}
console.log(sum2())