import React, { useEffect, useState } from 'react'
import './Avaliacoes.css'
import { Link } from 'react-router-dom'
import api from '../service/api';

import Titulo from '../Titulos/Titulo';
import Excluir from '../Images/excluir.png'
import Adicionar from '../Images/icone_adicionar.png'

export default function Avaliacoes() {
    const [avaliacoes, setAvaliacoes] = useState(null);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    useEffect(() => {
        // colocar o prefixo correto
        const fetchData = async () => {
            await api.get("/assessment/")
                .then((res) => {
                    setAvaliacoes(res.data)
                    console.log(res.data)
                })
                .catch((e) => { console.log(e); alert(e) })
        };
        fetchData();
    }, []);

    const criarAvaliacao = () => {
        const postData = async () => {
            await api.post("/assessment/", {
                title: title,
                description: description,
                user: localStorage.getItem('user.token')
            })
        }
        postData()
            .then((res) => {
                window.location.reload()
            })
    }

    const deletarAvaliacao = (id) => {
        console.log(id)
        const deleteData = async () => {
            await api.delete("/assessment/", {data : {_id : id}})
            .then(res => window.location.reload())
            .catch(error => console.log(error))
        }
        
        deleteData();
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const GroupItem = ({ data }) => {
        const date = new Date(data.datetime).toLocaleDateString(
            'pt-br',
            {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timeZone: 'utc'
            }
        )
        return (
            <div>
            <Link key={data._id} className="link" to="/checklist" state={data._id}>
                <div className="cartoes_avaliacoes">

                    <div className="conteudo_cartAvaliac">

                        {data.title}
                        <hr />
                        <p>{date}</p>
                        <hr />
                        <p>{data.description}</p>
                    </div>
                </div>
            </Link>
            <button id="botaolixeirinha"><img id="lixeirinha" src={Excluir} alt="" onClick={() => { deletarAvaliacao(data._id) }} /></button>
            </div>
        )
    }

    return (
        <div id="Checklist1">
            <Titulo texto="Avaliações" />
            <div id="Cartoes4">
                {avaliacoes &&
                    avaliacoes.map((data) => <GroupItem data={data} />)
                }
            </div>

            <div id="novaavaliacao">
                <input name="title" type="text" onChange={handleTitle} placeholder="Título"/>
                <input name="description"type="text" onChange={handleDescription} placeholder="Descrição"/>
                <button id="avalialink" onClick={criarAvaliacao}>

                    <div id="botao_adicionar">
                        <img id="adicionar" src={Adicionar} alt="" />

                        <p>Nova avaliação</p>
                        

                    </div>

                </button>

            </div>

        </div>

    )
}