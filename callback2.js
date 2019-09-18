const notas = [7.7, 6.5, 7.8, 3.4, 1.0, 5.6, 6.0, 9.0];

let notasBaixas1 = [];
for (let i in notas){
    if(notas[i]<7){
        notasBaixas1.push(notas[i]);
    }
}
console.log(notasBaixas1);

notasBaixas2 = notas.filter(function(nota) {
    return nota < 7
})
console.log(notasBaixas2);

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3);