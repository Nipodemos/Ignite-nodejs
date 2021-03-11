const express = require("express");
const { v4: uuidv4 } = require("uuid");

const server = express();
const customers = [];
server.use(express.json());

/**
 * cpf  - string
 * name - string
 * id - uuid
 * statement []
 */
server.post("/account", (request, response) => {
  console.log("request :>> ", request);
  const { cpf, name } = request.body;

  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );

  if (customerAlreadyExists) {
    return response.status(400).json({ error: "Customer already exists" });
  }

  customers.push({
    id: uuidv4(),
    name,
    cpf,
    statement: [],
  });

  return response.status(201).json(customers[customers.length - 1]);
});

server.get("/statement/:cpf", (request, response) => {
  const { cpf } = request.params;
  // console.log("all customers :>> ", customers);
  const customer = customers.find((customer) => customer.cpf === cpf);

  return response.json(customer.statement);
});

server.listen(3333, () => {
  console.log("Servidor aberto em: http://localhost:3333");
});