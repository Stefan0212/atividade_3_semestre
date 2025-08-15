class PessoaIdade {
    nome: string;
    email: string;
    nasc: number;

    constructor(nome:string, email:string, nasc:number){
        this.nome = nome;
        this.email = email;
        this.nasc = nasc;
    }

    print ():void {
        console.log(`nome: ${this.nome}, email: ${this.email}, nasc: ${this.nasc}`);
    }
}

const cliente = new PessoaIdade("Stefan", "stefancruz@neymar", 2005);

cliente.print();