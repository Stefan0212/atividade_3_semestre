"use strict";
class PessoaIdade {
    constructor(nome, email, nasc) {
        this.nome = nome;
        this.email = email;
        this.nasc = nasc;
    }
    print() {
        console.log(`nome: ${this.nome}, email: ${this.email}, nasc: ${this.nasc}`);
    }
}
const cliente = new PessoaIdade("Stefan", "stefancruz@neymar", 2005);
cliente.print();
