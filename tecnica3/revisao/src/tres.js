"use strict";
class Cliente {
    constructor(nome, email, nasc) {
        this.nome = nome;
        this.email = email;
        this.nasc = nasc;
    }
    imprimir() {
        console.log(`Nome: ${this.nome}, Email: ${this.email}, Nascimento: ${this.nasc}, Idade: ${this.idade(this.nasc)} anos`);
    }
    idade(nasc) {
        const hoje = new Date();
        const ano = parseInt(nasc.substring(6, 10));
        const mes = parseInt(nasc.substring(3, 5)) - 1;
        const dia = parseInt(nasc.substring(0, 2));
        const datan = new Date(ano, mes, dia);
        let idade = hoje.getFullYear() - datan.getFullYear();
        const m = hoje.getMonth() - datan.getMonth();
        if (m < 0 || (m === 0 && hoje.getDate() < datan.getDate())) {
            idade--;
        }
        return idade;
    }
}
const colaborador = new Cliente("Stefan", "stefancruz@neymar", "02/12/2005");
colaborador.imprimir();
