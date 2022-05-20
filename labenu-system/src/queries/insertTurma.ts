import {Turma}  from "../classes/Turma";
import connection  from "../connection";


export const insertTurma = async(turma: Turma): Promise <void> => {

     await connection("Turma")
     .insert(turma) 
} 