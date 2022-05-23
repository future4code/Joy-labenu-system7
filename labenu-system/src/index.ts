import app from "./app";
import { changeDocente } from "./endpoints/changeDocente";
import { createDocente } from "./endpoints/createDocente";
import { createStudant } from "./endpoints/createStudant";
import { createTurma } from "./endpoints/createTurma";
import { editStudant } from "./endpoints/editStudant";
import { editTurma } from "./endpoints/editTurma";
import { getAllDocentes } from "./endpoints/getAllDocentes";
import { getStudantAndHobby } from "./endpoints/getStudantAndHobby";
import { getStudantByName } from "./endpoints/getStudantByName";
import { getTurma } from "./endpoints/getTurma";

app.post("/docentes", createDocente)
app.get("/docentes", getAllDocentes)
app.put("/docentes/:id", changeDocente)

//Endpoint para criar uma Turma
app.post("/turma", createTurma)

// MUDAR MODULO DA TURMA
app.put("/turma/:id", editTurma)

// PEGAR TURMAS ATIVAS
app.get("turma", getTurma)

//INSERE ESTUDANTE NA TABELA
app.post("/addEstudante", createStudant);

//BUSCAR ESTUDANTE PELO NOME
app.get("/estudante/:nome", getStudantByName);

//EDITAR TURMA DO ESTUDANTE
app.put("/estudante/edit/:id", editStudant);

//BUSCAR ESTUDANTE E SEU RESPECTIVO HOBBY
app.get("/estudantes/", getStudantAndHobby);
