import React from 'react';

//importar pacote link que é parte do react-router-dom
import { stack as Menu } from 'react-burger-menu'
import { slide as Menu1 } from 'react-burger-menu'
import I from '../Images/icono_perfil.png'
import L from '../Images/LogoErgolist.png'

import './Header.css';
import './Header1.css';

class Header extends React.Component {
    


    render() {

        var isMenuOpen = function(state) {
            return <img src={L} alt="" />
        };

        return (

            <div className="menu">

                <nav className="navMenu">

                    <ul id="conteudo">
                        <ul id="parte1">
                            <Menu id=''>
                                <a href="/">Home</a>
                                <a href='/cadastrar'>Cadastrar</a>
                                <a href="/entrar">Entrar</a>
                                <a href="/checklist">Checklist</a>


                            </Menu>
                        </ul>

                        <a href="/"><img id="logo" src={L} alt="" /></a>

                        <ul id="parte2">
                            <li><a href="/"> Sobre </a></li>

                            <li><a href="/"> Quem somos </a></li>
                            
                            <Menu1 onStateChange={ isMenuOpen } id="opa" notransition noOverlay right customBurgerIcon={<img id='iconeperfil' alt='' src={I} />}>
                                <a href="/">Meu Perfil</a>
                                <a href="/cadastrar">Cadastrar</a>
                                <a href="/entrar">Entrar</a>

                            </Menu1>
                        </ul>

                    </ul>



                </nav>

            </div>

        );

    }
}

export default Header;