import React from 'react'
import TypeIt from 'typeit-react'
import './Inicio.css'
import { Link } from 'react-router-dom'
import Logo2Ergolist from '../Images/logo_ergolist2.png'
import Instagram from '../Images/LogoInstagram.png'
import Facebook from '../Images/LogoFacebook.png'
import Twitter from '../Images/LogoTwitter.png'

export default function Inicio() {
    return (
        <div>
            <div id="conjunto">
                <div id="redessociais">
                    <a href="/"><img src={Facebook} alt="Logo Facebook" title="/Ergolist" /></a>
                    <a href="/"><img src={Instagram} alt="Logo Instagram" title="@Ergolist" /></a>
                    <a href="/"><img src={Twitter} alt="Logo Twitter" title="/Ergolist1" /></a>
                </div>
                <div className="apresentacao">
                    <img id="logo2" src={Logo2Ergolist} alt="" />
                    <TypeIt options={{
                        cursor: false,
                    }}><Link id='ergolist' to="/"><strong>ERGOLIST</strong></Link><strong></strong>
                    </TypeIt>
                </div>
            </div>


            <footer>

                <h3>Sobre</h3>
                <p>Aplicando todo o conhecimento aprendido em aula, nós, do grupo 6 do PI pertencente ao 3º DSM, fizemos o
                    Ergolist, uma ferramenta baseada nas Heurísticas de Nielsen com o intuito de ajudar desenvolvedores na criação de sites com uma interface mais intuitiva e funcional, uma vez que faltam ferramentas desse tipo no
                    mercado.
                </p>

            </footer>
        </div>


    )
}