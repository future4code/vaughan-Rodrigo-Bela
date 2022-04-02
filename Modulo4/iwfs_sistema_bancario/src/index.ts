//IMPORTAÇÔES
import express from "express";
import cors from "cors";
//INICIALIZAÇÂO DO EXPRESS
const app = express()
//CONFIGURAÇÃO DOS MIDDLEWARES
app.use(express.json())//USAR A SAIDA EM .JSON
app.use(cors())//HABILITA O CORS
//CONFIGURAÇÂO DA PORTA DE ACESSO
//app.listen(portalogica, função de confirmação da porta)
app.listen(3003,()=>{console.log("OK O BACKEND ESTA FUNCIONANDO NA PORTA 3003")})
