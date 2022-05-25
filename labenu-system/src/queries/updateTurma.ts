import {Turma}  from "../classes/Turma";
import { Request, Response } from "express";
import connection  from "../connection";


export const updateTurma = async(turma: Turma): Promise <void> => {

     await connection("Turma")
     .update(turma.modulo).where({
       id: turma.id
    }); 
} 