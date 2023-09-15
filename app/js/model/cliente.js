class Cliente {
    constructor(nome, cpf) {
        this._nome = nome;
        this._cpf = cpf;
        this._contas = new Array();
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
    get contas() {
        return this._contas;
    }
    set contas(contas) {
        this._contas = contas;
    }
    toString() {
        return `Nome: ${this._nome} 
        - CPF: ${this._cpf}`;
    }
}
