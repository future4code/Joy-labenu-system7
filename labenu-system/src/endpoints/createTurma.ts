import { Request, Response } from "express";
import {v4 as uuid} from "uuid"
import {Turma} from "../classes/Turma"
import { insertTurma } from "../queries/insertTurma";

export const createTurma = async(
  req: Request,
  res: Response
): Promise <void> => {
  try {
    const {nome, modulo} = req.body

    if(!nome || !modulo){
      res.statusCode = 400
      throw new Error(" 'nome' e 'modulo' são obrigatórios");
    }

    const newTurma: Turma = {
      id: uuid(),
      nome,
      modulo 
    }

    await insertTurma(newTurma)

    res.status(201).send("Turma criada com sucesso!")
  } catch (error: any) {
    res.status(500).send({
      message: error.message
    });
  }
}
