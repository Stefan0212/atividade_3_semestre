class DataUtil {

    static isBissexto(ano: number): boolean {
        if (ano % 400 == 0) {
            return true;
        } else if (ano % 4 == 0 && ano % 100 != 0) {
            return true;
        }
        return false;
    }
}


// class Clientes com anos bissextos inplementado

class Clientes {
    nome: string;
    email: string;
    nasc: string;

    constructor(nome: string, email: string, nasc: string) {
        this.nome = nome;
        this.email = email;
        this.nasc = nasc;
    }

    imprimir(): void {
        console.log(`Nome: ${this.nome}, Email: ${this.email}, Nascimento: ${this.nasc}, Idade: ${this.idade(this.nasc)} anos`);
        console.log(`Anos Bissextos: ${this.numBissextos()}`);
    }

    public idade(nasc: any): number {
        const hoje = new Date();
        const ano: number = parseInt(nasc.substring(6, 10));
        const mes: number = parseInt(nasc.substring(3, 5)) - 1;
        const dia: number = parseInt(nasc.substring(0, 2));
        const datan = new Date(ano, mes, dia);
        let idade: number = hoje.getFullYear() - datan.getFullYear();
        const m: number = hoje.getMonth() - datan.getMonth();
        if (m < 0 || (m === 0 && hoje.getDate() < datan.getDate())) {
            idade--;
        }
        return idade;
    }

    public numBissextos() {
        const ano: number = parseInt(this.nasc.substring(6, 10));
        const hoje = new Date();
        const anoatual = hoje.getFullYear();
        let quant: number = 0;
        for (let x = ano; x <= anoatual; x++) {
            if (DataUtil.isBissexto(x)) {
                //console.log(x);
                quant++
            }
        }
        return quant;
    }
}

const colaboradores = new Clientes("Stefan", "stefancruz@neymar", "02/12/2005");

colaboradores.imprimir();
