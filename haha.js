function f1() { }

const f2 = function() {}

const array = [function (a, b) {return a+b}, f1, f2]
console.log(array[0] (2, 3))

const obj = {}
obj.falar = function (){return "Opa"}
console.log(obj.falar())