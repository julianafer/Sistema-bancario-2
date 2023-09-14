class Cliente {

    private _nome: string;
    private _cpf: string;
    private _conta: Array<Conta>;

    constructor(nome: string, cpf: string) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = new Array<Conta>();
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

    get conta() {
        return this._conta;
    }

    set conta(conta: Conta) {
        this._conta = conta;
    }

}