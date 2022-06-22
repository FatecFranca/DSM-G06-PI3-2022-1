import React from 'react';
import { stack as Menu } from 'react-burger-menu'
import { slide as Menu2 } from 'react-burger-menu'
import IconePerfil from '../Images/icone_perfil.png'
import LogoErgolist from '../Images/logo_ergolist.png'
import './Header.css';
import ThemeSwitch from 'react-theme-switch/src/ThemeSwitch';

export default function Header() {
    const navigate = useNavigate()
    const logout = async () => {
        await api.post("/user/logout")
        .then((res) => {
            localStorage.removeItem('user.token')
            navigate('/entrar')
            window.location.reload()
        })
        .catch(e => {console.log(e); alert(e)})
    }
    
    if(!localStorage.getItem('user.token'))
    {
        return (

            <div className="menu">

                <nav className="navMenu">

                    <ul id="conteudo">
                        <ul id="parte1">
                            <Menu>
                                <a href="/">Home</a>
                            </Menu>
                        </ul>

                        <a href="/"><img id="logo" src={LogoErgolist} alt="Logo do site Ergolist" title="Ergolist" /></a>

                        <ul id="parte2">
                            <ThemeSwitch preserveRasters/>
                            <li><a href="/"> Sobre </a></li>
                            <li><a href="/"> Quem somos </a></li>
                            <Menu2 id="menu2" right customBurgerIcon={<img id='iconeperfil' alt='' src={IconePerfil} />}>
                                <a href="/cadastrar">Cadastrar</a>
                                <a href="/entrar">Entrar</a>

                            </Menu2>
                        </ul>
                    </ul>
                </nav>
            </div>
        );
    }
    else{
        return (

            <div className="menu">

                <nav className="navMenu">

                    <ul id="conteudo">
                        <ul id="parte1">
                            <Menu>

                                <a href="/">Home</a>
                                <a href="/avaliacoes">Minhas Avaliações</a>
                                
                            </Menu>
                        </ul>

                        <a href="/"><img id="logo" src={LogoErgolist} alt="Logo do site Ergolist" title="Ergolist" /></a>

                        <ul id="parte2">
                            <ThemeSwitch />
                            <li><a href="/"> Sobre </a></li>
                            <li><a href="/"> Quem somos </a></li>
                            <Menu2 id="menu2" right customBurgerIcon={<img id='iconeperfil' alt='' src={IconePerfil} />}>
                                <a href="/">Meu perfil</a>
                                <span onClick={logout}>Sair</span>

                            </Menu2>
                        </ul>
                    </ul>
                </nav>
            </div>
        );
    }
    
}