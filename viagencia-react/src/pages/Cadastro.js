import { useState } from "react";
import post from "../acessoAPI/post"

class Cliente {

    constructor(id, cpf, email, endereco, nome, senha, telefone) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
        this.email = email;
        this.senha = senha;
    }
}

function Cadastro() {

    function EnviarBackEnd(e) {

        e.preventDefault();

        let cliente = new Cliente("", cpf, email, endereco, nome, senha, telefone);
        
        let clienteJson = JSON.stringify(cliente);

        post("http://localhost:8080/api/cliente", clienteJson);
    }

    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [endereco, setEndereco] = useState();
    const [telefone, setTelefone] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    return (

        <form onSubmit={EnviarBackEnd}>
            <div className="input">
                <label className="labelform" htmlFor="nome">Nome</label>
                <input
                    type="text"
                    name="nome"
                    placeholder="Seu nome"
                    id="nome"
                    onChange={(p) => {setNome(p.target.value)}}>
                </input>
            </div>

            <div className="input">
                <label className="labelform" htmlFor="cpf">CPF</label>
                <input
                    type="text"
                    name="cpf"
                    placeholder="Exemplo: 123.456.789-10"
                    id="cpf"
                    onChange={(p) => {setCpf(p.target.value)}}>
                </input>
            </div>

            <div className="input">
                <label className="labelform" htmlFor="endereco">Endereço</label>
                <input
                    type="text"
                    name="endereco"
                    placeholder="Endereço"
                    id="endereco"
                    onChange={(p) => {setEndereco(p.target.value)}}>
                </input>
            </div>

            <div className="input">
                <label className="labelform" htmlFor="telefone">Telefone</label>
                <input
                    type="text"
                    name="telefone"
                    placeholder="Exemplo (00) 12345-6789"
                    id="telefone"
                    onChange={(p) => {setTelefone(p.target.value)}}>
                </input>
            </div>

            <div className="input">
                <label className="labelform" htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    placeholder="exemplo@email.com"
                    id="email"
                    onChange={(p) => {setEmail(p.target.value)}}>
                </input>
            </div>

            <div className="input">
                <label className="labelform" htmlFor="senha">Senha</label>
                <input
                    type="password"
                    name="senha"
                    placeholder=""
                    id="senha"
                    onChange={(p) => {setSenha(p.target.value)}}>
                </input>
            </div>

            <button>Enviar</button>

        </form>
    );
}

export default Cadastro;