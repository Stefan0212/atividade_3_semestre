"use strict";
class Pessoaa {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    imprimir() {
        console.log(`Nome: ${this.nome}, Email: ${this.email} `);
    }
}
const pessoaa = new Pessoaa("Stefan", "stefancruz08@gmail.com");
pessoaa.imprimir();
