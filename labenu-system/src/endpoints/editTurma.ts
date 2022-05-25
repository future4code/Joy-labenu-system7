import { Request, Response } from "express";
import connection from "../connection";
import {Turma} from "../classes/Turma"
import { updateTurma } from "../queries/updateTurma";

export const editTurma = async(
  req: Request,
  res: Response
): Promise <void> => {
  try {
    const { modulo } = req.body

    if(!modulo){
      res.statusCode = 400
      throw new Error("  selecione um 'modulo' para atualizar a turma");
    }

    const newModulo: Turma = {
      modulo
    }

    await updateTurma(newModulo)

    res.status(201).send("Turma atualizada com sucesso!")
  } catch (error: any) {
    res.status(500).send({
      message: error.message
    });
  }
}


