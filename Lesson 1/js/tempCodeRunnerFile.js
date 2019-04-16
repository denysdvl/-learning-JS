
let a = {
    h:400,
    c:200
};

let f = {
    h:100
};

f.__proto__ = a;

console.log(f);
console.log(f.c);