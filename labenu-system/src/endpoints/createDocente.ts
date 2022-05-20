import { Request, Response } from "express";
import connection from "../connection";
import { v4 as generateId } from "uuid";

export async function createDocente(
  req: Request,
  res: Response
): Promise<void> {
  const id = generateId();
  const { nome, email, data_nasc, turma_id } = req.body;

  try {
    if (nome && email && data_nasc && turma_id) {
      await connection("Docentes")
      .insert({
        id,
        nome: req.body.nome,
        email: req.body.email,
        data_nasc: req.body.data_nasc,
        turma_id: req.body.turma_id
      });
      res.status(201).send({ message: "Docente inserido com sucesso" });
    } else {
      res.status(500).send({ message: "Informações inválidas para conclusão do cadastro" });
    }
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
}
