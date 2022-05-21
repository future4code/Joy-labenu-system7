import app from "./app";
import { changeDocente } from "./endpoints/changeDocente";
import { createDocente } from "./endpoints/createDocente";
import { createStudant } from "./endpoints/createStudant";
import { createTurma } from "./endpoints/createTurma";
import { editStudant } from "./endpoints/editStudant";
import { getAllDocentes } from "./endpoints/getAllDocentes";
import { getStudantAndHobby } from "./endpoints/getStudantAndHobby";
import { getStudantByName } from "./endpoints/getStudantByName";

app.post("/docentes", createDocente)
app.get("/docentes", getAllDocentes)
app.put("/docentes/:id", changeDocente)

//Endpoint para criar uma Turma
app.post("/turma", createTurma)

//INSERE ESTUDANTE NA TABELA
app.post("/addEstudante", createStudant);

//BUSCAR ESTUDANTE PELO NOME
app.get("/estudante/:nome", getStudantByName);

//EDITAR TURMA DO ESTUDANTE
app.put("/estudante/edit/:id", editStudant);

//BUSCAR ESTUDANTE E SEU RESPECTIVO HOBBY
app.get("/estudantes/", getStudantAndHobby);
