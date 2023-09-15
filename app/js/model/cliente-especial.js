class ClienteEspecial extends Cliente {
    constructor(nome, cpf) {
        super(nome, cpf);
    }
    get dependentes() {
        return this._dependentes;
    }
    set dependentes(dependentes) {
        this._dependentes = dependentes;
    }
}
