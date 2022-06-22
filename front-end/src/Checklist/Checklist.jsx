import React, { useEffect, useState } from 'react'
import './Checklist.css'
import { Link, useLocation } from 'react-router-dom'
import api from '../service/api';
import Titulo from '../Titulos/Titulo';
import { Component } from 'react';

const progresso = document.querySelector(".barra div")

const alterarProgresso = () => {
    progresso.setAttribute("style", "width: " /* concatenar valor do atributo */ + "%")
}

export default function Checklist() {


    const location = useLocation()    
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log("frecth")
        const fetchData = async () => {
            await api.get("/question-group/")
            .then((res) => {
                console.log(res)
                setData(res.data)
            })
            .catch(error => console.log(error))
        };
        fetchData()
        console.log(location)
    }, [])

        return (
            <div id="checklist">
                <Titulo texto='Checklist' />
                <div id="checklist_cartoes">
                    {data && data.map(d => (
                        <Link key={d._id} className="link" to="/checklist/questoes" state={{"questionGroupId" : d._id, "assessment_id" : location.state}}>
                            <div className="checklist_cartao">
                                <div className="conteudo_cartCheck">
                                    {d.group}
                                    <meter></meter>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div id="checklist_botoes">
                    <Link to="/">
                        <button id="salvar">Salvar</button>
                    </Link>
                    <Link to="/"><button id="finalizar">Finalizar</button></Link>

                </div>
            </div>
        )
}
