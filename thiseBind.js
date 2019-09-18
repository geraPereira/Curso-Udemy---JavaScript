const pessoa = {
    saudacao: "Bom dia!",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar;
falar()

const falarP = pessoa.falar.bind(pessoa)

falarP()
