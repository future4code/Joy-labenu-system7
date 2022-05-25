import { Request, Response } from "express";
import connection from "../connection";

export const getStudantAndHobby = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result: any = await connection("Estudante")
      .leftJoin(
        "Estudante_Hobby",
        "Estudante.id",
        "Estudante_Hobby.estudante_id"
      )
      .select("Estudante.*", "Estudante_Hobby.*")
      .join("Hobby", "Estudante_Hobby.hobbies_id", "Hobby.id")
      .select("Estudante.*", "Hobby.*");
    if (result) {
      console.log("Estudante encontrado");
      res.status(200).send( result[0] );
    } else {
      res.status(500).send({
        message: "Estudante não encontrado",
      });
    }
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
};
