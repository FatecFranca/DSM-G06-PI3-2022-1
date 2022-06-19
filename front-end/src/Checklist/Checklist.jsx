import React, { useEffect, useState } from 'react'
import './Checklist.css'
import { Link } from 'react-router-dom'
import api from '../service/api';
import Titulo from '../Titulos/Titulo';
import { Component } from 'react';

const progresso = document.querySelector(".barra div")

const alterarProgresso = () => {
    progresso.setAttribute("style", "width: " /* concatenar valor do atributo */ + "%")
}

export default class Checklist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    getData() {
        api.get("question-group/")
            .then(res => {
                var data = res.data
                this.setState({ data: data })
            })
    }
    componentDidMount() {
        this.getData()
    }

    render() {
        console.log("data:")
        console.log(this.state.data)
        return (
            <div id="checklist">
                <Titulo texto='Checklist' />
                <div id="checklist_cartoes">
                    {this.state.data.map(d => (
                        <Link key={d._id} className="link" to="/checklist/questoes" state={d._id}>
                            <div className="checklist_cartao">
                                <div className="conteudo_cartCheck">
                                    {d.group}
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
}

