import { useState } from "react";
import post from "../acesso api/post";

class Destino {

    constructor(id, cidade, estado, pais) {
        this.id = id;
        this.cidade = cidade;
        this.estado = estado;
        this.pais = pais;
    }
}

function Home() {

    function EnviarBackEnd(e) {

        e.preventDefault();

        let destino = new Destino("", cidade, estado, pais);

        let destinoJson = JSON.stringify(destino);

        return (post("http://localhost:8080/api/destino", destinoJson));
    }

    const [cidade, setCidade] = useState();
    const [estado, setEstado] = useState();
    const [pais, setPais] = useState();

    
    return (
        <div class="fundo-form">

            <form onSubmit={EnviarBackEnd}>
                <h1>Cadastrar destino</h1>
                <div className="input">
                    <label htmlFor="cidade">Cidade</label>
                    <input type="text" name="cidade" id="cidade" onChange={(d) => { setCidade(d.target.value) }}></input>
                </div>

                <div className="input">
                    <label htmlFor="estado">Estado</label>
                    <input type="text" name="estado" id="estado" onChange={(d) => { setEstado(d.target.value) }}></input>
                </div>

                <div className="input">
                    <label htmlFor="pais">País</label>
                    <input type="text" name="pais" id="pais" onChange={(d) => { setPais(d.target.value) }}></input>
                </div>

                <div className="input">
                    <button>Enviar</button>
                </div>
            </form>

        </div>);
}

export default Home;