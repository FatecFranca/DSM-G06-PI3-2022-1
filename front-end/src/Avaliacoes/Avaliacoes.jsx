import React, { useEffect, useState } from 'react'
import './Avaliacoes.css'
import { Link } from 'react-router-dom'
import api from '../service/api';
import data1 from './mock'
import Titulo from '../Titulos/Titulo';
import Excluir from '../Images/excluir.png'
import Adicionar from '../Images/icone_adicionar.png'

export default function Avaliacoes() {
    const [avaliacoes, setAvaliacoes] = useState(null);
    useEffect(() => {
        // colocar o prefixo correto
        const fetchData = async () => {
            await api.get("/assessment/")
                .then((res) => {
                    console.log(localStorage.getItem('user.token'))
                    console.log(res)
                    setAvaliacoes(res.data)
                })
                .catch((e) => { console.log(e); alert(e) })
        };
        fetchData()
    }, []);

    const criarAvaliacao = () => {
        const postData = async () => {
            const result = await api.post("/assessment/", {
                title: "Titulo teste",
                description: "Descrição teste",
                user: localStorage.getItem('user.token')
            })
            console.log(result);
        }
        postData()
            .then((res) => {
                console.log(res)
                window.location.reload()
            })
    }

    const deletarAvaliacao = (id) => {
        alert("here")
        const deleteData = async () => {
            await api.delete("/assessment/", { _id: id })
        }
        deleteData();
    }

    const GroupItem = ({ data }) => {
        return (
            <Link key={data._id} className="link" to="/avaliacoes">
                <div className="cartoes_avaliacoes">

                    <div className="conteudo_cartAvaliac">

                        {data.title}
                        <hr />
                        <p>22/04/2024</p>
                        <hr />
                        <p>Dsjwjw wuhuyyuqw wygewyg.</p>
                        <button id="botaolixeirinha"><img id="lixeirinha" src={Excluir} alt="" onSubmit={() => { deletarAvaliacao(data._id) }} /></button>

                    </div>

                </div>
            </Link>
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