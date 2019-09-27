Array.prototype.map2 = function(callback){
    const newArray = []

    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray;
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }', 
    '{ "nome": "Caneta", "preco": 7.50 }'
];

const paraObj = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

const res = carrinho.map2(paraObj).map2(apenasPreco);
console.log(res);

//exemplii de como retornar um array com preços
//a partir de um JSON 
