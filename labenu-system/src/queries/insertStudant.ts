import { Studant } from "../classes/Studant";
import connection from "../connection";

export const insertStudant = async (studant: Studant): Promise<void> => {
  await connection("Estudante").insert(studant);
};
