import React from 'react'
import './Titulo.css'

export default function Titulo(props) {
    return (
        <div className="Titulo">

            <h1> {props.texto} </h1>

        </div>
    )
}