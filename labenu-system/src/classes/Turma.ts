import app  from "../app"
import { createTurma } from "../endpoints/createTurma";

export class Turma {
   id: string;
   nome: string;
   modulo: number;

  constructor(
     id: string,
     nome: string,
     modulo: number,
  ) {
     this.id = id;
     this.nome = nome;
     this.modulo = modulo;
  }

  // public getId = (): string => this.id

  // public getName = (): string => this.nome

  // public getModule = (): number => this.modulo

}

// export type Turma = { 
//   id: string,
//   name: string,
//   modulo: number
// }
