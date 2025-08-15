class Pessoaa {
    nome: string;
    email: string;

    constructor(nome:string, email:string){
        this.nome = nome;
        this.email = email;
    }

    imprimir():void {
        console.log(`Nome: ${this.nome}, Email: ${this.email} `);
    }
}

const pessoaa = new Pessoaa("Stefan","stefancruz08@gmail.com");

pessoaa.imprimir();