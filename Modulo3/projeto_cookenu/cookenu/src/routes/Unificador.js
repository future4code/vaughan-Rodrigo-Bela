import { useNavigate } from "react-router-dom";


export const navigate = useNavigate()


export const vai_Login = () => {
        navigate("/login")
}

export const vai_Cadastro = () => {
        navigate("/cadastro")
}

export const vai_Add_Receita = () => {
        navigate("/add_receita")
}

export const vai_Detalhe_Receita = () => {
        navigate("/detalhe_receita/:id")
}

export const vai_Lista_Receitas = () => {
        navigate("/")
}