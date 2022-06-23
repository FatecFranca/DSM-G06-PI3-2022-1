import { useLocation } from "react-router-dom"
import api from "../service/api"
import { useState } from "react"
import { useEffect } from "react"



const Resultado = () => {
    // assessment_id = location.state
    const location = useLocation()
    const [resultado, setResultado] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const asnwersResult = await api.get(`/answer/assessment/${location.state}`)
            .then(res => setResultado(res.data))
            .catch(error => console.log(resultado))
        }
        fetchData();
    }, [])

    const Resposta = (data) => {
        data = data.data
        let resposta
        switch(data.objective_answer){
            case "Y":
                resposta = "Sim"
                break
            case "N":
                resposta = "Não"
                break
            case "X" :
                resposta = "Não aplicável"
                break
            case "P" :
                resposta = "Não respondida"
                break
        }
        return(

            <div>

                <p>{data.number}{data.question.enunciation}</p>
                <p>Resposta: {resposta}</p>
                <p>Comentários : {data.comments}</p>
            </div>
        )
    }



    return(
        <div>
            {resultado && resultado.map(data => (<Resposta data={data}/>))}
        </div>
    )
}

export default Resultado