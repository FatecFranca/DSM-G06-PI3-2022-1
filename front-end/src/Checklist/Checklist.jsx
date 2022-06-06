import React from 'react'
import './Checklist.css'
import { Link } from 'react-router-dom'

const progresso = document.querySelector(".barra div")

const alterarProgresso = () => {
    progresso.setAttribute("style", "width: " /* concatenar valor do atributo */ + "%")
}

export default function Checklist() {
    return (
        <div id="Checklist"> 
        <div id="Cartoes3">
            <Link className="link" to="/checklist/questoes">
                <div className="Cartao3">
                    <div className="Conteudo3">
                        Presteza
                    </div>
                    <div class="barra">
                        <div></div>
                    </div>
                </div>
            </Link>
            <Link className="link" to="/checklist/questoes">
                <div className="Cartao3">
                    <div className="Conteudo3">
                        Agrupamento <br /> por localização
                    </div>
                    <div class="barra">
                        <div></div>
                    </div>                    
                </div>
            </Link>
            <Link className="link" to="/checklist/questoes">
                <div className="Cartao3">
                    <div className="Conteudo3">
                        Agrupamento <br /> por formato
                    </div>
                    <div class="barra">
                        <div></div>
                    </div>
                </div>
            </Link>
            <Link className="link" to="/checklist/questoes">
                <div className="Cartao3">
                    <div className="Conteudo3">
                        Feedback
                    </div>
                    <div class="barra">
                        <div></div>
                    </div>
                </div>
            </Link>
            <Link className="link" to="/checklist/questoes">
                <div className="Cartao3">
                    <div className="Conteudo3">
                        Legibilidade
                    </div>
                    <div class="barra">
                        <div></div>
                    </div>
                </div>
            </Link>
            <Link className="link" to="/checklist/questoes">
                <div className="Cartao3">
                    <div className="Conteudo3">
                        Concisão
                    </div>
                    <div class="barra">
                        <div></div>
                    </div>
                </div>
            </Link>
            <Link className="link" to="/checklist/questoes">
                <div className="Cartao3">
                    <div className="Conteudo3">
                        Ações mínimas
                    </div>
                    <div class="barra">
                        <div></div>
                    </div>
                </div>
            </Link>
            <Link className="link" to="/checklist/questoes">
                <div className="Cartao3">
                    <div className="Conteudo3">
                        Densidade <br /> informacional
                    </div>
                    <div class="barra">
                        <div></div>
                    </div>
                </div>
            </Link>
            <Link className="link" to="/checklist/questoes">
                <div className="Cartao3">
                    <div className="Conteudo3">
                        Ações <br /> inplícitas
                    </div>
                    <div class="barra">
                        <div></div>
                    </div>
                </div>
            </Link>
            <Link className="link" to="/checklist/questoes">
                <div className="Cartao3">
                    <div className="Conteudo3">
                        Controles do <br /> usuário
                    </div>
                    <div class="barra">
                        <div></div>
                    </div>
                </div>
            </Link>
            <Link className="link" to="/checklist/questoes">
                <div className="Cartao3">
                    <div className="Conteudo3">
                        Flexibilidade
                    </div>
                    <div class="barra">
                        <div></div>
                    </div>
                </div>
            </Link>
            <Link className="link" to="/checklist/questoes">
                <div className="Cartao3">
                    <div className="Conteudo3">
                        Experiéncia do <br /> usuário
                    </div>
                    <div class="barra">
                        <div></div>
                    </div>
                </div>
            </Link>
            <Link className="link" to="/checklist/questoes">
                <div className="Cartao3">
                    <div className="Conteudo3">
                        Proteção <br /> contra erros
                    </div>
                    <div class="barra">
                        <div></div>
                    </div>
                </div>
            </Link>
            <Link className="link" to="/checklist/questoes">
                <div className="Cartao3">
                    <div className="Conteudo3">
                        Mensagens <br /> de erro
                    </div>
                    <div class="barra">
                        <div></div>
                    </div>
                </div>
            </Link>
            <Link className="link" to="/checklist/questoes">
                <div className="Cartao3">
                    <div className="Conteudo3">
                        Correção <br /> de erros
                    </div>
                    <div class="barra">
                        <div></div>
                    </div>
                </div>
            </Link>
            <Link className="link" to="/checklist/questoes">
                <div className="Cartao3">
                    <div className="Conteudo3">
                        Consistencia
                    </div>
                    <div class="barra">
                        <div></div>
                    </div>
                </div>
            </Link>
            <Link className="link" to="/checklist/questoes">
                <div className="Cartao3">
                    <div className="Conteudo3">
                        Significados
                    </div>
                    <div class="barra">
                        <div></div>
                    </div>
                </div>
            </Link>
            <Link className="link" to="/checklist/questoes">
                <div className="Cartao3">
                    <div className="Conteudo3">
                        Compatibilidade
                    </div>
                    <div class="barra">
                        <div></div>
                    </div>
                </div>
            </Link>
            
        </div>
        <div id="ChecklistBotoes">
                <Link to="/">
                    <button id="salvar">Salvar</button>
                </Link>
                <Link to="/"><button id="finalizar">Finalizar</button></Link>

            </div>
        </div>
    )
}