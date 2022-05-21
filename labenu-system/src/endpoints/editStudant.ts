import { Request, Response } from "express";
import connection from "../connection";

export async function editStudant(
  req: Request,
  res: Response
): Promise<void> {
  const { turma_id } = req.body;

  try {
    if (turma_id) {
      await connection("Estudante")
        .update({
          turma_id: req.body.turma_id,
        })
        .where({
          id: req.params.id,
        });
      res.status(200).send({ message: "Estudante alterado com sucesso" });
    } else {
      res
        .status(500)
        .send({ message: "Ausência de informações do estudante" });
    }
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
}
