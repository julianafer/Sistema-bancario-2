class ClienteEspecial extends Cliente {

    private _dependentes: Array<Cliente>;

    constructor(nome: string, cpf: string) {
        super(nome, cpf);
    }

    get dependentes() {
        return this._dependentes;
    }

    set dependentes(dependentes: Array<Cliente>) {
        this._dependentes = dependentes;
    }

}