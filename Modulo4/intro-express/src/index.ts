
import express, { Express, Request, Response } from 'express';
import cors from 'cors';

const app: Express = express()

app.use(express.json()) 

app.use(cors()) 

app.get("/", (req: Request, res: Response) => {
    console.log("Acessei o meu endpoint");
    
    res.status(201).send("EndPoint acessado com sucesso OK") 
    // res.status(201).send {
    // id : 55,
    // nome : "Rodrigo",
    // phone : "11 0000 0000",
    // email : "rodrigo.lab@yahoo.com",
    // website : "labenu.com.br"


    // };
})

app.get("/users/:id", (req, res) => {
    const token = req.headers.authorization;
    const userId = req.params.id;

    if (req.query.chave === "acesso") {
        res.send("A chave vale 'acesso'")
    } else {
        res.send("A chave não é 'acesso'");
    }
})

app.get("/users/:age", (req, res) => {
    if (Number(req.params.age) % 2 === 0) {
        res.send("Sua idade é par")
    } else {
        res.send("Sua idade é impar")
    }
})


app.listen(3003, () => {
    console.log("O backend está rodando na porta 3003! :)");
})
