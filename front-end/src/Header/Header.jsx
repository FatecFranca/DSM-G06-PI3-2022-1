import React from 'react';

//importar pacote link que é parte do react-router-dom
import { stack as Menu } from 'react-burger-menu'
import I from '../Images/icono_perfil.png'

import './Header.css';

class Header extends React.Component {

    render() {

        return (

            <div className="menu">
                
                <nav className="navMenu">
                    <div>
                        <ul>
                            <Menu>
                                <a href="/">Home</a>
                                <a href='/cadastrar'>Cadastrar</a>
                                <a href="/entrar">Entrar</a>
                                <a href="/checklist">Checklist</a>
                            </Menu>
                        </ul>
                            
                        <div id="menu2">
                            <ul>
                                <li><a href="/"> Sobre </a></li>
                                <li><a href="/cursos"> Quem somos </a></li>
                                <Menu noOverlay right customBurgerIcon={<img id='iconeperfil' alt='' src={I} />}>
                                    <a href="/">Meu Perfil</a>
                                    <a href="/cadastrar">Cadastrar</a>
                                    <a href="/entrar">Entrar</a>
                                </Menu>
                            </ul>
                        </div>

                    </div>
                </nav>
                
            </div>

        );

    }
}

export default Header;