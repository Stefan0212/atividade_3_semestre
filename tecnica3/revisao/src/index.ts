class Pessoa {
    nome: string;
    email: string;

    constructor(nome:string, email:string) {
        this.nome = nome;
        this.email = email;
    }
}

const pessoa = new Pessoa("Stefan","stefancruz08@gmail.com");

console.log(pessoa);

