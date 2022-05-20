import app from "./app";
import { Docentes } from "./classes/Docentes";
import { changeDocente } from "./endpoints/changeDocente";
import { createDocente } from "./endpoints/createDocente";
import { createTurma } from "./endpoints/createTurma";
import { getAllDocentes } from "./endpoints/getAllDocentes";

app.post("/docentes", createDocente)
app.get("/docentes", getAllDocentes)
app.put("/docentes/:id", changeDocente)

//Endpoint para criar uma Turma
app.post("/turma", createTurma)