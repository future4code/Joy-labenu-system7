import { Request, Response } from "express";
import { Studant } from "../classes/Studant";
import { insertStudant } from "../queries/insertStudant";

export const createStudant = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = Date.now().toString();
  const { nome, email, data_nasc, turma_id } = req.body;

  try {
    // usando o query builder
    if (nome && email && data_nasc && turma_id) {
      const newStudant: Studant = {
        id,
        nome,
        email,
        data_nasc,
        turma_id,
      };

      await insertStudant(newStudant);

      // await connection("Estudante").insert({
      //   id,
      //   nome: req.body.nome,
      //   email: req.body.email,
      //   data_nasc: req.body.data_nasc,
      //   turma_id: req.body.turma_id,
      // });
      res.status(201).send({ message: "Estudante inserido com sucesso" });
    } else {
      res.status(500).send({
        message: "Ausência de informações no cadastro do estudante",
      });
    }
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
};
