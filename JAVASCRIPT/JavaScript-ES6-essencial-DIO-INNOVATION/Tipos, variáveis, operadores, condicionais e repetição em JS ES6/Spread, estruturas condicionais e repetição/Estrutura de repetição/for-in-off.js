let arr = [3, 5, 7];
arr.foo ="Hello";

for (let i in arr) {
    console.log(i);  // log  "0", "1","2", "foo"
}

for (let i of arr) {
    console.log(i); // lista todos os elementos --- log "3", "5", "7"
}