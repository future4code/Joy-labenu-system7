import { Request, Response } from "express";
import connection from "../connection";

export async function editTurma(
  req: Request,
  res: Response
): Promise<void> {
  const { modulo } = req.body;

  try {
    if (modulo) {
      await connection("Turma")
        .update({
          modulo: req.body.modulo,
        })
        .where({
          id: req.params.id,
        });
      res.status(200).send({ message: "Modulo da turma atualizado!" });
    } else {
      res
        .status(500)
        .send({ message: "Ausência de informações da turma" });
    }
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
}
