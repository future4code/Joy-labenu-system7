import { Request, Response } from "express";
import DocentesDatabase from "../database/docenteDatabase";

export async function getAllDocentes(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const docenteDatabase = new DocentesDatabase()
    const result = await docenteDatabase.getAll();
    res.status(200).send(result);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
}
