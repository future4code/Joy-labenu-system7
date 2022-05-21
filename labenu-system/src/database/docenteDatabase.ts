import { Docentes }  from "../classes/Docentes";
import BaseDatabase from "./baseDatabase";

class DocenteDatabase extends BaseDatabase{
     public async create(docente: Docentes) {
          await this.connection("Docentes")
          .insert(docente) 
     }
     
    public async getAll() {
          return await this.connection("Docentes")
          .select()
     }
}

export default DocenteDatabase