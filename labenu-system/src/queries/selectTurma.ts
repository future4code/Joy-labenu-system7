import {Turma}  from "../classes/Turma";
import connection  from "../connection";

export const selectTurma = async(): Promise <Turma[]> => {
  console.log("teste",Turma)
  const turma = await connection("Turma")
      .select("Turma.id","Turma.nome","Turma.modulo")

  return turma
}