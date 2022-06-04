import React from 'react';
import './Cadastrar.css';

export default function Cadastrar() {
    return (

        <div className="Cartoes">
            <div className="Cartao">
                <div className="Conteudo">
                    <form>
                        <h1>Cadastro</h1>
                        <div>
                            <label for="Nome">Nome</label>
                            <input type="name" id="Nome" placeholder="Jailson Mendes"></input>
                        </div>
                        <div>
                            <label for="Email">Email</label>
                            <input id="Email" type="email" placeholder="jailsonmendes@gmail.com"></input>
                        </div>
                        <div>
                            <label for="criarsenha">Crie uma senha</label>
                            <input id="criarsenha" type="password" placeholder=""></input>
                        </div>
                        <div>
                            <label for="confirmarsenha">Confirme sua senha</label>
                            <input id="confirmarsenha" type="password" placeholder=""></input>
                        </div>
                        <div id='Checkbox'>
                            <input type="checkbox" id="Termos" />
                            <label for="Termos"> Li e concordo com os termos e serviços </label> 
                        </div>
                        <div><button>Cadastrar</button></div>
                    </form>
                </div>
            </div>
        </div>
    )
}
