import React from 'react'
import TypeIt from 'typeit-react'
import './Inicio.css'
import { Link } from 'react-router-dom'


export default function Inicio() {
    return (

        <div id="outer-container">
                <div>
                    <div className="apresentacao">
                        <TypeIt options={{
                            cursor: false,
                        }}><Link id='ergolist' to="/"><strong>ERGOLIST</strong></Link><strong></strong>
                        </TypeIt>
                    </div>

                    <footer>

                        <h3>Sobre</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo eros ut est auctor pretium. Quisque volutpat blandit purus, vitae consequat est facilisis a. Mauris vulputate orci ultricies erat pretium iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut interdum, arcu vel tincidunt vehicula, quam mi convallis sapien, id mattis eros purus sit amet tortor. Etiam non nibh dolor. Integer vel tincidunt tellus. Vestibulum sagittis nisl neque, in tempor lorem accumsan id. Morbi a gravida nunc. Maecenas porta luctus nisi et auctor. Sed porta auctor ipsum, interdum maximus mauris vehicula at.</p>

                    </footer>
                </div>
          
        </div>


    )
}