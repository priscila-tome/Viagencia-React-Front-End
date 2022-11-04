import styles from "./Grade.modules.css";

function Home() {
    return (
        <div className="principal">

            <div className="fundoform1">
                <div className="containerlinhadestino">
                    <p className="linhadestino">Sua viagem começa aqui. Selecione seu destino:</p>
                </div>
                <div className="fundoform2">
                    <div className="input">
                        <label className="labelform" htmlFor="partida">Partida</label>
                        <input type="text" name="" placeholder="Insira sua cidade de partida" id="partida">
                        </input>
                    </div>

                    <div className="input">
                        <label className="labelform" htmlFor="destino">Destino</label>
                        <input type="text" name="" placeholder="Insira seu destino" id="destino"></input>
                    </div>

                    <div className="input">
                        <label className="labelform" htmlFor="ida">Ida</label>
                        <input type="text" name="" placeholder="DD/MM/AAAA" id="ida"></input>
                    </div>

                    <div className="input">
                        <label className="labelform" htmlFor="volta">Volta</label>
                        <input type="text" name="" placeholder="DD/MM/AAAA" id="volta"></input>
                    </div>

                    <div className="botao">
                        <a href="Destinos.html" target="_blank">Buscar</a>
                    </div>
                </div>
            </div>


            <h1 className="h1grade">Viagens em promoção</h1>
            <div className="gradeimagens">
                <div className="imagem">
                    <img src="./Imagens grade/Jericoacoara.jpg" alt=""></img>
                    <h1>Jericoacoara</h1>
                    <a href="Destinos.html" target="_blank">
                        <div className="efeito">
                            <p className="linha2">De</p>
                            <p className="linha3">R$ 1.200,57</p>
                            <p className="linha2">Por</p>
                            <p className="linha3">R$ 1.000,00</p>
                        </div>
                    </a>
                </div>

                <div className="imagem">
                    <img src="./Imagens grade/Disney.jpg" alt=""></img>
                    <h1>Disney</h1>
                    <a href="Destinos.html" target="_blank">
                        <div className="efeito">
                            <p className="linha2">De</p>
                            <p className="linha3">R$ 8.190,00</p>
                            <p className="linha2">Por</p>
                            <p className="linha3">R$ 6.600,31</p>
                        </div>
                    </a>
                </div>

                <div className="imagem">
                    <img src="./Imagens grade/Florianópolis.jpg" alt=""></img>
                    <h1>Florianópolis</h1>
                    <a href="Destinos.html" target="_blank">
                        <div className="efeito">
                            <p className="linha2">De</p>
                            <p className="linha3">R$ 500,26</p>
                            <p className="linha2">Por</p>
                            <p className="linha3">R$ 379,00</p>
                        </div>
                    </a>
                </div>

                <div className="imagem">
                    <img src="./Imagens grade/Las Vegas.jpg" alt=""></img>
                    <h1>Las Vegas</h1>
                    <a href="Destinos.html" target="_blank">
                        <div className="efeito">
                            <p className="linha2">De</p>
                            <p className="linha3">R$ 8.571,90</p>
                            <p className="linha2">Por</p>
                            <p className="linha3">R$ 6.753,32</p>
                        </div>
                    </a>
                </div>

                <div className="imagem">
                    <img src="./Imagens grade/Maragogi.jpg" alt=""></img>
                    <h1>Maragogi</h1>
                    <a href="Destinos.html" target="_blank">
                        <div className="efeito">
                            <p className="linha2">De</p>
                            <p className="linha3">R$ 2.464,98</p>
                            <p className="linha2">Por</p>
                            <p className="linha3">R$ 1.582,50</p>
                        </div>
                    </a>
                </div>

                <div className="imagem">
                    <img src="./Imagens grade/Rio de Janeiro.jpg" alt=""></img>
                    <h1>Rio de Janeiro</h1>
                    <a href="Destinos.html" target="_blank">
                        <div className="efeito">
                            <p className="linha2">De</p>
                            <p className="linha3">R$ 672,30</p>
                            <p className="linha2">Por</p>
                            <p className="linha3">R$ 451,70</p>
                        </div>
                    </a>
                </div>

                <div className="imagem">
                    <img src="./Imagens grade/Salvador.jpeg" alt=""></img>
                    <h1>Salvador</h1>
                    <a href="Destinos.html" target="_blank">
                        <div className="efeito">
                            <p className="linha2">De</p>
                            <p className="linha3">R$ 897,63</p>
                            <p className="linha2">Por</p>
                            <p className="linha3">R$ 653,90</p>
                        </div>
                    </a>
                </div>

                <div className="imagem">
                    <img src="./Imagens grade/São Paulo.jpg" alt=""></img>
                    <h1>São Paulo</h1>
                    <a href="Destinos.html" target="_blank">
                        <div className="efeito">
                            <p className="linha2">De</p>
                            <p className="linha3">R$ 342,00</p>
                            <p className="linha2">Por</p>
                            <p className="linha3">R$ 150,47</p>
                        </div>
                    </a>
                </div>


            </div>
        </div>
    );
}

export default Home;