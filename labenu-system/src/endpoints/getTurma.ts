import { Request, Response } from "express";
import connection from "../connection";
import { selectTurma } from "../queries/selectTurma"


export const getTurma = async(
  req: Request,
  res: Response
): Promise <void> => {
  try {


      const turma = await selectTurma()


      if(turma.length < 1) {
          res.statusCode = 404
          throw new Error("Não existem Turmas!");
      }

      res.status(200).send(turma)
  } catch (error: any) {
      res.status(500).send({
          message: error.message
        });
  }
}