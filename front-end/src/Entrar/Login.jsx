import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate  } from 'react-router-dom';
import api from '../service/api'


export default function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const singIn = async(e) => {
        const authenticated =  await api.post('user/login',{email:user, password }).then((res) => {
            localStorage.setItem('user.token', res.token );
            return res.auth;
        }).catch((res) => console.log('Usuario não encontrado'));

        if(authenticated){
            navigate('/checklist');
        }
        return authenticated;
    }
    return (
        <div className="Cartoes2">
            <div className="Cartao2">
                <div className="Conteudo2">
                <form onSubmit={singIn}>

                        <h1>Login</h1>

                        <div>
                            <label>Email</label>
                            <input type="email" placeholder="jailsonmendes@gmail.com" onChange={(value) => { setUser(value.currentTarget.value) }}></input>
                        </div>
                        <div><label>Senha</label>
                            <input type="password" onChange={(value) => { setPassword(value.currentTarget.value) }}></input></div>
                        <div><button type='submit'>Entrar</button></div>
                        <div><Link id="cadastre" to="/cadastrar"><p>Cadastre-se</p></Link></div>

                    </form>

                </div>
            </div>
        </div>
    )
}
