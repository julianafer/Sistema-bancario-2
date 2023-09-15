class Cliente {

    private _nome: string;
    private _cpf: string;
    private _contas: Array<Conta>;

    constructor(nome: string, cpf: string) {
        this._nome = nome;
        this._cpf = cpf;
        this._contas = new Array<Conta>();
    }

    get nome() {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(cpf: string) {
        this._cpf = cpf;
    }

    get contas() {
        return this._contas;
    }

    set contas(contas: Array<Conta>) {
        this._contas = contas;
    }

    toString(): string {
        return `Nome: ${this._nome} 
        - CPF: ${this._cpf}`;
    }

}