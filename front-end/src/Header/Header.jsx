import React from 'react';

//importar pacote link que é parte do react-router-dom
import { Link } from 'react-router-dom';
import I from '../Images/icono_perfil.png'
import { slide as Menu } from 'react-burger-menu'

import './Header.css';

class Header extends React.Component {
    showSettings(event) {
        event.preventDefault();

    }

    render() {
        
        return (
            <div className="menu">
                <nav className="navMenu">
                    <Menu>
                            <Link to="/">Home</Link>
                            <Link to="/cadastrar">Cadastrar</Link>
                            <Link to="/entrar">Entrar</Link>              
                            <Link to="/checklist">Checklist</Link>
                    </Menu>

                    <ul>

                        <li><Link to="/"> Sobre </Link></li>
                        <li><Link to="/cursos"> Quem somos </Link></li>
                        <img id='iconeperfil' alt='' src={I} />
                    </ul>
                </nav>
            </div>

        );

    }
}

export default Header;