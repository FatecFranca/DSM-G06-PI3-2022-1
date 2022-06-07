import React, { useEffect } from 'react'
import './Questoes.css'
import { Link } from 'react-router-dom'
import api from '../service/api';


export default function Questoes() {
    const id = 1
    useEffect(async() => {
        // colocar o prefixo correto
         await api.get(`question/${id}`).then(res => console.log('sucesso')).catch(() => alert('não foi possível encontrar um grupo'))
    }, []);

    return (
        <div className='inicio'>
            <p><strong>Questão 1 - </strong>O site possui uma interface que presta?</p>
        </div>
    )
}