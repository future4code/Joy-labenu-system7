import { Request, Response } from "express";
import connection from "../connection";

// não ta funcionando também 

export async function changeDocente(
  req: Request,
  res: Response
): Promise<void> {
  const { turma_id } = req.body;

  try {
    if (turma_id) {
      await connection("Docentes")
        .update({
          turma_id: req.body.turma_id,
        })
        .where({
          id: req.params.id,
        });
      res.status(200).send({ message: "Alteração realizada com sucesso" });
    } else {
      res.status(500).send({ message: "Informações inválidas para conclusão da alteração" });
    }
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
}
