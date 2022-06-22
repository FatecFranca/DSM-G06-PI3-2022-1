import React from 'react';
import { stack as Menu } from 'react-burger-menu'
import { slide as Menu2 } from 'react-burger-menu'
import IconePerfil from '../Images/icone_perfil.png'
import LogoErgolist from '../Images/logo_ergolist.png'
import './Header.css';
import ThemeSwitch from 'react-theme-switch/src/ThemeSwitch';

class Header extends React.Component {

    render() {

        return (

            <div className="menu">

                <nav className="navMenu">

                    <ul id="conteudo">
                        <ul id="parte1">
                            <Menu>

                                <a href="/">Home</a>
                                <a href="/checklist">Checklist</a>
                                <a href="/avaliacoes">Minhas Avaliações</a>
                                
                            </Menu>
                        </ul>

                        <a href="/"><img id="logo" src={LogoErgolist} alt="Logo do site Ergolist" title="Ergolist" /></a>

                        <ul id="parte2">
                            <ThemeSwitch />
                            <li><a href="/"> Sobre </a></li>
                            <li><a href="/"> Quem somos </a></li>
                            <Menu2 id="menu2" right customBurgerIcon={<img id='iconeperfil' alt='' src={IconePerfil} />}>
                                <a href="/">Meu Perfil</a>
                                <a href="/cadastrar">Cadastrar</a>
                                <a href="/entrar">Entrar</a>

                            </Menu2>
                        </ul>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;