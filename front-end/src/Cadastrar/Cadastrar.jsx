import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../service/api';
import './Cadastrar.css';

export default function Cadastrar({ title, fcTitle }) {
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();
        if (password !== repassword) {
            return alert('as senhas não batem')
        }
        await api.post('/user/', { email, password, fullname })
            .then(function (res) {
                localStorage.setItem('user.token', res.token);
                return navigate('/');
            })
            .catch(function (error) {
                if (error === "Email já cadastrado") {
                    console.log(error)
                    alert("Email já cadastrado")
                }
                else { alert(error) }
            })
    }
    return (

        <div id="cartoes_cadastrar">
            <div id="cartao_cadastrar">
                <div id="conteudo_cartCadas">
                    <form onSubmit={register}>
                        <h1>Cadastro</h1>
                        <div>
                            <label for="Nome">Nome</label>
                            <input type="name" id="Nome" placeholder="Jailson Mendes" onChange={(value) => { setFullName(value.currentTarget.value) }}></input>
                        </div>
                        <div>
                            <label for="Email">Email</label>
                            <input id="Email" type="email" placeholder="jailsonmendes@gmail.com" onChange={(value) => { setEmail(value.currentTarget.value) }}></input>
                        </div>
                        <div>
                            <label for="criarsenha">Crie uma senha</label>
                            <input id="criarsenha" type="password" placeholder="" onChange={(value) => { setPassword(value.currentTarget.value) }}></input>
                        </div>
                        <div>
                            <label for="confirmarsenha">Confirme sua senha</label>
                            <input id="confirmarsenha" type="password" placeholder="" onChange={(value) => { setRepassword(value.currentTarget.value) }}></input>
                        </div>
                        <div id='checkbox'>
                            <input type="checkbox" id="termos" />
                            <label for="Termos"> <a id="termosServ" href="/">Li e concordo com os termos e serviços</a> </label>
                        </div>
                        <div><button>Cadastrar</button></div>
                    </form>
                </div>
            </div>
        </div>
    )
}
