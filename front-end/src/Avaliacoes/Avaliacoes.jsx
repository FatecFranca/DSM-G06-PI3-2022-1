import React, { useEffect, useState } from 'react'
import './Avaliacoes.css'
import { Link } from 'react-router-dom'
import api from '../service/api';
import data1 from './mock'

export default function Avaliacoes() {
    const [questionsGroup, setQuestionsGroup] = useState(data1);
    useEffect(async() => {
        // colocar o prefixo correto
         await api.get('question_group/').then(res => setQuestionsGroup(res.data)).catch(() => alert('não foi possível encontrar um grupo'))
    }, []);

    const GroupItem = ({group}) => {
       return(
        <Link key={group._id} className="link" to="/avaliacoes">
        <div className="Cartao3">

            <div className="Conteudo3">

                ({group.group})

            </div>

        </div>
        </Link>
       )
    }
    return (
        <div id="Checklist">
            <div id="Cartoes3">
                    {questionsGroup && 
                        questionsGroup.map((group) => <GroupItem group={group}  />)
                    }
            </div>
        </div>
        

    )
}