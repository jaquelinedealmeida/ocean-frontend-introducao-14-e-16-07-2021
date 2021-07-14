import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/*
CRUD (Create, Read (Single & All), Update, Delete)

Create -> Formulário de criação
Read All -> Listagem de itens cadastrados
Read Single -> Visualização de um item específico
Update -> Formulário de edição
Delete -> Remover um item específico
*/

// Read All
// Precisa dos dados que serão exibidos
// A estrutura desses dados precisa possuir 'Nome' e 'URL da Imagem'

// Decidam qual será o tema da sua aplicação
// O meu será de Raças de Cachorro

const lista = [
    {
        id: 1,
        nome: "Golden Retriever",
        imagemUrl:
            "https://f.i.uol.com.br/fotografia/2017/10/27/150912457859f369e28eaa5_1509124578_3x2_md.jpg",
    },
];

function Item() {
    return <div>Item</div>;
}

function Lista() {
    return (
        <div>
            <Item />
        </div>
    );
}

function App() {
    return (
        <div>
            <Lista />
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
