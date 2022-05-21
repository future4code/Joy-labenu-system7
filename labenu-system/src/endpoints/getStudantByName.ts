import { Request, Response } from "express";
import connection from "../connection";

export const getStudantByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  const nome = req.params.nome;
  try {
    const result = await connection("Estudante")
      .leftJoin("Turma", "Estudante.turma_id", "Turma.id")
      .select("Estudante.*", "Turma.id")
      .where({ "Estudante.nome": nome });
    if (result) {
      console.log("Estudante encontrado");
      res.status(200).send(result[0]);
    } else {
      res.status(500).send({
        message: "Estudante não encontrado",
      });
    }
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
};
