class ClienteController {
    constructor() {
        this.inputNome =
            document.querySelector("#nome");
        this.inputCpf =
            document.querySelector("#cpf");
        this.inputConta =
            document.querySelector("#conta");
        this.clientes = new Clientes();
    }
}
