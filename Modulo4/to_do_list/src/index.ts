import knex from "knex";
import  express from "express";
import { Request, Response } from "express";
import cors from "cors";
import connection from "./connection";
import { AddressInfo } from "net";
import { FileWatcherEventKind } from "typescript";

const app = express();
app.use(express.json());
app.use(cors());

//_______________________Pega todos Alunos
app.get("/get_all_users", async(req: Request, res: Response): Promise<void> => {
    try {
        const resultado = await connection("BancoAlunos")
        res.status(200).send({message: resultado})
    } catch (error:any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})
//_______________________Pega Aluno por ID

app.get("/get_user/:id", async(req: Request, res: Response): Promise<void> => {
    try {
        const resultado = await connection("BancoAlunos").where ({id: req.params.id})
        .select(
            
        )
        res.status(200).send({message: resultado})
    } catch (error:any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

//_______________________Adiciona novo Aluno
app.post("/user", async(req: Request, res: Response): Promise<void> => {
    try {
        await connection("BancoAlunos")
        .insert ({
            id : `${Date.now()}`,
            name : req.body.name,
            nickname : req.body.nickname,
            email : req.body.email
        })
        res.status(201).send("Aluno(a) Cadastrado com Sucesso")
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})
//_________________________Edita Aluno por ID
app.put("/editUser/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        await connection ("BancoAlunos").where ({id: req.params.id})
        .update ({ 
            name : req.body.name,
            nickname : req.body.nickname
        })
        res.status(200).send("Aluno(a) Alterado com sucesso!!")
    } catch (error:any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})
//_________________________
const server = app.listen(3003, () => {
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Servidor esta rodando em http://localhost:${address.port}`);
    }else{
        console.error(`O servidor não esta rodando no https://localhost`);
    }
});
