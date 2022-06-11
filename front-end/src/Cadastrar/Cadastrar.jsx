import React, {useState} from 'react';
import { useNavigate  } from 'react-router-dom';
import api from '../service/api';
import './Cadastrar.css';

export default function Cadastrar({title,fcTitle}) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const navigate = useNavigate();

    const register = async() => {
        if(password !== repassword){
           return alert('as senhas não batem')
        }
        await api.post('/',{email, password,fullName }).then((res) => {
            localStorage.setItem('user.token', res.token );
            return navigate('/checklist');
        }).catch(() => alert('Não foi possível realizar o cadastro'));
    } 
    return (

        <div className="Cartoes">
            <div className="Cartao">
                <div className="Conteudo">
                    <form>
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