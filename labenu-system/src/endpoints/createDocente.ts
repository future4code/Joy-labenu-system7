import { Request, Response } from "express";
import {v4 as uuid} from "uuid"
import { Docentes } from "../classes/Docentes"
import DocentesDatabase from "../database/docenteDatabase"

export const createDocente = async(
  req: Request,
  res: Response
): Promise <void> => {
  try {
    const { nome, email, data_nasc, turma_id } = req.body

    if(!nome || !email || !data_nasc || !turma_id){
      res.statusCode = 400
      throw new Error("Informações inválidas para conclusão do cadastro");
    }

    const newDocente: Docentes = {
      id: uuid(),
      nome,
      email,
      data_nasc,
      turma_id 
    }
    const docenteDatabase = new DocentesDatabase()
    await docenteDatabase.create(newDocente)

    res.status(201).send("Docente inserido com sucesso!")
  } catch (error: any) {
    res.status(500).send({
      message: error.message
    });
  }
}
