let clienteController = new ClienteController();
const clientes = new Clientes();
const cliente1 = new Cliente("Júlio", "12345");
const cliente2 = new Cliente("Thiago", "98765");
const cliente3 = new Cliente("Ana", "54321");
clientes.inserir(cliente1);
clientes.inserir(cliente2);
clientes.inserir(cliente3);
console.log("listar");
clientes.ToString();
console.log("remover");
clientes.remover(cliente1.cpf);
clientes.ToString();
console.log("pesquisar");
console.log(clientes.pesquisar("54321"));
