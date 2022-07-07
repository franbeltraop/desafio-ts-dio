let funcionario = {
  codigo: 10,
  nome: "Jhon"
};

let funcionario2 : {codigo: number, nome: string} = {
  codigo: 10,
  nome: "Jhon"
};

interface Funcionario {
  codigo: number,
  nome: string
};

let funcionario3 : Funcionario = {
  codigo: 200,
  nome: "Will"
};

let funcionario4 = {} as Funcionario;
funcionario4.codigo = 10;
funcionario4.nome = "Mark";

