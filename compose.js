const func1 = param1 => console.log("func1", param1);
const func2 = param2 => console.log("func2", param2);

const compose = (param1, param2) => {
    func1(param1);
    func2(param2);
}
//compose ("Gera", "GG")
const compose2 = (...fns) => (...args) =>{//resto dos parâmetros
    //console.log(fns);
    fns.forEach(fn => fn(...args))
}

//compose2(func1, func2)("Gera");

const func3 = compose2(func1, func2);
func3("Gera", "P")
func3("123", "1234")