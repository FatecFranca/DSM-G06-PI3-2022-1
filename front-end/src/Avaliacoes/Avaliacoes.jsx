import React, { useEffect, useState } from 'react'
import './Avaliacoes.css'
import { Link } from 'react-router-dom'
import api from '../service/api';
import data1 from './mock'
import Titulo from '../Titulos/Titulo';
import E from '../Images/excluir.png'
import A from '../Images/AdicionarIcon.png'

export default function Avaliacoes() {
    const [questionsGroup, setQuestionsGroup] = useState(data1);
    useEffect(async () => {
        // colocar o prefixo correto
        await api.get('question_group/').then(res => setQuestionsGroup(res.data)).catch(() => alert('não foi possível encontrar um grupo'))
    }, []);

    const GroupItem = ({ group }) => {
        return (
            <Link key={group._id} className="link" to="/avaliacoes">
                <div className="Cartao4">

                    <div className="Conteudo4">


                        {group.group}
                        <hr />
                        <p>22/04/2024</p>
                        <hr />
                        <p>Dsjwjw wuhuyyuqw wygewyg.</p>
                        <button type="submit" id="butao"><img id="lixeirinha" src={E} alt="" /></button>



                    </div>

                </div>
            </Link>
        )
    }
    return (
        <div id="Checklist1">
            <Titulo texto="Avaliações" />
            <div id="Cartoes4">
                {questionsGroup &&
                    questionsGroup.map((group) => <GroupItem group={group} />)
                }

            </div>

            <div id="novaavaliacao">
                <a id="avalialink" href="/checklist">

                <div id="aaa">
                    <img id="adicionar" src={A} alt="" />
                    
                    
                    <p>Nova avaliação</p>
                    
                    
                </div>




                </a>

            </div>


        </div>


    )
}