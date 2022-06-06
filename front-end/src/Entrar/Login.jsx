import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
    return (

        <div className="Cartoes2">
            <div className="Cartao2">
                <div className="Conteudo2">
                    <form>
                        <h1>Login</h1>

                        <div>
                            <label>Email</label>
                            <input type="email" placeholder="jailsonmendes@gmail.com"></input>
                        </div>
                        <div><label>Senha</label>
                            <input type="password" placeholder=""></input></div>
                        <div id="entrar"><button>Entrar</button></div>
                        <div><Link id="cadastre" to="/cadastrar"><p>Cadastre-se</p></Link></div>

                    </form>

                </div>
            </div>
        </div>


    )
}
