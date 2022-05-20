import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();
app.use(express.json());
app.use(cors());

//ENDPOINT TESTE CONEXAO
app.get("/", (req: Request, res: Response) => {
  res.status(201).send("Hello from Express");
});

//INSERE ESTUDANTE NA TABELA
app.post(
  "/addEstudante",
  async (req: Request, res: Response): Promise<void> => {
    const id = Date.now().toString();
    const { nome, email, data_nasc, turma_id } = req.body;

    try {
      // usando o query builder
      if (nome && email && data_nasc && turma_id ) {
        await connection("Estudante").insert({
          id,
          nome: req.body.nome,
          email: req.body.email,
          data_nasc: req.body.data_nasc,
          turma_id: req.body.turma_id,
        });
        res.status(201).send({ message: "Estudante inserido com sucesso" });
      } else {
        res.status(500).send({ message: "Ausência de informações no cadastro do estudante" });
      }
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  }
);

//BUSCAR ESTUDANTE PELO NOME
app.get("/estudante/:nome", async (req: Request, res: Response): Promise<void> => {
  try {
    // usando o query builder
    const result = await connection("Estudante").where({
      nome: req.params.nome,
    });
    console.log(result);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

//EDITAR TURMA DO ESTUDANTE
app.put(
  "/estudante/edit/:id",
  async (req: Request, res: Response): Promise<void> => {
    const { turma_id } = req.body;

    try {
      if (turma_id ) {
        // usando o query builder
        await connection("Estudante")
          .update({
            turma_id: req.body.turma_id,
          })
          .where({
            id: req.params.id,
          });
        res.status(200).send({ message: "Estudante editado com sucesso" });
      } else {
        res.status(500).send({ message: "Ausência de informações do estudante" });
      }
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  }
);

//BUSCAR TODOS OS ESTUDANTES
app.get("/estudantes/", async (req: Request, res: Response): Promise<void> => {
  try {
    // usando o query builder
    const result = await connection("Estudante")
    console.log(result);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in https://localhost:${address.port}`);
  } else {
    console.error(`Server is not running in https://localhost`);
  }
});
