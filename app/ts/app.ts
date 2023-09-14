let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

/* ================= */

const clientes = new Clientes();

const cliente1 = new Cliente("Júlio", "12345", c1);
const cliente2 = new Cliente("Thiago", "98765", p1);
const cliente3 = new Cliente("Ana", "54321", cb1);

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