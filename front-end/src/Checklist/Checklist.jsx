import React, { useEffect, useState } from 'react'
import './Checklist.css'
import { Link } from 'react-router-dom'
import api from '../service/api';
import data from './mock'
import Titulo from '../Titulos/Titulo';

const progresso = document.querySelector(".barra div")

const alterarProgresso = () => {
    progresso.setAttribute("style", "width: " /* concatenar valor do atributo */ + "%")
}

export default function Checklist() {
    const [questionsGroup, setQuestionsGroup] = useState(data);
    useEffect(async () => {
        // colocar o prefixo correto
        await api.get('group/').then(res => setQuestionsGroup(res.data)).catch(() => alert('não foi possível encontrar um grupo'))
    }, []);

    const GroupItem = ({ group }) => {
        return (
            <Link key={group._id} className="link" to="/checklist/questoes">
                <div className="Cartao3">

                    <div className="Conteudo3">

                        {group.group}

                    </div>

                </div>
            </Link>
        )
    }
    return (
        <div id="Checklist">
            <Titulo texto = 'Checklist'/> 
            <div id="Cartoes3">
                {questionsGroup &&
                    questionsGroup.map((group) => <GroupItem group={group} />)
                }
            </div>
            <div id="ChecklistBotoes">
                <Link to="/">
                    <button id="salvar">Salvar</button>
                </Link>
                <Link to="/"><button id="finalizar">Finalizar</button></Link>

            </div>
        </div>

    )
}