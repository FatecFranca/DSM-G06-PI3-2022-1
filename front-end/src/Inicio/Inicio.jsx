import React from 'react'
import TypeIt from 'typeit-react'
import './Inicio.css'
import { Link } from 'react-router-dom'
import L from '../Images/LogoErgolist2.png'
import I from '../Images/InstagramLogo.png'
import F from '../Images/LogoFacebook.png'
import T from '../Images/LogoTwitter.png'


export default function Inicio() {
    return (

                <div>
                    <div id="conjunto">
                        <div id="redessociais">
                            <img src={I} alt="" />
                            <img src={F} alt="" />
                            <img src={T} alt="" />
                        </div>
                        <div className="apresentacao">
                            <img id="logo2" src={L} alt="" />
                            <TypeIt options={{
                                cursor: false,
                            }}><Link id='ergolist' to="/"><strong>ERGOLIST</strong></Link><strong></strong>
                            </TypeIt>
                        </div>
                    </div>


                    <footer>

                        <h3>Sobre</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo eros ut est auctor pretium. Quisque volutpat blandit purus, vitae consequat est facilisis a. Mauris vulputate orci ultricies erat pretium iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut interdum, arcu vel tincidunt vehicula, quam mi convallis sapien, id mattis eros purus sit amet tortor. Etiam non nibh dolor. Integer vel tincidunt tellus. Vestibulum sagittis nisl neque, in tempor lorem accumsan id. Morbi a gravida nunc. Maecenas porta luctus nisi et auctor. Sed porta auctor ipsum, interdum maximus mauris vehicula at.</p>

                    </footer>
                </div>


    )
}