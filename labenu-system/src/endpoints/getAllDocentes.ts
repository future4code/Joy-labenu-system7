import { Request, Response } from "express";
import connection from "../connection";

export async function getAllDocentes(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const result = await connection("Docentes");
    res.status(200).send(result);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
}
