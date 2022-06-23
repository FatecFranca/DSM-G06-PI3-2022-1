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
        console.log(data)
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
        if(data.comments === "")
        {
            return(

                <div>
                    <p>{data.question.number} - {data.question.enunciation}</p>
                    <p>Resposta: {resposta}</p>
                </div>
            ) 
        }
        else{
            return(

                <div>
                    <p>{data.question.number} - {data.question.enunciation}</p>
                    <p>Resposta: {resposta}</p>
                    <p>Comentários : {data.comments}</p>
                </div>
            )
        }
    }



    return(
        <div>
            <div>
                <h3>Total</h3>
                <p>Sim : {resultado.filter(obj => {
                    if(obj.objective_answer === "Y") return true
                    return false
                }).length}</p>
                <p>Não : {resultado.filter(obj => {
                    if(obj.objective_answer === "N") return true
                    return false
                }).length}</p>
                <p>Não aplicável : {resultado.filter(obj => {
                    if(obj.objective_answer === "X") return true
                    return false
                }).length}</p>
            </div>
            {resultado && resultado.map(data => (<Resposta data={data}/>))}
        </div>
    )
}

export default Resultado